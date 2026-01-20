
import React from 'react';
import { Header, Footer, scrollToSection } from './components/Layout';
import { RESUME_DATA, ICONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Hi, I'm <span className="text-indigo-600">{RESUME_DATA.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {RESUME_DATA.objective}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="#education"
                onClick={(e) => scrollToSection(e, 'education')}
                className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all active:scale-95"
              >
                View Education
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Quick Info */}
      <section id="about" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ICONS.Briefcase className="text-indigo-600" />
                About Me
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am a dedicated Computer Science student currently pursuing my B.Sc. degree. 
                With a strong foundation in programming and databases, I enjoy building structured solutions 
                and exploring new technologies.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <ICONS.PenTool className="text-indigo-600 w-5 h-5" />
                  Scholastic Achievement
                </h3>
                <p className="text-slate-600 italic">"{RESUME_DATA.achievement}"</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ICONS.Calendar className="text-indigo-600" />
                Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Date of Birth</p>
                  <p className="text-slate-700 font-medium">{RESUME_DATA.dob}</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Languages</p>
                  <p className="text-slate-700 font-medium">{RESUME_DATA.languages.join(", ")}</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 sm:col-span-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-slate-700 font-medium">{RESUME_DATA.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skill Set</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESUME_DATA.skills.technical.map((group, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-indigo-600 p-8 rounded-2xl shadow-lg text-white">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <ICONS.Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <ul className="space-y-2 opacity-90">
                {RESUME_DATA.skills.soft.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-200 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className={`mb-12 relative ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-50%]' : 'md:pl-12 md:left-[50%]'}`}>
                <div className="absolute top-0 w-8 h-8 bg-white border-4 border-indigo-600 rounded-full -left-[17px] md:left-auto md:right-auto md:mx-auto md:left-[-17px] z-10"></div>
                <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 inline-block w-full max-w-lg hover:border-indigo-200 transition-colors">
                  <span className="text-indigo-600 font-bold text-sm mb-2 block">{edu.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium mb-3">{edu.institution}</p>
                  <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">
                    Score: {edu.marks}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 flex items-start gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ICONS.Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{cert.title}</h4>
                  <p className="text-sm text-slate-500">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Roles */}
      <section id="experience" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Academic Affiliations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {RESUME_DATA.affiliations.map((role, idx) => (
              <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl min-w-[280px] border border-slate-100">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                  <ICONS.Briefcase className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-600 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-700 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Contact Me</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              I am currently looking for internship and entry-level opportunities. Feel free to reach out to me!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href={`mailto:${RESUME_DATA.email}`} className="flex flex-col items-center p-10 bg-white/10 backdrop-blur-md rounded-3xl hover:bg-white/20 transition-colors group">
              <ICONS.Mail className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Email Me</h3>
              <p className="text-indigo-100 text-center break-all">{RESUME_DATA.email}</p>
            </a>
            <a href={`tel:${RESUME_DATA.phone.replace(/\s/g, '')}`} className="flex flex-col items-center p-10 bg-white/10 backdrop-blur-md rounded-3xl hover:bg-white/20 transition-colors group">
              <ICONS.Phone className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Call Me</h3>
              <p className="text-indigo-100">{RESUME_DATA.phone}</p>
            </a>
            <div className="flex flex-col items-center p-10 bg-white/10 backdrop-blur-md rounded-3xl hover:bg-white/20 transition-colors group text-center">
              <ICONS.MapPin className="w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-indigo-100">Tirupur, Tamil Nadu</p>
            </div>
          </div>
          
          <div className="mt-20 p-8 border border-white/20 rounded-3xl bg-white/5 text-center max-w-3xl mx-auto">
            <p className="italic text-indigo-100 text-sm">
              "I hereby declare that the above-mentioned information is true and correct to the best of my knowledge and belief."
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-end text-xs font-semibold tracking-widest uppercase opacity-75">
              <span>Date: {new Date().toLocaleDateString()}</span>
              <span>Place: Dharapuram</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
