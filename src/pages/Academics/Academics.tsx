import { Link } from 'react-router';
import img24 from '../../assets/img_24.png';
import img25 from '../../assets/img_25.png';
import img19 from '../../assets/img_19.png';
import img36 from '../../assets/img_36.png';
import img35 from '../../assets/img_35.png';
import img34 from '../../assets/img_34.png';
import img16 from '../../assets/img_16.png';
import img3 from '../../assets/img_3.png';

export default function Academics() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8 z-10">
            <div className="bg-red-700/10 text-red-700 font-bold px-4 py-2 rounded-full text-xs md:text-sm tracking-widest uppercase">
              The Academic Hearth
            </div>
            <h1 className="font-extrabold text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Excellence in <br/>
              Every <span className="text-red-700 italic">Step</span> <br/>
              of the Journey.
            </h1>
            <p className="text-lg md:text-xl text-[#5b403d] leading-relaxed max-w-lg">
              A holistic approach to education that nurtures curiosity in the nursery classes and fosters rigorous academic discipline in the primary years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-full transition shadow-lg shadow-red-700/30">
                Explore Curriculum
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold px-8 py-4 rounded-full transition shadow-sm">
                View Prospectus
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[600px]">
             <img src={img24} alt="Students" className="absolute right-0 top-0 w-4/5 h-[80%] object-cover rounded-[48px] shadow-2xl z-10" />
             <div className="absolute left-0 bottom-12 bg-white p-6 md:p-8 rounded-[32px] shadow-xl z-20 max-w-[240px]">
                <div className="flex items-center gap-4 mb-2">
                   <div className="text-yellow-500 text-2xl font-black">70%</div>
                   <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 0 1-5.395 4.972m0 0a8.026 8.026 0 0 0-1.588-4.148" />
                     </svg>
                   </div>
                </div>
                <div className="text-[#1a1c1c] font-black text-xl leading-tight">Division One</div>
                <div className="text-slate-500 font-medium text-sm mt-1">2023 PLE Results</div>
             </div>
             <div className="absolute inset-0 bg-yellow-400/20 rounded-[48px] rotate-6 blur-2xl transform"></div>
          </div>
        </div>
      </section>

      {/* Nursery Section */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-12">
            <div className="space-y-4 max-w-3xl">
              <h3 className="text-red-700 font-bold tracking-widest uppercase text-sm">Nursery Section</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1c1c]">
                Nurturing Young Minds
              </h2>
            </div>
            <p className="text-slate-500 text-lg md:text-xl max-w-md text-left md:text-right italic">
              "A home away from home for your little ones."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NurseryCard 
              img={img25} 
              title="Baby Class" 
              desc="Social discovery and play-based sensory learning." 
              color="bg-pink-100" 
            />
            <NurseryCard 
              img={img19} 
              title="Middle Class" 
              desc="Introduction to alphabets, numbers, and core motor skills." 
              color="bg-blue-100" 
            />
            <NurseryCard 
              img={img36} 
              title="Top Class" 
              desc="Pre-primary readiness and early literacy development." 
              color="bg-yellow-100" 
            />
          </div>
        </div>
      </section>

      {/* Primary Section */}
      <section className="py-24 px-6 bg-[#8595A9] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[600px]">
            <img src={img35} alt="Primary students" className="w-full h-full object-cover rounded-[48px] shadow-2xl" />
            <div className="absolute inset-0 bg-red-700/20 rounded-[48px] mix-blend-multiply"></div>
          </div>
          <div className="space-y-8">
            <h3 className="text-red-400 font-bold tracking-widest uppercase text-sm">Primary Section</h3>
            <h2 className="font-extrabold text-white text-4xl md:text-5xl leading-tight tracking-tight">
              P.1 to P.7 Curriculum
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our primary curriculum is designed to challenge students while providing the support they need to succeed in the Primary Leaving Examinations (PLE). We focus on analytical thinking and core subject mastery.
            </p>
            <ul className="space-y-6 pt-4">
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-xl font-bold">Rigorous PLE Preparation & Mock Assessments</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-xl font-bold">Digital Literacy & Advanced ICT Labs</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-xl font-bold">Multi-lingual Studies: English, Kiswahili, French</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto space-y-16 text-center">
             <div className="space-y-4 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1c1c]">
                Beyond the Classroom
              </h2>
              <p className="text-[#5b403d] text-lg leading-relaxed">
                We believe that a child's character is built on the sports field, the stage, and through creative expression.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ExtraCard title="Athletics" desc="Football & Track" img={img34} />
              <ExtraCard title="Arts / French CLUB" desc="Music & Choir" img={img16} />
              <ExtraCard title="Creativity" desc="Fine Art & Design" img={img3} />
              <ExtraCard title="Global" desc="Debate Club" img={img25} />
            </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-24 px-6 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('../../assets/img_24.png')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="space-y-6 max-w-xl">
             <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1a1c1c]">
                Highlighting <br/>Academic Success
              </h2>
              <p className="text-yellow-900 text-lg md:text-xl font-medium leading-relaxed">
                Year after year, Mothercare Preparatory School remains at the forefront of academic excellence in the region. Our results speak of the dedication of our staff and the resilience of our students.
              </p>
              <button className="bg-[#8595A9] text-white font-bold px-8 py-4 rounded-full mt-4 hover:bg-slate-800 transition">
                Download Result History
              </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-[32px] text-center shadow-2xl">
               <div className="text-5xl md:text-6xl font-black text-red-700 mb-2">100%</div>
               <div className="text-[#1a1c1c] font-bold">PLE Pass Rate</div>
             </div>
             <div className="bg-white p-8 rounded-[32px] text-center shadow-2xl">
               <div className="text-5xl md:text-6xl font-black text-[#1a1c1c] mb-2">200+</div>
               <div className="text-slate-500 font-bold">Division 1s</div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* Helper Components */

function NurseryCard({ img, title, desc, color }: { img: string, title: string, desc: string, color: string }) {
  return (
    <div className="bg-[#f9f9f9] rounded-[40px] overflow-hidden group hover:-translate-y-2 transition duration-500 shadow-sm hover:shadow-xl">
      <div className={`h-64 w-full ${color} p-6 relative`}>
        <img src={img} alt={title} className="w-full h-full object-cover rounded-[24px] shadow-md" />
      </div>
      <div className="p-8 space-y-4 bg-white">
        <h3 className="text-2xl font-bold text-[#1a1c1c]">{title}</h3>
        <p className="text-slate-500 text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ExtraCard({ title, desc, img }: { title: string, desc: string, img: string }) {
  return (
    <div className="relative h-80 rounded-[32px] overflow-hidden group">
      <img src={img} alt={desc} className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-8 space-y-2">
        <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs">{title}</h4>
        <p className="text-white font-extrabold text-2xl">{desc}</p>
      </div>
    </div>
  );
}
