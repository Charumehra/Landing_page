import React from "react";
import { Phone, Mail, MapPin, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
          
          <div className="lg:w-5/12 flex flex-col justify-between space-y-12 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase">
                <Zap size={14} fill="currentColor" /> Strategic Partnership
              </div>
              
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Digital Future.
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Elevate your operations with intelligence. Our experts are ready to audit your workflow and implement world-class IT infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Connect via Voice</p>
                  <p className="text-lg font-medium tracking-tight">+91 8882824948</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Global Inquiries</p>
                  <p className="text-lg font-medium tracking-tight">info@infocera.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Headquarters</p>
                  <p className="text-sm text-gray-300 leading-snug">
                    First Floor, L29-L34, Block L<br />
                    Connaught Place, New Delhi, 110001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 flex flex-col bg-[#080808] border border-white/10 p-8 md:p-12 rounded-[2.5rem] relative">
            <h3 className="text-2xl font-medium mb-8">Send a Brief</h3>
            
            <form className="space-y-8 flex-grow flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-sky-500 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Your Name</label>
                </div>

                <div className="relative group">
                  <input type="email" className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder=" " />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-sky-500 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                </div>
              </div>

              <div className="relative">
                <p className="text-[10px] text-sky-500 uppercase tracking-widest mb-3 font-bold">Select Service</p>
                <div className="flex flex-wrap gap-2">
                  {["Software", "Cloud", "Data/AI", "Strategy"].map((s) => (
                    <button key={s} type="button" className="px-4 py-2 rounded-full border border-white/10 text-xs hover:bg-white hover:text-black transition-all">
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <textarea rows="4" className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors resize-none" placeholder=" " />
                <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-sky-500 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Tell us about your project goals</label>
              </div>

              <div className="pt-4">
                <button className="w-full py-5 bg-white text-black font-black uppercase tracking-tighter rounded-2xl flex items-center justify-center gap-3 hover:bg-sky-400 transition-all active:scale-[0.98]">
                  Submit Request <ArrowRight size={20} />
                </button>
                <p className="text-center text-[10px] text-gray-600 mt-6 flex items-center justify-center gap-2">
                  <Shield size={12} /> Your data is secure and handled according to our privacy policy.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;