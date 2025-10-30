import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="col-span-1 -mt-14 mr-16 md:col-span-2">
            <div className="flex justify-center">
              <img
                src="/media/footor_logo.png"
                alt="TechDream Logo"
                className=" h-60 -mb-12 w-auto"
              />
            </div>
            <p className="text-gray-300 max-w-md mx-auto text-center md:text-center">
              Transforming businesses through innovative digital solutions. We create stunning websites,
              drive digital marketing success, and bring your vision to life.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>Video Editing</li>
              <li>Animation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a
                  href="https://www.linkedin.com/company/techdream-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a
                  href="https://www.instagram.com/techdream.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                <a
                  href="https://www.facebook.com/techdream.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>+91-8817125255</li>
              <li>info@techdream.in</li>
              <li>Sector-A, Slice-3, Scheme No-78, Aranya Nagar, Indore, Madhya Pradesh 452010</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
