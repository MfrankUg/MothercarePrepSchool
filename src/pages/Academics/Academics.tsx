import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import img3  from '../../assets/img_3.png';
import img16 from '../../assets/img_16.png';
import img19 from '../../assets/img_19.png';
import img24 from '../../assets/img_24.png';
import img25 from '../../assets/img_25.png';
import img34 from '../../assets/img_34.png';
import img35 from '../../assets/img_35.png';
import img36 from '../../assets/img_36.png';
import img9  from '../../assets/img_9.png';

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.12) {
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

/* ═══════════════ ACADEMICS PAGE ═══════════════ */
export default function Academics() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen overflow-x-hidden">
      <HeroSection />
      <NurserySection />
      <PrimarySection />
      <ExtracurricularSection />
      <StatsSection />
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const { ref, visible } = useReveal(0.05);
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 px-6">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* Text side */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-start space-y-8 z-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="bg-red-600/10 text-red-600 font-bold px-5 py-2 rounded-full text-xs tracking-widest uppercase">
            The Academic Hearth
          </div>
          <h1 className="font-black text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Excellence in<br />
            Every{' '}
            <span className="text-red-600 italic">Step</span>
            <br />of the Journey.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            A holistic approach to education that nurtures curiosity in the nursery classes and fosters rigorous academic discipline in the primary years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-600/30 hover:-translate-y-0.5">
              Explore Curriculum
            </button>
            <button className="bg-white hover:bg-slate-50 text-[#1a1c1c] border border-slate-200 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5">
              View Prospectus
            </button>
          </div>
        </div>

        {/* Image side */}
        <div
          className="w-full lg:w-1/2 relative min-h-[420px] md:min-h-[580px] transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <div className="touch-img group absolute right-0 top-0 w-4/5 h-[80%] rounded-[40px] overflow-hidden shadow-2xl z-10">
            <img
              src={img24}
              alt="Students"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Floating stat card */}
            <div className="absolute left-0 bottom-10 bg-white p-6 md:p-8 rounded-[28px] shadow-xl z-20 max-w-[230px]">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-yellow-500 text-2xl font-black">70%</div>
            </div>
            <div className="text-[#1a1c1c] font-black text-xl leading-tight">Division One</div>
            <div className="text-slate-500 text-sm mt-1">2023 PLE Results</div>
          </div>
          <div className="absolute inset-0 bg-yellow-400/15 rounded-[48px] rotate-6 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

/* ─── NURSERY ─── */
function NurserySection() {
  const { ref, visible } = useReveal(0.08);

  const classes = [
    { img: img25, title: 'Baby Class',   desc: 'Social discovery and play-based sensory learning.',               accent: 'bg-pink-50' },
    { img: img19, title: 'Middle Class', desc: 'Introduction to alphabets, numbers, and core motor skills.',       accent: 'bg-blue-50' },
    { img: img36, title: 'Top Class',    desc: 'Pre-primary readiness and early literacy development.',            accent: 'bg-yellow-50' },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div ref={ref} className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Nursery Section</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a1c1c]">Nurturing Young Minds</h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm italic">"A home away from home for your little ones."</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((c, i) => (
            <div
              key={c.title}
              className="group bg-[#f5f5f0] rounded-[32px] overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 120}ms`,
                transitionDuration: '600ms',
              }}
            >
              <div className={`h-60 w-full ${c.accent} p-5 relative overflow-hidden`}>
                <div className="touch-img h-full rounded-[20px] overflow-hidden shadow-md">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-8 bg-white space-y-3">
                <h3 className="text-2xl font-black text-[#1a1c1c]">{c.title}</h3>
                <p className="text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRIMARY ─── */
function PrimarySection() {
  const { ref, visible } = useReveal(0.08);

  const points = [
    'Rigorous PLE Preparation and Mock Assessments',
    'Digital Literacy and Advanced ICT Labs',
    'Multi-lingual Studies: English, Kiswahili, French',
  ];

  return (
    <section className="py-24 px-6 bg-[#1a1c1c] text-white">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div
          className="relative h-[420px] md:h-[580px] transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="touch-img group h-full rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={img35}
              alt="Primary students"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-red-700/15 mix-blend-multiply rounded-[40px]" />
          </div>
        </div>

        {/* Text */}
        <div
          className="space-y-8 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <span className="text-red-400 font-bold tracking-widest uppercase text-sm">Primary Section</span>
          <h2 className="font-black text-white text-4xl md:text-5xl leading-tight tracking-tight">
            P.1 to P.7 Curriculum
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our primary curriculum challenges students while providing the support they need to excel in the Primary Leaving Examinations. We focus on analytical thinking and core subject mastery.
          </p>
          <ul className="space-y-5 pt-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-lg font-bold text-white">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── EXTRACURRICULARS ─── */
function ExtracurricularSection() {
  const { ref, visible } = useReveal(0.08);

  const extras = [
    { title: 'Athletics',               desc: 'Football and Track',       img: img34 },
    { title: 'Arts and French Club',    desc: 'Music and Choir',          img: img16 },
    { title: 'Creativity',              desc: 'Fine Art and Design',      img: img3 },
    { title: 'Debate',                  desc: 'Public Speaking Club',     img: img25 },
    { title: 'Computer Training Club',  desc: 'ICT and Digital Skills',   img: img9 },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5f5f0]">
      <div ref={ref} className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div
          className="text-center space-y-4 max-w-3xl mx-auto transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Beyond the Classroom</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a1c1c]">
            Beyond the Classroom
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We believe a child's character is built on the sports field, the stage, and through creative expression.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {extras.map((e, i) => (
            <div
              key={e.title}
              className="touch-img group relative h-80 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${i * 100}ms`,
                transitionDuration: '600ms',
              }}
            >
              <img
                src={e.img}
                alt={e.desc}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c]/90 via-[#0a0c0c]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 space-y-1">
                <p className="text-red-400 font-bold uppercase tracking-widest text-xs">{e.title}</p>
                <p className="text-white font-black text-lg leading-tight">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsSection() {
  const { ref, visible } = useReveal(0.15);
  return (
    <section className="py-24 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: `url(${img24})` }} />
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text */}
        <div
          className="space-y-6 max-w-xl transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a1c1c] leading-tight">
            Highlighting Academic Success
          </h2>
          <p className="text-yellow-900 text-lg font-medium leading-relaxed">
            Year after year, Mothercare Preparatory School remains at the forefront of academic excellence in the region.
          </p>
          <button className="bg-[#1a1c1c] text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5">
            Download Result History
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 gap-6 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <div className="bg-white p-8 rounded-[28px] text-center shadow-2xl">
            <div className="text-5xl md:text-6xl font-black text-red-600 mb-2">100%</div>
            <div className="text-[#1a1c1c] font-bold">PLE Pass Rate</div>
          </div>
          <div className="bg-white p-8 rounded-[28px] text-center shadow-2xl">
            <div className="text-5xl md:text-6xl font-black text-[#1a1c1c] mb-2">200+</div>
            <div className="text-slate-500 font-bold">Division 1s</div>
          </div>
        </div>
      </div>
    </section>
  );
}
