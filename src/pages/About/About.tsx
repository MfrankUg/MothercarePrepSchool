import { Link } from 'react-router';
import img1 from '../../assets/img_1.png';
import img9 from '../../assets/img_9.png';
import img4 from '../../assets/img_4.png';
import img22 from '../../assets/img_22.png';
import img11 from '../../assets/img_11.png';
import img23 from '../../assets/img_23.png';
import img33 from '../../assets/img_33.png';

export default function About() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">

      {/* Hero / Our Story Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]">
            <img src={img1} alt="Students reading" className="absolute top-0 right-0 w-3/4 h-[80%] object-cover rounded-[48px] shadow-2xl z-10" />
            <img src={img9} alt="Campus view" className="absolute bottom-0 left-0 w-3/5 h-[60%] object-cover rounded-[32px] border-8 border-[#f9f9f9] shadow-xl z-20" />
            
            <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-[32px] shadow-2xl z-30 max-w-[200px] md:max-w-[240px]">
              <span className="text-4xl md:text-5xl font-extrabold text-red-700 block mb-2">20+</span>
              <span className="text-[#1a1c1c] font-bold block leading-tight mb-2">Years of Academic <br/>Excellence</span>
              <p className="text-slate-500 text-sm leading-relaxed">Founded on the principles of integrity and community care.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8 z-10">
            <h1 className="font-extrabold text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Our <span className="text-red-700">Story</span>
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-[#5b403d] leading-relaxed">
              <p>
                Established with a vision to redefine early education in Kasese, Mothercare Preparatory School began as a modest dream to provide a sanctuary for learning. Over the past two decades, we have evolved into a cornerstone of academic brilliance.
              </p>
              <p>
                Our journey is paved with the successes of thousands of alumni who now lead with purpose across the globe. We believe that every child is a unique seed that, when planted in the right soil of care and discipline, blooms into a formidable leader.
              </p>
            </div>
            <button className="text-red-700 font-bold border-b-2 border-red-700 pb-1 hover:text-red-800 transition">
              View our full history
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <img src={img4} alt="" className="absolute -top-32 -right-32 w-96 h-96 opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1c1c]">
                Our Core <span className="text-red-700 italic">Values</span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg md:text-xl max-w-md text-left md:text-right">
              The pillars that uphold the Mothercare legacy and guide our daily interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueBox img={img22} title="Integrity" desc="We foster a culture of honesty and strong moral principles in all our students and staff members." />
            <ValueBox img={img11} title="Excellence" desc="Striving for the highest standards in academics, sports, and character development is our daily pursuit." />
            <ValueBox img={img23} title="Innovation" desc="Encouraging curiosity and the use of modern technology to solve complex problems and learn better." />
            <ValueBox img={img1} title="Teamwork" desc="Collaborating as a community of teachers, parents, and students to achieve shared educational goals." />
            <ValueBox img={img9} title="Respect" desc="Honoring the dignity of every individual and valuing the diverse backgrounds within our school family." />
            <ValueBox img={img4} title="Accountability" desc="Taking responsibility for our actions and their impact on our growth and the school community." />
          </div>
        </div>
      </section>

      {/* Vision & Mission Overlay Style */}
      <section className="py-32 px-6 relative flex items-center justify-center min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={img33} alt="Campus gathering" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 md:p-16 rounded-[48px] text-white">
            <h3 className="text-sm font-bold tracking-widest uppercase text-red-400 mb-4">Our Mission</h3>
            <p className="text-xl md:text-2xl leading-relaxed italic">
              "To empower every child with a holistic, high-quality education through a nurturing environment that fosters critical thinking, creativity, and spiritual growth, preparing them to thrive in a dynamic world."
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 md:p-16 rounded-[48px] text-white">
            <h3 className="text-sm font-bold tracking-widest uppercase text-yellow-400 mb-4">Our Vision</h3>
            <p className="text-xl md:text-2xl leading-relaxed">
              To be the premier center of excellence in early and primary education in East Africa, recognized for producing globally competitive citizens grounded in firm moral and academic foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">
              Pride of <span className="text-[#016619]">Kasese</span>
            </h2>
            <p className="text-[#5b403d] text-lg leading-relaxed max-w-lg">
              Our campus is situated in the scenic district of Kasese, Uganda. Surrounded by the vibrant energy of the community and the natural beauty of the region, we provide a serene environment conducive to high-level concentration and creative thinking.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-red-700/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="w-4 h-4 bg-red-700 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-[#1a1c1c] font-bold text-lg">Holistic Campus</h4>
                  <p className="text-[#5b403d]">Modern labs, spacious playgrounds, and a safe boarding facility.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-700/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="w-4 h-4 bg-green-700 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-[#1a1c1c] font-bold text-lg">Eco-Friendly Environment</h4>
                  <p className="text-[#5b403d]">Integrating environmental awareness into our everyday learning.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[500px] md:h-[600px] rounded-[9999px] overflow-hidden shadow-2xl border-[12px] border-white">
            <img src={img23} alt="Campus view" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-red-700/20 mix-blend-multiply"></div>
            
            {/* Map Pin Overlay */}
            <div className="absolute bottom-[20%] right-[-10%] md:right-[10%] rotate-6 bg-white p-6 rounded-[32px] shadow-2xl max-w-[280px]">
              <h4 className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Our Location</h4>
              <p className="text-[#1a1c1c] font-bold text-sm leading-relaxed">Central Division, Kasese Municipality, Western Uganda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-red-700 mx-4 md:mx-12 rounded-[48px] mb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('../../assets/img_33.png')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Join the Mothercare Family.
          </h2>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to give your child the best foundation? Our admissions for the upcoming term are now open. Experience academic excellence wrapped in care.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-10 py-5 rounded-full transition text-lg shadow-xl shadow-yellow-400/20">
              Book a School Tour
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-10 py-5 rounded-full transition text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

/* Helper Component */
function ValueBox({ img, title, desc }: { img: string, title: string, desc: string }) {
  return (
    <div className="bg-[#f9f9f9] p-8 rounded-[32px] group hover:bg-[#8595A9] transition duration-500">
      <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 border-4 border-white group-hover:border-[#1a1c1c] transition shadow-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-[#1a1c1c] group-hover:text-white mb-3 transition">{title}</h3>
      <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed transition">{desc}</p>
    </div>
  );
}
