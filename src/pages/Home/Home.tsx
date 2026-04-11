import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

// Assets — hero + sections
import img1  from '../../assets/img_1.png';
import img2  from '../../assets/img_2.png';
import img3  from '../../assets/img_3.png';
import img5  from '../../assets/img_5.png';
import img6  from '../../assets/img_6.png';
import img7  from '../../assets/img_7.png';
import img8  from '../../assets/img_8.png';
import img9  from '../../assets/img_9.png';
import img10 from '../../assets/img_10.png';
import img12 from '../../assets/img_12.png';
import img13 from '../../assets/img_13.png';
import img15 from '../../assets/img_15.png';
import img17 from '../../assets/img_17.png';
import img20 from '../../assets/img_20.png';
import img22 from '../../assets/img_22.png';
import img29 from '../../assets/img_29.png';
import img31 from '../../assets/img_31.png';
import img32 from '../../assets/img_32.png';

/* ─────────────────────────── Scroll-reveal hook ─────────────────────────── */
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

/* ─────────────────────────── Gallery images ─────────────────────────── */
const gallerySlides = [
  { src: img17, label: 'Collaborative Classrooms' },
  { src: img6,  label: 'Annual Athletics Day' },
  { src: img10, label: 'Cultural Celebrations' },
  { src: img13, label: 'Learning Spaces' },
  { src: img15, label: 'Student Community' },
  { src: img7,  label: 'Outdoor Activities' },
  { src: img22, label: 'School Events' },
  { src: img9,  label: 'Campus Life' },
];

/* ═══════════════════════════════ HOME PAGE ═══════════════════════════════ */
export default function Home() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <IdentitySection />
      <WhyUsSection />
      <GalleryCarousel />
      <CoreValuesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img12}
          alt="Mothercare Preparatory School"
          className="w-full h-full object-cover object-center scale-105"
          style={{ transform: 'scale(1.05)' }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0c]/85 via-[#0a0c0c]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 backdrop-blur-sm text-yellow-300 font-bold px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-700"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)' }}
          >
            Established 1998 · Kasese, Uganda
          </div>

          {/* Headline */}
          <h1
            className="font-black text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight transition-all duration-700 delay-150"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)' }}
          >
            For a{' '}
            <span className="text-red-600 italic">
              Firm
            </span>
            <br />Foundation
          </h1>

          {/* Sub-headline */}
          <p
            className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg transition-all duration-700 delay-300"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)' }}
          >
            Nurturing young minds from Baby Class to P.7 with a holistic curriculum
            that balances academic rigour and character development.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-500"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <Link
              to="/apply"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full text-center transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-500/40 hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 font-bold px-8 py-4 rounded-full text-center transition-all duration-300 hover:-translate-y-0.5"
            >
              Visit School
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f0] to-transparent z-10" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS BAR ─────────────────────────── */
function StatsBar() {
  const { ref, visible } = useReveal(0.2);
  const stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '1,200+', label: 'Active Students' },
    { value: '80+', label: 'Qualified Teachers' },
    { value: '98%', label: 'P.7 Pass Rate' },
  ];

  return (
    <section className="py-6 bg-[#1a1c1c] -mt-1">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-[#1a1c1c] px-6 py-8 text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── IDENTITY / MISSION ─────────────────────────── */
function IdentitySection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-28 px-6 bg-[#f5f5f0]">
      <div ref={ref} className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div
          className="text-center space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">The Academic Hearth</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1c1c] tracking-tight">Our Identity</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Our Mission',
              accent: 'bg-red-600',
              text: '"To build a firm foundation for excellence in education by fostering a love for learning and moral integrity."',
              delay: '0ms',
            },
            {
              title: 'Our Vision',
              accent: 'bg-yellow-400',
              text: 'To be the leading primary education provider in Western Uganda, producing innovative and responsible global citizens.',
              delay: '150ms',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-[36px] p-10 md:p-14 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: card.delay,
                transitionDuration: '700ms',
              }}
            >
              <div className={`w-1 h-16 ${card.accent} rounded-full mb-8`} />
              <h3 className="text-2xl font-black text-[#1a1c1c] mb-5">{card.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed italic">{card.text}</p>
              {/* Hover decoration */}
              <div className={`absolute -bottom-12 -right-12 w-40 h-40 ${card.accent} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── WHY CHOOSE US ─────────────────────────── */
function WhyUsSection() {
  const { ref, visible } = useReveal();

  const features = [
    { img: img31, title: 'Qualified Teachers',    desc: 'Mentors dedicated to unlocking potential through personalised attention and modern pedagogy.' },
    { img: img20, title: 'Holistic Development',  desc: 'Focusing on social, emotional, and cognitive growth beyond just academic achievement.' },
    { img: img32, title: 'Sports Excellence',     desc: 'Football, swimming, and athletics programs nurturing physical health and teamwork.' },
    { img: img2,  title: 'Modern Facilities',     desc: 'Science rooms, reading libraries, and spaces built for 21st-century learning.' },
  ];

  return (
    <section className="py-28 px-6 bg-[#1a1c1c]">
      <div ref={ref} className="max-w-7xl mx-auto space-y-16">
        {/* Header row */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <div className="space-y-4 max-w-xl">
            <span className="text-red-400 font-bold tracking-widest uppercase text-sm">Why Mothercare</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Why Families<br />Choose Us
            </h2>
          </div>
          <Link
            to="/about"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-[#242626] rounded-[28px] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${i * 120}ms`,
                transitionDuration: '700ms',
              }}
            >
              {/* Image with zoom on hover */}
              <div className="h-48 overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7 space-y-3">
                <h3 className="text-lg font-black text-white">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── GALLERY CAROUSEL ─────────────────────────── */
