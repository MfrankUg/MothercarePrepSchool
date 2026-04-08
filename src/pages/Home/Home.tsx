import { Link } from 'react-router';
import img12 from '../../assets/img_12.png';
import img31 from '../../assets/img_31.png';
import img20 from '../../assets/img_20.png';
import img32 from '../../assets/img_32.png';
import img2 from '../../assets/img_2.png';
import img29 from '../../assets/img_29.png';

export default function Home() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-8 z-10">
            <div className="bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm tracking-wider uppercase">
              Established 1998
            </div>
            <h1 className="font-extrabold text-[#1a1c1c] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              For a <span className="text-red-700 italic">Firm</span><br />
              Foundation
            </h1>
            <p className="text-lg md:text-xl text-[#5b403d] leading-relaxed max-w-lg">
              Nurturing young minds from Baby Class to P.7 with a holistic curriculum that balances academic rigor and character development in the heart of Kasese.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link to="/apply" className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-full text-center transition shadow-lg shadow-red-700/30">
                Apply Now
              </Link>
              <Link to="/contact" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold px-8 py-4 rounded-full text-center transition shadow-sm">
                Visit School
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-[48px] rotate-3 blur-2xl transform"></div>
            <img src={img12} alt="Students at Mothercare Preparatory" className="object-cover w-full h-full rounded-[48px] shadow-2xl relative z-10" />
          </div>
        </div>
      </section>

      {/* Identity & Mission Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
          <div className="space-y-4">
            <h4 className="text-red-700 font-bold tracking-widest uppercase text-sm">The Academic Hearth</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">Our Identity</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* Mission */}
            <div className="bg-[#f9f9f9] p-10 md:p-14 rounded-[40px] text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-700/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-[#1a1c1c] mb-6">Our Mission</h3>
              <p className="text-[#5b403d] text-lg leading-relaxed italic">
                "To build a firm foundation for excellence in education by fostering a love for learning and moral integrity."
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-[#f9f9f9] p-10 md:p-14 rounded-[40px] text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold text-[#1a1c1c] mb-6">Our Vision</h3>
              <p className="text-[#5b403d] text-lg leading-relaxed">
                To be the leading primary education provider in Western Uganda, producing innovative and responsible global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#8595A9] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Why Families<br />Choose Us
              </h2>
              <p className="text-slate-400 text-xl">
                Nurturing excellence through every milestone.
              </p>
            </div>
            <Link to="/about" className="bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-3.5 rounded-full transition whitespace-nowrap">
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              img={img31} 
              title="Qualified Teachers" 
              desc="Our educators are mentors dedicated to unlocking potential through personalized attention and modern pedagogy." 
            />
            <FeatureCard 
              img={img20} 
              title="Holistic Development" 
              desc="Focusing on social, emotional, and cognitive growth beyond just academic achievement." 
            />
            <FeatureCard 
              img={img32} 
              title="Sports Excellence" 
              desc="Competitive football, swimming, and athletics programs to nurture physical health." 
            />
            <FeatureCard 
              img={img2} 
              title="Modern Facilities" 
              desc="Equipped with science rooms, reading libraries, and spaces for 21st-century learning." 
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">Our Core Values</h2>
            <p className="text-[#5b403d] text-lg leading-relaxed">
              The pillars that support our academic hearth and guide our daily interactions.
            </p>
            <ul className="space-y-4 pt-4">
              <ValueItem title="Integrity" />
              <ValueItem title="Excellence" />
              <ValueItem title="Innovation" />
              <ValueItem title="Community" />
            </ul>
          </div>
          <div className="lg:col-span-2 relative h-[500px] md:h-[600px]">
             <img src={img29} alt="Students" className="object-cover w-full h-full rounded-[48px] shadow-2xl" />
             <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[32px] shadow-xl max-w-sm hidden md:block">
                <p className="text-2xl font-bold text-[#1a1c1c] leading-tight">
                  Kasese's Pride
                </p>
                <p className="text-slate-500 mt-2">Located near the majestic Rwenzori Mountains.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c1c] tracking-tight">Voices of Our Parents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Choosing Mothercare for my son was the best decision. The level of care and academic discipline is unmatched in Kasese."
              author="Mrs. Mumbere"
              role="Parent, P.4 Student"
            />
             <TestimonialCard 
              quote="The school doesn't just focus on grades but on building character. My daughter has become so confident and innovative."
              author="Mr. Bwambale"
              role="Parent, Baby Class"
            />
             <TestimonialCard 
              quote="Excellent facilities and very dedicated teachers. The sports program is also a great highlight for my boys."
              author="Mrs. Kabasweka"
              role="Parent, P.7 Student"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-red-700 mt-24 mx-4 md:mx-12 rounded-[48px] mb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('../../assets/img_12.png')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Give your child a strong foundation for the future.
          </h2>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join the Mothercare family today and watch your child excel in a nurturing and professional environment.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/apply" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-10 py-5 rounded-full transition text-lg shadow-xl shadow-yellow-400/20">
              Start Application
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-10 py-5 rounded-full transition text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

/* Helper Components */

function FeatureCard({ img, title, desc }: { img: string, title: string, desc: string }) {
  return (
    <div className="bg-[#242626] rounded-[32px] p-8 space-y-6 hover:-translate-y-2 transition duration-300">
      <img src={img} alt={title} className="w-16 h-16 rounded-full object-cover border-4 border-white/10" />
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ValueItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-full bg-red-700/10 flex items-center justify-center text-red-700 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <span className="text-xl font-bold text-[#1a1c1c]">{title}</span>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="bg-[#f9f9f9] p-10 rounded-[40px] text-left flex flex-col justify-between space-y-8">
      <p className="text-slate-500 italic text-lg leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-200"></div>
        <div>
          <h4 className="font-bold text-[#1a1c1c]">{author}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
