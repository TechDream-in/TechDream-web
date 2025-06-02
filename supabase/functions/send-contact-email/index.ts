import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const handler = async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders
    });
  }

  try {
    const formData = await req.json();
    console.log('Received contact form data:', formData);

    // Send notification email to help@digitalvista.com
    const notificationEmail = await resend.emails.send({
      from: "DigitalVista Contact <noreply@codetechinfosystem.com>",
      to: [
        "sourabh.patware+help@codetechinfosystem.com"
      ],
      reply_to: formData.email,
      subject: `New Contact Form Submission - ${formData.service}`,
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
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${formData.service}</td>
              </tr>
            </table>
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #9333ea;">
              ${formData.message}
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              This email was sent from the DigitalVista contact form.
            </p>
          </div>
        </div>
      `
    });

    console.log('Notification email sent:', notificationEmail);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "DigitalVista Team <noreply@codetechinfosystem.com>",
      to: [
        formData.email
      ],
      subject: "Thank you for contacting DigitalVista!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Hello ${formData.name}!</h2>
            <p style="color: #666; line-height: 1.6; font-size: 16px;">
              Thank you for reaching out to DigitalVista. We have successfully received your inquiry about 
              <strong style="color: #9333ea;">${formData.service}</strong> and appreciate your interest in our services.
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

    console.log('Confirmation email sent:', confirmationEmail);

    return new Response(JSON.stringify({
      success: true,
      notificationId: notificationEmail.data?.id,
      confirmationId: confirmationEmail.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response(JSON.stringify({
      error: error.message
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
