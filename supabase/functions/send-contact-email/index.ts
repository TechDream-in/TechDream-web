
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import DOMPurify from "npm:dompurify@latest";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

// In-memory rate limiting store (consider using Supabase for production)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_HOUR = 3;

const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input.trim());
};

const validateFormData = (formData: any) => {
  const errors = [];
  
  if (!formData.name || formData.name.length < 2 || formData.name.length > 100) {
    errors.push("Name must be between 2 and 100 characters");
  }
  
  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push("Valid email address is required");
  }
  
  if (formData.phone && formData.phone.length > 20) {
    errors.push("Phone number is too long");
  }
  
  if (!formData.service || formData.service.length < 1) {
    errors.push("Service selection is required");
  }
  
  if (!formData.message || formData.message.length < 10 || formData.message.length > 2000) {
    errors.push("Message must be between 10 and 2000 characters");
  }
  
  return errors;
};

const checkRateLimit = (clientIP: string): boolean => {
  const now = Date.now();
  const clientRequests = rateLimitStore.get(clientIP) || [];
  
  // Remove expired requests
  const validRequests = clientRequests.filter((timestamp: number) => 
    now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (validRequests.length >= MAX_REQUESTS_PER_HOUR) {
    return false;
  }
  
  // Add current request
  validRequests.push(now);
  rateLimitStore.set(clientIP, validRequests);
  
  return true;
};

const handler = async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(JSON.stringify({
        error: "Too many requests. Please try again later."
      }), {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }

    const formData = await req.json();
    console.log('Contact form submission from IP:', clientIP);

    // Validate form data
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      return new Response(JSON.stringify({
        error: "Validation failed",
        details: validationErrors
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone || ''),
      service: sanitizeInput(formData.service),
      message: sanitizeInput(formData.message)
    };

    // Check for honeypot field (if present, it's likely a bot)
    if (formData.website || formData.url) {
      console.log('Potential bot submission detected (honeypot triggered)');
      // Return success to avoid revealing the honeypot
      return new Response(JSON.stringify({
        success: true
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }

    // Send notification email to help@digitalvista.com
    const notificationEmail = await resend.emails.send({
      from: "DigitalVista Contact <noreply@codetechinfosystem.com>",
      to: [
        "sourabh.patware+help@codetechinfosystem.com"
      ],
      reply_to: sanitizedData.email,
      subject: `New Contact Form Submission - ${sanitizedData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sanitizedData.service}</td>
              </tr>
            </table>
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #9333ea;">
              ${sanitizedData.message}
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              This email was sent from the DigitalVista contact form.
            </p>
          </div>
        </div>
      `
    });

    console.log('Notification email sent successfully');

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "DigitalVista Team <noreply@codetechinfosystem.com>",
      to: [
        sanitizedData.email
      ],
      subject: "Thank you for contacting DigitalVista!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Hello ${sanitizedData.name}!</h2>
            <p style="color: #666; line-height: 1.6; font-size: 16px;">
              Thank you for reaching out to DigitalVista. We have successfully received your inquiry about 
              <strong style="color: #9333ea;">${sanitizedData.service}</strong> and appreciate your interest in our services.
            </p>
            <div style="background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%); padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #9333ea;">
              <h3 style="margin: 0 0 10px 0; color: #333;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li style="margin-bottom: 8px;">Our team will review your message within 2-4 business hours</li>
                <li style="margin-bottom: 8px;">You'll receive a personalized response within 24 hours</li>
                <li style="margin-bottom: 8px;">We'll schedule a free consultation to discuss your project needs</li>
              </ul>
            </div>
            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to explore our portfolio and learn more about our services.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <div style="margin-bottom: 20px;">
                <a href="https://digitalvista.lovable.app/services" style="background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 0 10px; font-weight: bold;">
                  View Our Services
                </a>
                <a href="https://digitalvista.lovable.app/portfolio" style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 0 10px; font-weight: bold;">
                  See Our Portfolio
                </a>
              </div>
            </div>
            <hr style="border: none; height: 1px; background: #eee; margin: 30px 0;">
            <div style="text-align: center;">
              <p style="color: #999; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong style="color: #9333ea;">The DigitalVista Team</strong>
              </p>
              <p style="color: #ccc; font-size: 12px; margin: 10px 0 0 0;">
                This email was sent from DigitalVista. If you didn't submit a contact form, please ignore this email.
              </p>
            </div>
          </div>
        </div>
      `
    });

    console.log('Confirmation email sent successfully');

    return new Response(JSON.stringify({
      success: true,
      message: "Message sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    
    // Don't expose internal error details
    return new Response(JSON.stringify({
      error: "An error occurred while processing your request. Please try again later."
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  }
};

serve(handler);
