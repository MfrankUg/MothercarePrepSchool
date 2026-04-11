import { useEffect, useRef, useState } from 'react';

import img1  from '../../assets/img_1.png';
import img2  from '../../assets/img_2.png';
import img3  from '../../assets/img_3.png';
import img5  from '../../assets/img_5.png';
import img6  from '../../assets/img_6.png';
import img7  from '../../assets/img_7.png';
import img8  from '../../assets/img_8.png';
import img9  from '../../assets/img_9.png';
import img10 from '../../assets/img_10.png';
import img11 from '../../assets/img_11.png';
import img13 from '../../assets/img_13.png';
import img14 from '../../assets/img_14.png';
import img15 from '../../assets/img_15.png';
import img16 from '../../assets/img_16.png';
import img17 from '../../assets/img_17.png';
import img18 from '../../assets/img_18.png';
import img19 from '../../assets/img_19.png';
import img22 from '../../assets/img_22.png';
import img23 from '../../assets/img_23.png';
import img24 from '../../assets/img_24.png';

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const allImages = [
  { src: img17, alt: 'Collaborative Classrooms',  category: 'Classrooms' },
  { src: img6,  alt: 'Annual Athletics',           category: 'Sports' },
  { src: img10, alt: 'Cultural Day Celebrations',  category: 'Events' },
  { src: img13, alt: 'Learning Spaces',            category: 'Classrooms' },
  { src: img15, alt: 'Student Community',          category: 'Events' },
  { src: img7,  alt: 'Outdoor Activities',         category: 'Sports' },
  { src: img22, alt: 'School Events',              category: 'Events' },
  { src: img9,  alt: 'Campus Life',                category: 'Events' },
  { src: img1,  alt: 'Classroom Interaction',      category: 'Classrooms' },
  { src: img2,  alt: 'Modern Facilities',          category: 'Classrooms' },
  { src: img3,  alt: 'Student Activities',         category: 'Events' },
  { src: img5,  alt: 'Sports Training',            category: 'Sports' },
  { src: img8,  alt: 'School Grounds',             category: 'Events' },
  { src: img11, alt: 'Science Lab',                category: 'Classrooms' },
  { src: img14, alt: 'Swimming Gala',              category: 'Sports' },
  { src: img16, alt: 'Art & Craft',                category: 'Events' },
  { src: img18, alt: 'Library Time',               category: 'Classrooms' },
  { src: img19, alt: 'Football Practice',          category: 'Sports' },
  { src: img23, alt: 'Prize Giving Day',           category: 'Events' },
  { src: img24, alt: 'Morning Assembly',           category: 'Events' },
];

const heroSlides = [img17, img6, img10, img22, img9];
const tabs = ['All', 'Classrooms', 'Events', 'Sports'] as const;
type Tab = typeof tabs[number];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const [heroIdx, setHeroIdx] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const { ref: gridRef, visible: gridVisible } = useReveal(0.05);

  // Auto-rotate hero every 5 seconds
  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = activeTab === 'All' ? allImages : allImages.filter((img) => img.category === activeTab);

  return (
    <div className="bg-[#f5f5f0] min-h-screen overflow-x-hidden">

      {/* ── Hero Slideshow ── */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === heroIdx ? 1 : 0 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c]/80 via-[#0a0c0c]/30 to-transparent" />

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`rounded-full transition-all duration-300 ${i === heroIdx ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pt-20">
          <div className="bg-white-600/20 border border-white backdrop-blur-sm text-white font-bold px-5 py-2 rounded-full text-xs tracking-widest uppercase mb-6">
            Visual Journey
          </div>
          <h1 className="font-black text-white text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            Capturing{' '}
            <span className="text-transparent bg-clip-text bg-red-600 italic">
              Excellence
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            Explore vibrant campus life — from academic rigour to the joy of sports and arts.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f5f5f0] to-transparent z-10" />
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#1a1c1c] text-white shadow-lg shadow-black/10'
                    : 'bg-white text-slate-500 hover:text-[#1a1c1c] hover:bg-slate-100 shadow-sm'
                }`}
              >
                {tab}
                <span className={`ml-2 text-xs ${activeTab === tab ? 'text-white/50' : 'text-slate-400'}`}>
                  {tab === 'All' ? allImages.length : allImages.filter((i) => i.category === tab).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filtered.map((image, i) => (
              <div
                key={image.src + i}
                className="group relative break-inside-avoid rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${Math.min(i * 60, 600)}ms`,
                  transitionDuration: '600ms',
                }}
                onClick={() => setLightbox({ src: image.src, alt: image.alt })}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-red-400 font-bold uppercase tracking-widest text-xs mb-1">{image.category}</span>
                  <p className="text-white font-bold text-sm leading-snug">{image.alt}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 font-medium">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full rounded-[24px] shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">{lightbox.alt}</p>
        </div>
      )}
    </div>
  );
}
