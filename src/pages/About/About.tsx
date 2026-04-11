import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import img1   from '../../assets/img_1.png';
import img2   from '../../assets/img_2.png';
import img3   from '../../assets/img_3.png';
import img4   from '../../assets/img_4.png';
import img5   from '../../assets/img_5.png';
import img6   from '../../assets/img_6.png';
import img7   from '../../assets/img_7.png';
import img8   from '../../assets/img_8.png';
import img9   from '../../assets/img_9.png';
import img10  from '../../assets/img_10.png';
import img11  from '../../assets/img_11.png';
import img22  from '../../assets/img_22.png';
import img23  from '../../assets/img_23.png';
import img29  from '../../assets/img_29.png';
import img33  from '../../assets/img_33.png';
import directorImg from '../../assets/image_37.png';

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

/* ─── Staff data ─── */
const staffMembers = [
  { name: 'Mr. Eridad Tuwangye',  role: 'Director',      img: directorImg },
  { name: 'Mr. Tumwebaze Laban',    role: 'Head Teacher',           img: img1 },
  { name: 'Mrs. Komurembe Justine aka Sincere Causlity',    role: 'English Language',         img: img2 },
  { name: 'Mr. Benon aka One man Army',     role: 'Mathematics',              img: img3 },
  { name: 'Mr. Patrick Kule',     role: 'Social Studies',                img: img4 },
  { name: 'Mrs. Judith Kasereka', role: 'Baby Class Teacher',            img: img5 },
  { name: 'Mr. John Mumbere',     role: 'Physical Education',            img: img6 },
  { name: 'Mrs. Esther Kyakimwa', role: 'Religious Education',           img: img7 },
  { name: 'Mr. David Kambale',    role: 'ICT & Computer Studies',        img: img8 },
  { name: 'Mrs. Rose Masereka',   role: 'Arts, Music & French',          img: img10 },
];

/* ═══════════════ ABOUT PAGE ═══════════════ */
export default function About() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen overflow-x-hidden">
      <OurStorySection />
      <CoreValuesSection />
      <MissionVisionSection />
      <DirectorMessageSection />
      <StaffSection />
      <LocationSection />
      <CtaSection />
    </div>
  );
}

