import React from "react";
import { Link } from "react-router-dom";
import { Users, Target, Rocket, Award, Shield, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "250+" },
    { label: "Happy Clients", value: "150+" },
    { label: "Expert Team", value: "50+" },
  ];

  return (
    <div className="bg-slate-950 text-white pt-24 md:pt-32 pb-20 overflow-hidden relative min-h-screen">
      <div className="absolute top-0 left-0 md:left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 right-0 w-64 md:w-80 h-64 md:h-80 bg-indigo-600/10 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <h2 className="text-purple-400 font-semibold tracking-widest uppercase text-[10px] md:text-xs mb-4">
          Unmatched Excellence
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight">
          Engineering the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
            Future of Digital
          </span>
        </h1>
        <p className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-light px-2">
          We don't just build software; we craft digital experiences that
          redefine industries. Our team merges cutting-edge tech with
          human-centric design to fuel your evolution.
        </p>
      </div>

      <div className="mt-16 md:mt-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-purple-400 transition-colors">
                {stat.value}
              </h3>
              <p className="text-slate-500 mt-2 text-[10px] md:text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 md:mt-32 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8 md:space-y-10">
          <div className="group flex flex-col sm:flex-row gap-4 md:gap-6 text-center sm:text-left items-center sm:items-start">
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-400 w-fit group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Our Core Mission
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-lg">
                To engineer scalable, high-performance tech stacks that solve
                complex challenges. We believe in code that creates value and
                design that inspires trust.
              </p>
            </div>
          </div>

          <div className="group flex flex-col sm:flex-row gap-4 md:gap-6 text-center sm:text-left items-center sm:items-start">
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 w-fit group-hover:scale-110 transition-transform">
              <Rocket size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Our Vision 2030
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-lg">
                Setting the global gold standard for digital craftsmanship. We
                aim to lead the industry through radical transparency and
                disruptive innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative px-4 sm:px-10 lg:px-0">
          <div className="aspect-square max-w-[400px] mx-auto bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-[2rem] md:rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Users
              size={80}
              className="md:size-[120px] text-purple-400/40 relative z-10"
            />

            <div className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl animate-bounce">
              <Shield size={20} className="md:size-6 text-emerald-400" />
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 p-3 md:p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl animate-pulse">
              <Zap size={20} className="md:size-6 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-40">
        <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Let's build something <br className="hidden sm:block" />{" "}
              legendary.
            </h2>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm md:text-base font-bold rounded-full hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:scale-105 transition-all duration-300 inline-block"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
