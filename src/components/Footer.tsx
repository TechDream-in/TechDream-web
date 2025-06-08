
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/284387be-083c-4416-9f40-e7911c09402d.png" 
                alt="TechDream Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                TechDream
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
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
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
