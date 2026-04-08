import { Link } from 'react-router';
import img30 from '../../assets/img_30.png';

export default function Admissions() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      
      {/* Hero / Contact Form Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-[#8595A9] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('../../assets/img_30.png')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
            <div className="bg-yellow-400/20 text-yellow-400 font-bold px-4 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase">
              Enrollment 2026/2027
            </div>
            <h1 className="font-extrabold text-white text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Join Our <br/>
              <span className="text-red-500">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
              Nurturing young minds through a balanced curriculum that emphasizes academic excellence and character development. Start your child's journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link to="/apply" className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-full transition text-center shadow-lg shadow-red-700/30">
                Start Application
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-4 rounded-full transition text-center shadow-sm">
                View Prospectus
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white text-[#1a1c1c] p-8 md:p-12 rounded-[40px] shadow-2xl relative">
               <h3 className="text-2xl font-bold mb-8 text-[#1a1c1c]">Admissions Office Contact</h3>
               <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Parent's Full Name</label>
                      <input type="text" placeholder="e.g. John Baluku" className="w-full bg-[#f9f9f9] border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-700 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" placeholder="+256 700 000 000" className="w-full bg-[#f9f9f9] border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-700 transition" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Student's Age</label>
                      <input type="number" placeholder="5" className="w-full bg-[#f9f9f9] border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-700 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Applying For Grade</label>
                      <select className="w-full bg-[#f9f9f9] border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-700 transition appearance-none">
                        <option>Baby Class</option>
                        <option>Middle Class</option>
                        <option>Top Class</option>
                        <option>P.1</option>
                        <option>P.2</option>
                        <option>P.3</option>
                        <option>P.4</option>
                        <option>P.5</option>
                        <option>P.6</option>
                        <option>P.7</option>
                      </select>
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help you?</label>
                    <textarea rows={3} placeholder="Your message here..." className="w-full bg-[#f9f9f9] border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-700 transition resize-none"></textarea>
                 </div>

                 <button className="w-full bg-[#8595A9] hover:bg-slate-800 text-white font-bold py-5 rounded-2xl transition">
                   Send Inquiry
                 </button>
               </form>
            </div>
          </div>
          
        </div>
      </section>

      {/* Path to Enrollment */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1c1c]">
                Your Path to <span className="text-red-700 italic">Enrollment</span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg md:text-xl max-w-md text-left md:text-right">
              We've simplified our admission process into four clear steps to ensure a smooth transition for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              num="1" 
              title="Inquiry" 
              desc="Reach out to us via our online form or phone to express your interest and ask initial questions." 
            />
            <StepCard 
              num="2" 
              title="Visit" 
              desc="Schedule a personalized tour to see our facilities and experience the classroom atmosphere firsthand." 
            />
            <StepCard 
              num="3" 
              title="Application" 
              desc="Complete the formal application form and submit required documents for review." 
            />
            <StepCard 
              num="4" 
              title="Enrollment" 
              desc="Once accepted, complete the final registration and secure your child's place in our community." 
            />
          </div>
        </div>
      </section>

      {/* Action Connect Section */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3 space-y-8">
             <div className="bg-red-700 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition duration-500">
               <div className="w-32 h-32 bg-white/10 rounded-full absolute -top-10 -right-10 transition-transform group-hover:scale-125"></div>
               <h3 className="font-bold text-2xl mb-4 relative z-10">Quick Downloads</h3>
               <div className="space-y-4 relative z-10">
                 <button className="w-full bg-white/10 hover:bg-white/20 text-left px-6 py-4 rounded-2xl flex flex-col transition border border-white/20">
                   <span className="font-bold text-white">Download Admission Form</span>
                   <span className="text-xs text-red-200 mt-1">PDF Document (2.4 MB)</span>
                 </button>
                 <button className="w-full bg-white/10 hover:bg-white/20 text-left px-6 py-4 rounded-2xl flex flex-col transition border border-white/20">
                   <span className="font-bold text-white">School Prospectus</span>
                   <span className="text-xs text-red-200 mt-1">2024 Digital Edition</span>
                 </button>
               </div>
             </div>

             <div className="bg-white p-10 rounded-[40px] shadow-md border border-slate-100 flex flex-col">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-700">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                 </svg>
               </div>
               <h3 className="font-bold text-xl text-[#1a1c1c] mb-2">Admissions Hotline</h3>
               <p className="text-slate-500 text-sm mb-6 leading-relaxed">Talk directly to our enrollment specialist for immediate assistance.</p>
               <span className="font-extrabold text-2xl text-[#1a1c1c]">+256 700 000 000</span>
             </div>
          </div>

          <div className="w-full lg:w-2/3 bg-white p-10 md:p-16 rounded-[48px] shadow-sm border border-slate-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c1c] mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <FaqItem 
                q="What are the age requirements for enrollment?" 
                a="Children entering Preschool must be at least 3 years old by September. For Primary 1, students typically begin at age 6. We conduct age-appropriate assessments for all new applicants." 
              />
              <div className="w-full h-px bg-slate-100"></div>
              <FaqItem 
                q="Where can I find the fee structure?" 
                a="Our complete fee structure is detailed in the School Prospectus available for download above. Alternatively, you can visit the bursar's office during school hours for a physical copy." 
              />
               <div className="w-full h-px bg-slate-100"></div>
              <FaqItem 
                q="Are there scholarships or sibling discounts?" 
                a="Yes, Mothercare Preparatory School offers a 5% discount on tuition for the second child and 10% for the third and subsequent children from the same family." 
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

/* Helper Components */

function StepCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="bg-[#f9f9f9] p-8 md:p-10 rounded-[40px] relative mt-8 pt-16 hover:bg-[#8595A9] hover:-translate-y-2 group transition duration-500">
      <div className="absolute -top-8 left-8 w-16 h-16 bg-red-700 rounded-full flex items-center justify-center text-white font-extrabold text-2xl shadow-xl border-4 border-white group-hover:border-[#1a1c1c] transition duration-500">
        {num}
      </div>
      <h3 className="text-2xl font-bold text-[#1a1c1c] mb-4 group-hover:text-white transition">{title}</h3>
      <p className="text-slate-500 leading-relaxed group-hover:text-slate-400 transition">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="text-xl font-bold text-[#1a1c1c]">{q}</h4>
      <p className="text-slate-500 leading-relaxed text-lg">{a}</p>
    </div>
  );
}
