import { useState } from 'react';
import img17 from '../../assets/img_17.png';
import img6 from '../../assets/img_6.png';
import img10 from '../../assets/img_10.png';
import img13 from '../../assets/img_13.png';
import img15 from '../../assets/img_15.png';
import img7 from '../../assets/img_7.png';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Classrooms', 'Events', 'Sports'];

  const images = [
    { src: img17, alt: 'Collaborative Classrooms', category: 'Classrooms', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: img6, alt: 'Annual Athletics', category: 'Sports', span: 'col-span-1 md:col-span-1 row-span-1' },
    { src: img10, alt: 'Cultural Day Celebrations', category: 'Events', span: 'col-span-1 md:col-span-1 row-span-1' },
    { src: img13, alt: 'Learning Spaces', category: 'Classrooms', span: 'col-span-1 md:col-span-1 row-span-1' },
    { src: img15, alt: 'Student Community', category: 'Events', span: 'col-span-1 md:col-span-1 row-span-1' },
    { src: img7, alt: 'Outdoor Activities', category: 'Sports', span: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="bg-red-700/10 text-red-700 font-bold px-4 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase">
            Visual Journey
          </div>
          <h1 className="font-extrabold text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Capturing <span className="text-red-700 italic">Excellence</span><br />
            in Every Moment.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Explore our vibrant campus life through the lens of our students, from academic rigor to the joy of sports and arts.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[48px] shadow-sm border border-slate-100 p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a1c1c] mb-2">Campus Gallery</h2>
              <p className="text-slate-500">A window into life at Mothercare Preparatory.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-[#f3f3f3] p-2 rounded-[24px]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#8595A9] text-white shadow-md' 
                      : 'text-slate-500 hover:text-[#1a1c1c] hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className={`group relative rounded-[32px] overflow-hidden ${activeTab === 'All' ? image.span : 'col-span-1 md:col-span-2 row-span-1'}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-8">
                  <span className="text-red-400 font-bold uppercase tracking-widest text-xs mb-1 drop-shadow-md">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 font-medium">No images found for this category.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
