import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

/* ─── Scroll-reveal hook (bidirectional) ─── */
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

/* ─── Contact info items ─── */
const contactItems = [
  {
    label: 'Visit Us',
    value: 'Central Division, Kasese Municipality,\nWestern Uganda',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Call Us',
    value: '+256 414 123 456',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Email Us',
    value: 'admissions@mothercare.ac.ug',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

/* ═══════════════ CONTACT PAGE ═══════════════ */
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const heroReveal  = useReveal(0.05);
  const formReveal  = useReveal(0.05);
  const mapReveal   = useReveal(0.08);
  const ctaReveal   = useReveal(0.15);

  return (
    <div className="bg-[#f5f5f0] min-h-screen overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full pt-32 pb-16 px-6">
        <div
          ref={heroReveal.ref}
          className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 transition-all duration-700"
          style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <div className="bg-red-600/10 text-red-600 font-black px-5 py-2 rounded-full text-sm tracking-widest uppercase">
            Get in Touch
          </div>
          <h1 className="font-black text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            The Academic{' '}
            <span className="text-red-600 italic">Hearth</span>
            <br />Awaits.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            We would love to hear from you. Reach out for admissions, tours, or any questions about our school.
          </p>
        </div>
      </section>

      {/* ── Form + Details ── */}
      <section className="py-6 px-6">
        <div
          ref={formReveal.ref}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-[40px] shadow-sm overflow-hidden border border-slate-100 transition-all duration-700"
          style={{ opacity: formReveal.visible ? 1 : 0, transform: formReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          {/* ── Contact Form ── */}
          <div className="col-span-1 lg:col-span-3 p-8 md:p-14">
            <h2 className="text-3xl font-black text-[#1a1c1c] mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { id: 'firstName', label: 'First Name', placeholder: 'John',   type: 'text' },
                  { id: 'lastName',  label: 'Last Name',  placeholder: 'Baluku', type: 'text' },
                ].map(({ id, label, placeholder, type }) => (
                  <div key={id} className="relative">
                    <label
                      htmlFor={id}
                      className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      placeholder={placeholder}
                      value={(formData as Record<string, string>)[id]}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-4 text-[#1a1c1c] font-medium focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                ))}
              </div>

              {[
                { id: 'email',   label: 'Email Address', placeholder: 'john@example.com',      type: 'email' },
                { id: 'subject', label: 'Subject',        placeholder: 'Admissions Inquiry',    type: 'text' },
              ].map(({ id, label, placeholder, type }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    value={(formData as Record<string, string>)[id]}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-4 text-[#1a1c1c] font-medium focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help your child excel?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f5f5f0] border-2 border-transparent rounded-2xl px-5 py-4 text-[#1a1c1c] font-medium focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full font-black py-5 rounded-2xl transition-all duration-300 text-lg hover:-translate-y-0.5 ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : 'bg-[#1a1c1c] hover:bg-red-600 text-white'
                }`}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* ── Contact Details ── */}
          <div className="col-span-1 lg:col-span-2 bg-[#1a1c1c] text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-cover bg-center"
              style={{ backgroundImage: "url('/mothercare_official_logo.png')" }} />

            <div className="relative z-10 space-y-10">
              <div>
                <span className="text-red-500 font-black text-sm tracking-widest uppercase">Contact Details</span>
                <h2 className="text-3xl font-black text-white mt-2">We're Here to Help</h2>
              </div>

              {/* Contact items */}
              <div className="space-y-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-red-400 font-black text-sm uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white font-semibold text-base leading-snug whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* School Hours */}
              <div className="bg-white/8 border border-white/10 rounded-2xl p-6 space-y-4">
                <p className="text-red-400 font-black text-sm uppercase tracking-widest">School Hours</p>
                {[
                  { day: 'Monday – Friday',    time: '7:30 AM – 4:30 PM', closed: false },
                  { day: 'Saturdays',           time: '9:00 AM – 1:00 PM', closed: false },
                  { day: 'Sundays & Holidays',  time: 'Closed',            closed: true  },
                ].map(({ day, time, closed }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-white font-bold text-sm">{day}</span>
                    <span className={`font-black text-sm ${closed ? 'text-red-400' : 'text-yellow-300'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Open in maps button */}
            <a
              href="https://maps.app.goo.gl/GH4ry6Cqz3EGFiDx9"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-8 block w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 rounded-full transition-all duration-300 text-center hover:-translate-y-0.5 shadow-lg shadow-red-600/30"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="py-16 px-6">
        <div
          ref={mapReveal.ref}
          className="max-w-7xl mx-auto space-y-6 transition-all duration-700"
          style={{ opacity: mapReveal.visible ? 1 : 0, transform: mapReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
        >
          <div className="text-center space-y-3">
            <span className="text-red-600 font-black text-sm tracking-widest uppercase">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1c1c]">Find Us in Kasese</h2>
          </div>

          <div className="rounded-[36px] overflow-hidden shadow-2xl border-4 border-white" style={{ height: '480px' }}>
            <iframe
              title="Mothercare Preparatory School — Kasese, Uganda"
              src="https://maps.google.com/maps?q=Mothercare+Preparatory+School+Kasese+Uganda&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-center text-slate-400 text-sm font-medium">
            Central Division, Kasese Municipality, Western Uganda
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-10 px-4 md:px-12 pb-24">
        <div
          ref={ctaReveal.ref}
          className="relative max-w-7xl mx-auto bg-yellow-400 rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700"
          style={{ opacity: ctaReveal.visible ? 1 : 0, transform: ctaReveal.visible ? 'scale(1)' : 'scale(0.96)' }}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-20 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1c1c] tracking-tight leading-tight">
              Your child's future starts at the hearth.
            </h2>
            <p className="text-yellow-900 font-semibold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Schedule a campus tour today and witness firsthand the environment where curiosity is nurtured and leaders are formed.
            </p>
            <div className="pt-4">
              <Link
                to="/apply"
                className="inline-block bg-[#1a1c1c] hover:bg-slate-700 text-white font-black px-10 py-5 rounded-full transition-all duration-300 text-lg shadow-xl hover:-translate-y-0.5"
              >
                Book a Campus Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
