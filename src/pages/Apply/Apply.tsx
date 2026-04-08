import { useState } from 'react';

interface FormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  intendedClass: string;
  previousSchool: string;
  guardianName: string;
  phoneNumber: string;
  emailAddress: string;
  occupation: string;
  physicalAddress: string;
}

export default function Apply() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    intendedClass: '',
    previousSchool: '',
    guardianName: '',
    phoneNumber: '',
    emailAddress: '',
    occupation: '',
    physicalAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Proceed to next step
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-16 px-6">
      
      {/* Container Wrapper */}
      <div className="max-w-4xl mx-auto">
        
        {/* Top Badge */}
        <div className="bg-[#fec330] inline-block px-5 py-2.5 rounded-full mb-4">
          <span className="text-[#6f5100] font-bold text-xs tracking-widest uppercase">
            Admissions Open
          </span>
        </div>

        {/* Global Form Container */}
        <div className="bg-white rounded-[48px] shadow-sm overflow-hidden pb-12">
          
          {/* Stepper Header Container */}
          <div className="bg-[#f9f9f9] border-b border-gray-100 px-8 py-8 flex flex-wrap justify-between items-center rounded-t-[48px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#af101a] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-[#1a1c1c] text-sm">Student</span>
            </div>
            
            <div className="flex items-center gap-3 opacity-40">
              <div className="w-10 h-10 bg-[#e2e8f0] text-[#1a1c1c] rounded-full flex items-center justify-center font-bold">2</div>
              <span className="font-semibold text-[#1a1c1c] text-sm">Parent</span>
            </div>

            <div className="flex items-center gap-3 opacity-40">
              <div className="w-10 h-10 bg-[#e2e8f0] text-[#1a1c1c] rounded-full flex items-center justify-center font-bold">3</div>
              <span className="font-semibold text-[#1a1c1c] text-sm">Uploads</span>
            </div>

            <div className="flex items-center gap-3 opacity-40">
              <div className="w-10 h-10 bg-[#e2e8f0] text-[#1a1c1c] rounded-full flex items-center justify-center font-bold">4</div>
              <span className="font-semibold text-[#1a1c1c] text-sm">Review</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-8 md:px-16 pt-16 space-y-16">
            
            {/* Section 1: Student Information */}
            <section className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-[#1a1c1c]">Student Information</h2>
                <p className="text-[#5b403d] text-base">Please provide the personal details of the prospective student.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                {/* Full Legal Name */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Baluku Junior"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400"
                  />
                </div>

                {/* Date of Birth */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium text-slate-500"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium appearance-none"
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-slate-500">
                       <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Intended Class */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Intended Class
                  </label>
                  <div className="relative">
                    <select
                      name="intendedClass"
                      value={formData.intendedClass}
                      onChange={handleInputChange}
                      className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium appearance-none"
                    >
                      <option value="" disabled>Select Grade</option>
                      <option value="Baby Class">Baby Class</option>
                      <option value="Middle Class">Middle Class</option>
                      <option value="Upper Class">Upper Class</option>
                      <option value="P.1">P.1</option>
                      <option value="P.2">P.2</option>
                      <option value="P.3">P.3</option>
                      <option value="P.4">P.4</option>
                      <option value="P.5">P.5</option>
                      <option value="P.6">P.6</option>
                      <option value="P.7">P.7</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-slate-500">
                       <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Previous School */}
                <div className="col-span-1 md:col-span-2 space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Previous School Attended
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    placeholder="Name of previous institution"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400"
                  />
                </div>

              </div>
            </section>

            <div className="w-full h-px bg-slate-100"></div>

            {/* Section 2: Parent / Guardian Details */}
            <section className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-[#1a1c1c]">Parent / Guardian Details</h2>
                <p className="text-[#5b403d] text-base">Primary contact information for school communication.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                
                {/* Guardian Name */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Guardian Full Name
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    placeholder="Jane Kabu"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="+256 700 000 000"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="jane.do@example.com"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400"
                  />
                </div>

                {/* Occupation */}
                <div className="space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Profession"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-full px-8 py-5 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400"
                  />
                </div>

                {/* Physical Address */}
                <div className="col-span-1 md:col-span-2 space-y-2 relative">
                  <label className="text-[11px] font-bold text-[#5b403d] uppercase tracking-[1px] ml-4">
                    Physical Address
                  </label>
                  <textarea
                    name="physicalAddress"
                    rows={3}
                    placeholder="Residential address details"
                    value={formData.physicalAddress}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3f3f3] text-[#1a1c1c] rounded-[32px] px-8 py-6 focus:outline-none focus:ring-2 focus:ring-[#af101a] transition font-medium placeholder-slate-400 resize-none"
                  />
                </div>

              </div>
            </section>

            <div className="w-full h-px bg-slate-100"></div>

            {/* Section 3: Document Uploads */}
            <section className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-[#1a1c1c]">Document Uploads</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Birth Certificate Upload */}
                <div className="border-[2.5px] border-dashed border-[#eabebf] bg-[#fdfafb] hover:bg-white rounded-[40px] p-10 flex flex-col items-center justify-center cursor-pointer transition group">
                  <div className="text-[#af101a] mb-4 group-hover:-translate-y-1 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-[#1a1c1c] text-lg mb-1">Birth Certificate</h4>
                  <p className="text-sm text-[#5b403d]">PDF, JPG or PNG (Max 5MB)</p>
                </div>

                {/* Recent Report Card Upload */}
                <div className="border-[2.5px] border-dashed border-[#eabebf] bg-[#fdfafb] hover:bg-white rounded-[40px] p-10 flex flex-col items-center justify-center cursor-pointer transition group">
                  <div className="text-[#af101a] mb-4 group-hover:-translate-y-1 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-[#1a1c1c] text-lg mb-1">Recent Report Card</h4>
                  <p className="text-sm text-[#5b403d]">Previous term results</p>
                </div>

              </div>
            </section>

            {/* Form Footer Action Area */}
            <div className="pt-8 pb-4 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
              
              <button type="button" className="flex items-center gap-2 font-bold text-[#5b403d] hover:text-[#1a1c1c] transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Save for Later
              </button>

              <button type="submit" className="w-full sm:w-auto bg-[#af101a] hover:bg-[#8f0d14] text-white font-bold py-4 px-10 rounded-full transition flex items-center justify-center gap-3 shadow-lg shadow-red-700/20">
                Review & Submit
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
