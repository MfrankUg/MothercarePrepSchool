import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

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

/* ═══════════════ ADMISSIONS PAGE ═══════════════ */
export default function Admissions() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen overflow-x-hidden">
      <HeroSection />
      <StepsSection />
      <ActionSection />
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const { ref, visible } = useReveal(0.05);
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-[#1a1c1c] text-white">
      <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: "url('/mothercare_official_logo.png')" }} />
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">

        {/* Left text */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-start space-y-8 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          <div className="bg-yellow-400/20 text-yellow-300 font-bold px-5 py-2 rounded-full text-xs tracking-widest uppercase border border-yellow-400/30">
            Enrollment 2026 / 2027
          </div>
          <h1 className="font-black text-white text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            Join Our<br />
            <span className="text-red-500">Community</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            Nurturing young minds through a balanced curriculum that emphasises academic excellence and character development. Start your child's journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Link
              to="/apply"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-center shadow-lg shadow-red-600/30 hover:-translate-y-0.5"
            >
              Start Application
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5">
              View Prospectus
            </button>
          </div>
        </div>

        {/* Right form */}
        <div
          className="w-full lg:w-1/2 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <div className="bg-white text-[#1a1c1c] p-8 md:p-10 rounded-[36px] shadow-2xl">
            <h3 className="text-2xl font-black mb-8 text-[#1a1c1c]">Admissions Enquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Parent's Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Baluku"
                    className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-3.5 text-[#1a1c1c] focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+256 700 000 000"
                    className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-3.5 text-[#1a1c1c] focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Student's Age</label>
                  <input
                    type="number"
                    placeholder="5"
                    className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-3.5 text-[#1a1c1c] focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Applying For Grade</label>
                  <select className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-3.5 text-[#1a1c1c] focus:outline-none focus:border-red-600 transition-colors appearance-none">
                    {['Baby Class','Middle Class','Top Class','P.1','P.2','P.3','P.4','P.5','P.6','P.7'].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={3}
                  placeholder="Your message here..."
                  className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-3.5 text-[#1a1c1c] focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-[#1a1c1c] hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STEPS ─── */
function StepsSection() {
  const { ref, visible } = useReveal(0.08);

  const steps = [
    { num: '1', title: 'Inquiry',     desc: 'Reach out via our online form or phone to express your interest and ask initial questions.' },
    { num: '2', title: 'Visit',       desc: 'Schedule a personalised tour to see our facilities and experience the classroom atmosphere.' },
    { num: '3', title: 'Application', desc: 'Complete the formal application form and submit required documents for review.' },
    { num: '4', title: 'Enrollment',  desc: 'Once accepted, complete registration and secure your child\'s place in our community.' },
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
            Your Path to{' '}
            <span className="text-red-600 italic">Enrollment</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md">
            We have simplified our admission process into four clear steps for a smooth transition.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="touch-card bg-[#f5f5f0] hover:bg-[#1a1c1c] group p-8 md:p-10 rounded-[32px] relative pt-14 mt-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 100}ms`,
                transitionDuration: '600ms',
              }}
            >
              {/* Step number bubble */}
              <div className="absolute -top-6 left-8 w-14 h-14 bg-red-600 group-hover:bg-red-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/30 transition-colors duration-300 border-4 border-white">
                {s.num}
              </div>
              <h3 className="touch-title text-xl font-black text-[#1a1c1c] group-hover:text-white mb-3 transition-colors duration-300">{s.title}</h3>
              <p className="touch-desc text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm transition-colors duration-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ACTION / FAQ ─── */
function ActionSection() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section className="py-24 px-6 bg-[#f5f5f0]">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Left column */}
        <div
          className="w-full lg:w-1/3 space-y-6 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}
        >
          {/* Downloads */}
          <div className="bg-red-600 text-white p-10 rounded-[36px] shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
            <div className="w-32 h-32 bg-white/10 rounded-full absolute -top-10 -right-10 group-hover:scale-125 transition-transform duration-500" />
            <h3 className="font-black text-xl mb-5 relative z-10">Quick Downloads</h3>
            <div className="space-y-3 relative z-10">
              <button className="w-full bg-white/15 hover:bg-white/25 text-left px-5 py-4 rounded-2xl flex flex-col transition-colors border border-white/20">
                <span className="font-bold text-white text-sm">Download Admission Form</span>
                <span className="text-xs text-red-200 mt-0.5">PDF Document (2.4 MB)</span>
              </button>
              <button className="w-full bg-white/15 hover:bg-white/25 text-left px-5 py-4 rounded-2xl flex flex-col transition-colors border border-white/20">
                <span className="font-bold text-white text-sm">School Prospectus</span>
                <span className="text-xs text-red-200 mt-0.5">2024 Digital Edition</span>
              </button>
            </div>
          </div>

          {/* Hotline */}
          <div className="bg-white p-10 rounded-[36px] shadow-sm border border-slate-100">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="font-black text-lg text-[#1a1c1c] mb-2">Admissions Hotline</h3>
            <p className="text-slate-500 text-sm mb-5 leading-relaxed">Talk directly to our enrollment specialist for immediate assistance.</p>
            <span className="font-black text-2xl text-[#1a1c1c]">+256 700 000 000</span>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="w-full lg:w-2/3 bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-slate-100 transition-all duration-700 delay-150"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1c1c] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: 'What are the age requirements for enrollment?',
                a: 'Children entering Preschool must be at least 3 years old. For Primary 1, students typically begin at age 6. We conduct age-appropriate assessments for all new applicants.',
              },
              {
                q: 'Where can I find the fee structure?',
                a: 'Our complete fee structure is detailed in the School Prospectus available for download. You can also visit the bursar\'s office during school hours for a physical copy.',
              },
              {
                q: 'Are there scholarships or sibling discounts?',
                a: 'Yes. We offer a 5% discount on tuition for the second child and 10% for the third and subsequent children from the same family.',
              },
            ].map((item, i) => (
              <div key={i} className={i > 0 ? 'pt-8 border-t border-slate-100' : ''}>
                <h4 className="text-lg font-black text-[#1a1c1c] mb-3">{item.q}</h4>
                <p className="text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