function GalleryCarousel() {
  const { ref, visible } = useReveal(0.1);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + gallerySlides.length) % gallerySlides.length);
  const next = () => setCurrent((c) => (c + 1) % gallerySlides.length);

  return (
    <section className="py-28 px-6 bg-[#f5f5f0] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <div className="space-y-3">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Our Campus</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1c1c] tracking-tight">
              Life at Mothercare
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-red-600 font-bold hover:text-red-500 transition-colors flex items-center gap-2 group"
          >
            View Full Gallery
          </Link>
        </div>

        {/* Carousel */}
        <div
          className="relative transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main featured image */}
          <div className="relative h-[400px] md:h-[560px] rounded-[40px] overflow-hidden shadow-2xl">
            {gallerySlides.map((slide, i) => (
              <div
                key={slide.src}
                className="absolute inset-0 transition-all duration-700"
                style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
              >
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c]/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <p className="text-white text-2xl md:text-3xl font-black drop-shadow-xl">{slide.label}</p>
                  <p className="text-white/60 text-sm mt-1">{current + 1} / {gallerySlides.length}</p>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {gallerySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2.5 bg-red-600' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="hidden md:flex gap-3 mt-5 overflow-hidden">
            {gallerySlides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => setCurrent(i)}
                className={`relative flex-1 h-24 rounded-[16px] overflow-hidden transition-all duration-300 ${
                  i === current ? 'ring-2 ring-red-600 ring-offset-2 ring-offset-[#f5f5f0] opacity-100 scale-105' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img src={slide.src} alt={slide.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CORE VALUES ─────────────────────────── */
function CoreValuesSection() {
  const { ref, visible } = useReveal();

  const values = [
    { icon: '★', label: 'Integrity',  color: 'text-yellow-500' },
    { icon: '◆', label: 'Excellence', color: 'text-red-500' },
    { icon: '●', label: 'Innovation', color: 'text-blue-400' },
    { icon: '▲', label: 'Community',  color: 'text-green-400' },
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        {/* Text side */}
        <div
          className="lg:col-span-2 space-y-8 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="space-y-3">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1c1c] tracking-tight">
              Our Core<br />Values
            </h2>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed">
            The pillars that support our academic hearth and guide every interaction — inside and outside the classroom.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.label}
                className="group flex items-center gap-3 bg-[#f5f5f0] hover:bg-red-50 rounded-2xl p-4 transition-all duration-300 cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${i * 100 + 300}ms`,
                  transitionDuration: '500ms',
                }}
              >
                <span className={`text-xl ${v.color} group-hover:scale-125 transition-transform duration-300`}>{v.icon}</span>
                <span className="font-bold text-[#1a1c1c]">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div
          className="lg:col-span-3 relative h-[480px] md:h-[600px] transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          {/* Main image with zoom on hover */}
          <div className="group h-full rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={img29}
              alt="Students at Mothercare"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-[#1a1c1c] text-white p-7 rounded-[28px] shadow-2xl hidden md:block max-w-xs">
            <p className="text-2xl font-black leading-tight">Kasese's Pride</p>
            <p className="text-slate-400 text-sm mt-2">Located near the majestic Rwenzori Mountains.</p>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-600/30 hidden md:block">
            Est. 1998
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */
function TestimonialsSection() {
  const { ref, visible } = useReveal();

  const testimonials = [
    {
      quote: 'Choosing Mothercare for my son was the best decision. The level of care and academic discipline is unmatched in Kasese.',
      author: 'Mrs. Mumbere',
      role: 'Parent, P.4 Student',
      avatar: img1,
    },
    {
      quote: "The school doesn't just focus on grades but on building character. My daughter has become so confident and innovative.",
      author: 'Mr. Bwambale',
      role: 'Parent, Baby Class',
      avatar: img3,
    },
    {
      quote: 'Excellent facilities and very dedicated teachers. The sports program is also a great highlight for my boys.',
      author: 'Mrs. Kabasweka',
      role: 'Parent, P.7 Student',
      avatar: img5,
    },
  ];

  return (
    <section className="py-28 px-6 bg-[#f5f5f0]">
      <div ref={ref} className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div
          className="text-center space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1c1c] tracking-tight">
            Voices of Our Parents
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="group bg-white rounded-[32px] p-9 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-8 transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 120}ms`,
                transitionDuration: '700ms',
              }}
            >
              {/* Quote mark */}
              <div className="space-y-4">
                <span className="text-5xl text-red-200 font-serif leading-none">"</span>
                <p className="text-slate-600 leading-relaxed">{t.quote}</p>
              </div>
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-red-100">
                  <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-[#1a1c1c]">{t.author}</p>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */
function CtaSection() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section className="py-10 px-4 md:px-12 pb-24">
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto bg-[#1a1c1c] rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.96)' }}
      >
        {/* BG image layer */}
        <div className="absolute inset-0">
          <img src={img8} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-[#1a1c1c]/90 to-[#1a1c1c]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-20 md:py-28 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Give Your Child a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Strong Foundation
            </span>{' '}
            for the Future.
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join the Mothercare family today and watch your child excel in a nurturing and professional environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <Link
              to="/apply"
              className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black px-10 py-5 rounded-full transition-all duration-300 text-lg shadow-xl shadow-yellow-400/20 hover:-translate-y-0.5"
            >
              Start Application
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
