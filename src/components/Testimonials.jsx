import React from "react";
import { Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO, NexaCorp",
    content: "Infocera didn't just build an app; they engineered a solution that scaled our user base by 300% in six months. Their cloud architecture is flawless.",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, FlowState",
    content: "The AI insights tool they developed has completely changed how we view our customer data. The ROI was visible within weeks.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "James Wilson",
    role: "Founder, GreenTech",
    content: "Professional, responsive, and technically superior. They are our go-to partner for all complex software needs. No one does it better.",
    image: "https://i.pravatar.cc/150?u=james",
  },
  {
    name: "Elena Rodriguez",
    role: "Director, Global Logistics",
    content: "Their cybersecurity audit saved us from potential vulnerabilities we didn't even know existed. Truly a top-tier team.",
    image: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Marcus Thorne",
    role: "Operations Lead, Arca",
    content: "Unmatched speed-to-market. We went from concept to MVP in record time without compromising on code quality or security.",
    image: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Lila Vance",
    role: "CEO, Stellar AI",
    content: "The most intuitive design and development process I've experienced. They speak the language of business as well as code.",
    image: "https://i.pravatar.cc/150?u=lila",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#030303] text-white py-8 md:py-18 px-6 overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-[15%] left-[-10%] w-[700px] h-[700px] bg-blue-600/10 blur-[180px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full animate-bounce [animation-duration:10s] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block text-sky-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
              Success Stories
            </span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight">
              What they say <br />
              <span className="text-gray-500 italic">about Infocera.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-full hover:bg-white/10 transition-all">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black group-hover:scale-90 transition-transform">
              <ArrowUpRight size={20} className="text-sky-400" />
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium">120+ Stories</p>
              <p className="text-gray-500 text-xs">View Case Studies</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((client, idx) => (
            <div 
              key={idx} 
              className="relative group flex flex-col bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl border border-white/[0.1] p-8 rounded-[2.5rem] hover:border-sky-500/50 transition-all duration-500 h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[2.5rem]" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6 text-sky-400/80">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-10 text-lg font-light tracking-wide italic flex-grow">
                  "{client.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                  <div className="relative shrink-0">
                    <img 
                      src={client.image} 
                      alt={client.name} 
                      className="w-12 h-12 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ring-2 ring-white/5"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight">{client.name}</h4>
                    <p className="text-[10px] text-sky-500/70 uppercase tracking-[0.2em] font-bold mt-0.5">{client.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
          
          <p className="text-center text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-12 font-medium">
            Empowering Global Market Leaders
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 hover:opacity-80 transition-all duration-700">
            {["SAMSUNG", "AIRBNB", "MICROSOFT", "STRIPE", "ADOBE"].map((brand) => (
              <span key={brand} className="text-xl font-black tracking-tighter hover:text-sky-400 cursor-default transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;