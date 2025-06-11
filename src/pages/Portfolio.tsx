
import { Play, ExternalLink, Eye, X } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [selectedMedia, setSelectedMedia] = useState<{type: 'video' | 'poster', src: string, title: string} | null>(null);

  const webProjects = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "Modern online store with shopping cart and payment integration",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Professional business website with CMS integration",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      technologies: ["WordPress", "PHP", "MySQL"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio site for a digital artist",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      category: "Web Development",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const posterProjects = [
    {
      id: 1,
      title: "Fitness Club Campaign",
      description: "High-impact poster design for gym membership drive",
      image: "/media/poster-0276-4d1e-a1e3-cf8beb66d60d.png",
      category: "Digital Marketing"
    },
    {
      id: 2,
      title: "Fitness Motivation Series",
      description: "Social media poster for fitness club engagement",
      image: "/media/poster-de10-4599-8dab-bb197d770255.png",
      category: "Digital Marketing"
    },
    {
      id: 3,
      title: "Job Recruitment Campaign",
      description: "Professional hiring poster for tech positions",
      image: "/media/poster-8d9b-4939-8d1b-30fb4167bbd1.png",
      category: "Digital Marketing"
    },
    {
      id: 4,
      title: "Digital Marketing Agency",
      description: "Corporate branding poster for marketing services",
      image: "/media/poster-d3a5-40ba-af30-0c8df0870937.png",
      category: "Digital Marketing"
    },
    {
      id: 5,
      title: "Educational Course Promotion",
      description: "SQL development course marketing material",
      image: "/media/poster-8c33-4502-a416-830d52a22dcf.png",
      category: "Digital Marketing"
    },
    {
      id: 6,
      title: "Coffee Brand Campaign",
      description: "Premium coffee product promotion poster",
      image: "/media/poster-7a3c-488c-951a-3c6e9412f43f.png",
      category: "Digital Marketing"
    }
  ];

  const videoProjects = [
    {
      id: 1,
      title: "Product Launch Video",
      description: "Promotional video for tech startup product launch",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      duration: "2:30",
      category: "Video Editing"
    },
    {
      id: 2,
      title: "Corporate Training Video",
      description: "Educational video series for employee onboarding",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      duration: "5:45",
      category: "Video Editing"
    },
    {
      id: 3,
      title: "Social Media Campaign",
      description: "Series of short promotional videos for Instagram and TikTok",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      duration: "0:30",
      category: "Video Editing"
    }
  ];

  const handleMediaClick = (type: 'video' | 'poster', src: string, title: string) => {
    setSelectedMedia({ type, src, title });
  };

  const closePreview = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Showcasing our latest work in web development, digital marketing designs, and video editing. 
            Each project represents our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Website Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Websites Created</h2>
            <p className="text-xl text-gray-600">Professional websites built with modern technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Posters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketing Posters</h2>
            <p className="text-xl text-gray-600">Eye-catching designs that drive engagement and conversions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posterProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handleMediaClick('poster', project.image, project.title)}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors "
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Poster</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Videos Edited</h2>
            <p className="text-xl text-gray-600">Creative video content that engages and converts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative group">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handleMediaClick('video', project.videoSrc, project.title)}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Video</span>
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Preview Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedMedia.title}</h3>
              
              {selectedMedia.type === 'video' ? (
                <video
                  controls
                  autoPlay
                  className="w-full max-h-96 rounded-lg"
                  preload="metadata"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-96 object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create something amazing together. Contact us today to discuss your requirements.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
