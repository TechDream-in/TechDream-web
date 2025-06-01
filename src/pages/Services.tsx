
import ServiceCard from '../components/ServiceCard';
import { 
  LayoutDashboard, 
  Search, 
  Video, 
  Image 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: LayoutDashboard,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'Custom Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization'
      ]
    },
    {
      icon: Search,
      title: 'Digital Marketing & SEO',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.',
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services to create engaging content that captivates your audience and tells your story.',
      features: [
        'Corporate Videos',
        'Marketing Content',
        'Social Media Videos',
        'Motion Graphics',
        'Color Correction'
      ]
    },
    {
      icon: Image,
      title: 'Animation & Graphics',
      description: 'Creative animation and graphic design services to bring your ideas to life with stunning visual effects.',
      features: [
        '2D/3D Animation',
        'Logo Design',
        'Brand Identity',
        'UI/UX Design',
        'Infographics'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Comprehensive digital solutions designed to transform your business and drive growth in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your goals, requirements, and target audience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Our expert team brings your vision to life with precision.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">We deliver exceptional results and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project and create a customized solution that drives results.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Project Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