/* ─── OUR STORY ─── */
function OurStorySection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="pt-32 pb-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* Image collage */}
        <div
          className="w-full lg:w-1/2 relative min-h-[420px] md:min-h-[520px] transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="touch-img group absolute top-0 right-0 w-3/4 h-[78%] rounded-[40px] overflow-hidden shadow-2xl z-10">
            <img src={img1} alt="Students reading" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="touch-img group absolute bottom-0 left-0 w-3/5 h-[58%] rounded-[28px] overflow-hidden border-8 border-[#f5f5f0] shadow-xl z-20">
            <img src={img9} alt="Campus view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-[28px] shadow-2xl z-30 max-w-[200px] md:max-w-[230px]">
            <span className="text-4xl md:text-5xl font-black text-red-600 block mb-2">25+</span>
            <span className="text-[#1a1c1c] font-bold block leading-tight mb-2">Years of Academic Excellence</span>
            <p className="text-slate-500 text-sm leading-relaxed">Founded on integrity and community care.</p>
          </div>
        </div>

        {/* Text */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-start space-y-8 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Our Story</span>
          <h1 className="font-black text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Who We <span className="text-red-600 italic">Are</span>
          </h1>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              Established with a vision to redefine early education in Kasese, Mothercare Preparatory School began as a modest dream to provide a sanctuary for learning. Over the past two decades, we have evolved into a cornerstone of academic brilliance.
            </p>
            <p>
              Our journey is paved with the successes of thousands of alumni who now lead with purpose across the globe. We believe every child is a unique seed that, when planted in the right soil of care and discipline, blooms into a formidable leader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CORE VALUES ─── */
function CoreValuesSection() {
  const { ref, visible } = useReveal(0.08);

  const values = [
    { img: img22, title: 'Integrity',     desc: 'We foster a culture of honesty and strong moral principles in all our students and staff.' },
    { img: img11, title: 'Excellence',    desc: 'Striving for the highest standards in academics, sports, and character is our daily pursuit.' },
    { img: img23, title: 'Innovation',    desc: 'Encouraging curiosity and technology to solve problems and deepen learning.' },
    { img: img1,  title: 'Teamwork',      desc: 'Collaborating as a community of teachers, parents, and students to achieve shared goals.' },
    { img: img9,  title: 'Respect',       desc: 'Honoring the dignity of every individual and valuing the diverse backgrounds in our school.' },
    { img: img4,  title: 'Accountability',desc: 'Taking responsibility for our actions and their impact on our growth and community.' },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-12 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1c1c]">
            Our Core <span className="text-red-600 italic">Values</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md">
            The pillars that uphold the Mothercare legacy and guide our daily interactions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="touch-card group bg-[#f5f5f0] hover:bg-[#1a1c1c] rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 100}ms`,
                transitionDuration: '600ms',
              }}
            >
              <div className="touch-img w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="touch-title text-xl font-black text-[#1a1c1c] group-hover:text-white mb-3 transition-colors duration-300">{v.title}</h3>
              <p className="touch-desc text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm transition-colors duration-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MISSION & VISION ─── */
function MissionVisionSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-28 px-6 relative flex items-center justify-center min-h-[560px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={img33} alt="" className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105" />
        <div className="absolute inset-0 bg-[#0a0c0c]/75" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {[
          {
            label: 'Our Mission',
            accent: 'text-red-400 border-red-400/40',
            text: '"To empower every child with a holistic, high-quality education through a nurturing environment that fosters critical thinking, creativity, and spiritual growth, preparing them to thrive in a dynamic world."',
            delay: '0ms',
          },
          {
            label: 'Our Vision',
            accent: 'text-yellow-400 border-yellow-400/40',
            text: 'To be the premier centre of excellence in early and primary education in East Africa, recognised for producing globally competitive citizens grounded in firm moral and academic foundations.',
            delay: '150ms',
          },
        ].map((card) => (
          <div
            key={card.label}
            className="backdrop-blur-md bg-white/8 border border-white/15 p-10 md:p-14 rounded-[40px] text-white transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: card.delay,
            }}
          >
            <h3 className={`text-xs font-bold tracking-widest uppercase mb-6 ${card.accent} border-b pb-4`}>{card.label}</h3>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-100 italic">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── DIRECTOR MESSAGE ─── */
function DirectorMessageSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-24 px-6 bg-[#f5f5f0]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className="bg-white rounded-[48px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-5 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)' }}
        >
          {/* Photo */}
          <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-0 overflow-hidden">
            <div className="touch-img group h-full">
              <img
                src={directorImg}
                alt="Mr. Eridad Tuwangye — Director"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: '400px' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1a1c1c]/20" />
          </div>

          {/* Message */}
          <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Message from the Director</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1c1c] tracking-tight leading-tight">
                A Word from Our Founding Director
              </h2>
            </div>

            <div className="relative">
              <span className="absolute -top-4 -left-2 text-7xl text-red-100 font-serif leading-none select-none">"</span>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg pl-6">
                <p>
                  At Mothercare Preparatory School, we have always believed that education is not merely the transfer of knowledge — it is the formation of character. Every child who walks through our gates carries with them the promise of a bright future, and it is our sacred duty to nurture that promise.
                </p>
                <p>
                  Over the years, we have remained steadfast in our commitment to providing a holistic learning environment where academic excellence, moral integrity, and creative expression are given equal importance. Our teachers are not just educators; they are mentors, guides, and second parents to every child entrusted to us.
                </p>
                <p>
                  I invite you to join the Mothercare family — and together, let us build a firm foundation for the next generation of Uganda's leaders.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="font-black text-[#1a1c1c] text-lg">Mr. Eridad Tuwangye</p>
              <p className="text-slate-500 text-sm">Founding Director, Mothercare Preparatory School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STAFF SECTION ─── */
function StaffSection() {
  const { ref, visible } = useReveal(0.05);
  return (
    <section className="py-24 px-6 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div
          className="text-center space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Our People</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1c1c] tracking-tight">Meet Our Staff</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Dedicated professionals committed to shaping every child's future with care and expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {staffMembers.map((member, i) => (
            <div
              key={member.name}
              className="group text-center space-y-3 transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 60}ms`,
                transitionDuration: '600ms',
              }}
            >
              {/* Headshot */}
              <div className="touch-img relative rounded-[20px] overflow-hidden aspect-square shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <p className="font-black text-[#1a1c1c] text-sm leading-tight">{member.name}</p>
                <p className="text-red-600 text-xs font-bold mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── LOCATION (Google Maps) ─── */
function LocationSection() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section className="py-24 px-6 bg-[#f5f5f0]">
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div
          className="space-y-8 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="space-y-3">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1c1c] tracking-tight leading-tight">
              Pride of <span className="text-green-700">Kasese</span>
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
            Our campus is situated in the scenic district of Kasese, Uganda — surrounded by the vibrant community energy and the natural beauty of the Rwenzori Mountains.
          </p>
          <div className="space-y-5 pt-2">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#1a1c1c] font-bold text-base">Address</h4>
                <p className="text-slate-500 text-sm">Central Division, Kasese Municipality, Western Uganda</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#1a1c1c] font-bold text-base">Phone</h4>
                <p className="text-slate-500 text-sm">+256 700 000 000</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#1a1c1c] font-bold text-base">School Hours</h4>
                <p className="text-slate-500 text-sm">Monday – Friday: 7:30 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          className="transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <div className="rounded-[36px] overflow-hidden shadow-2xl border-4 border-white" style={{ height: '480px' }}>
            <iframe
              title="Mothercare Preparatory School Location"
              src="https://maps.google.com/maps?q=Mothercare+Preparatory+School+Kasese+Uganda&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-slate-400 text-xs mt-3">Central Division, Kasese Municipality, Western Uganda</p>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function CtaSection() {
  const { ref, visible } = useReveal(0.2);
  return (
    <section className="py-10 px-4 md:px-12 pb-24">
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto bg-red-700 rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.96)' }}
      >
        <div className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${img29})` }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-20 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Join the Mothercare Family.
          </h2>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to give your child the best foundation? Our admissions for the upcoming term are now open.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black px-10 py-5 rounded-full transition-all duration-300 text-lg shadow-xl hover:-translate-y-0.5"
            >
              Book a School Tour
            </Link>
            <Link
              to="/admissions"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg hover:-translate-y-0.5"
            >
              Admissions Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
