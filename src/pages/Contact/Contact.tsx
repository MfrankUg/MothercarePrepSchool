import { useState } from 'react';
import { Link } from 'react-router';
import img8 from '../../assets/img_8.png';
import img5 from '../../assets/img_5.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="bg-red-700/10 text-red-700 font-bold px-4 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase">
            Get in Touch
          </div>
          <h1 className="font-extrabold text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
            The Academic <span className="text-red-700 italic">Hearth</span><br />
            Awaits.
          </h1>
        </div>
      </section>

      {/* Main Content: Form & Details */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-[48px] shadow-sm overflow-hidden border border-slate-100">
          
          {/* Left Side: Contact Form */}
          <div className="col-span-1 lg:col-span-3 p-8 md:p-16">
            <h2 className="text-3xl font-extrabold text-[#1a1c1c] mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <label htmlFor="firstName" className="absolute -top-3 left-4 bg-white px-1 text-xs font-bold text-slate-500 uppercase tracking-widest z-10">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-700 transition font-medium"
                  />
                </div>
                
                <div className="space-y-2 relative">
                  <label htmlFor="lastName" className="absolute -top-3 left-4 bg-white px-1 text-xs font-bold text-slate-500 uppercase tracking-widest z-10">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="baluku"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-700 transition font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="email" className="absolute -top-3 left-4 bg-white px-1 text-xs font-bold text-slate-500 uppercase tracking-widest z-10">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-700 transition font-medium"
                />
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="subject" className="absolute -top-3 left-4 bg-white px-1 text-xs font-bold text-slate-500 uppercase tracking-widest z-10">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Admissions Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-700 transition font-medium"
                />
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="message" className="absolute -top-3 left-4 bg-white px-1 text-xs font-bold text-slate-500 uppercase tracking-widest z-10">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help your child excel?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-700 transition font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full font-bold py-6 rounded-2xl transition duration-300 text-lg ${
                  submitted 
                    ? 'bg-green-600 text-white' 
                    : 'bg-[#8595A9] text-white hover:bg-red-700'
                }`}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Right Side: Contact Details */}
          <div className="col-span-1 lg:col-span-2 bg-[#8595A9] text-white p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('../../assets/img_8.png')] bg-cover bg-center"></div>
            
            <div className="relative z-10 space-y-12">
              <h2 className="text-3xl font-extrabold mb-8">Contact Details</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-2">Visit Us</h4>
                    <p className="text-lg leading-relaxed mix-blend-screen text-slate-200">Plot 45, Academic Avenue,<br/>Entebbe/Kasese, Uganda</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-2">Call Us</h4>
                    <p className="text-xl font-bold mix-blend-screen text-white">+256 414 123 456</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-2">Email Us</h4>
                    <p className="text-lg mix-blend-screen text-slate-200">admissions@mothercare.ac.ug</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                 <h4 className="text-white font-bold mb-4">School Hours</h4>
                 <div className="space-y-2 text-slate-400 text-sm">
                   <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white">7:30 AM – 4:30 PM</span></div>
                   <div className="flex justify-between"><span>Saturdays</span><span className="text-white">9:00 AM – 1:00 PM</span></div>
                   <div className="flex justify-between"><span>Sundays & Holidays</span><span className="text-red-400">Closed</span></div>
                 </div>
              </div>
              
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 rounded-full transition mt-8">
                Open in Maps
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-yellow-400 mx-4 md:mx-12 rounded-[48px] mb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('../../assets/img_5.png')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1c1c] tracking-tight leading-tight">
            Your child's future starts at the hearth.
          </h2>
          <p className="text-yellow-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Schedule a campus tour today and witness firsthand the environment where curiosity is nurtured and leaders are formed.
          </p>
          <div className="pt-8">
            <Link to="/contact" className="inline-block bg-[#8595A9] hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-full transition text-lg shadow-xl shadow-[#8595A9]/20">
              Book a Campus Tour
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
