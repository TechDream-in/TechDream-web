
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in animation-delay-500">
            We create stunning websites, drive digital marketing success, and bring your vision to life 
            with cutting-edge web development, SEO, video editing, and animation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1000">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Projects in Pipeline</div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedication to Quality</div>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">Fresh</div>
              <div className="text-gray-600">Innovative Approach</div>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600">Custom websites and web applications built with modern technologies.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Strategic marketing campaigns to boost your online presence and ROI.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO & Analytics</h3>
              <p className="text-gray-600">Improve your search rankings and track performance with data-driven insights.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
