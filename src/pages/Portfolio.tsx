
import { useState } from 'react';
import { X, Play } from 'lucide-react';

const Portfolio = () => {
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'poster' | 'video';
    src: string;
    title: string;
  } | null>(null);

  const posters = [
    {
      id: 1,
      title: "Social Media Campaign - Fashion Brand",
      src: "/lovable-uploads/8ae60bcd-0276-4d1e-a1e3-cf8beb66d60d.png",
    },
    {
      id: 2,
      title: "Product Launch Poster - Tech Startup",
      src: "/lovable-uploads/9594843c-de10-4599-8dab-bb197d770255.png",
    },
    {
      id: 3,
      title: "Event Promotion - Digital Conference",
      src: "/lovable-uploads/a07ea9d2-8d9b-4939-8d1b-30fb4167bbd1.png",
    },
    {
      id: 4,
      title: "Brand Awareness Campaign",
      src: "/lovable-uploads/1084f4d9-d3a5-40ba-af30-0c8df0870937.png",
    },
    {
      id: 5,
      title: "Holiday Sale Promotion",
      src: "/lovable-uploads/e1e0305c-8c33-4502-a416-830d52a22dcf.png",
    },
    {
      id: 6,
      title: "Corporate Branding Design",
      src: "/lovable-uploads/9b0988a7-7a3c-488c-951a-3c6e9412f43f.png",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Corporate Brand Video",
      thumbnail: "/lovable-uploads/8ae60bcd-0276-4d1e-a1e3-cf8beb66d60d.png",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Product Demo Video",
      thumbnail: "/lovable-uploads/9594843c-de10-4599-8dab-bb197d770255.png",
      videoSrc: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "Social Media Ad Campaign",
      thumbnail: "/lovable-uploads/a07ea9d2-8d9b-4939-8d1b-30fb4167bbd1.png",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Event Highlight Reel",
      thumbnail: "/lovable-uploads/1084f4d9-d3a5-40ba-af30-0c8df0870937.png",
      videoSrc: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  const openPreview = (type: 'poster' | 'video', src: string, title: string) => {
    setSelectedMedia({ type, src, title });
  };

  const closePreview = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Explore our creative work and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Digital Marketing Posters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketing Posters</h2>
            <p className="text-xl text-gray-600">Creative designs that drive engagement and conversions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posters.map((poster, index) => (
              <div 
                key={poster.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openPreview('poster', poster.src, poster.title)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{poster.title}</h3>
                  <p className="text-gray-600">Click to view full size</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Edited Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Videos Edited</h2>
            <p className="text-xl text-gray-600">Professional video content that tells your story</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative group"
                onClick={() => openPreview('video', video.videoSrc, video.title)}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">Click to watch video</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closePreview}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-900">{selectedMedia.title}</h3>
              </div>
              
              <div className="p-4">
                {selectedMedia.type === 'poster' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[70vh]"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create something amazing together that showcases your brand's unique story.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
