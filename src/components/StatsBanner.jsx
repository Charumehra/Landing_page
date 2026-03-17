import React from "react";
import { Users, Globe, Rocket, Award, Zap } from "lucide-react";

const stats = [
  {
    label: "Global Reach",
    value: "140+",
    suffix: "Projects",
    desc: "Seamless deployment across diverse international markets.",
    icon: Globe,
    color: "from-sky-400 to-blue-600",
    shadow: "shadow-sky-500/20",
  },
  {
    label: "Client Trust",
    value: "98%",
    suffix: "Retention",
    desc: "Building long-term equity through technical excellence.",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    label: "Innovation",
    value: "24/7",
    suffix: "Support",
    desc: "Round-the-clock monitoring for mission-critical systems.",
    icon: Rocket,
    color: "from-indigo-400 to-purple-600",
    shadow: "shadow-indigo-500/20",
  },
  {
    label: "Expertise",
    value: "10+",
    suffix: "Awards",
    desc: "Recognized for pioneering digital transformation strategies.",
    icon: Award,
    color: "from-cyan-400 to-sky-600",
    shadow: "shadow-cyan-500/20",
  },
];

const StatsBanner = () => {
  return (
    <section className="relative bg-[#020202] py-14 md:py-22 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 blur-[140px] rounded-full mix-blend-screen animate-pulse" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full mix-blend-screen" />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-200 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-sky-400 font-bold tracking-[0.4em] uppercase text-[10px]">
                System Analytics
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-none">
              The Physics <br />
              <span className="text-gray-600 italic">of Scaling.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm font-light leading-relaxed border-l border-white/10 pl-6">
            Real-time performance metrics across our global infrastructure
            network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 overflow-hidden transition-all duration-700 hover:border-sky-500/40 hover:-translate-y-2 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div
                  className={`mb-12 p-4 w-fit rounded-2xl bg-white/[0.03] border border-white/10 text-white ${stat.shadow} group-hover:scale-110 transition-transform duration-500`}
                >
                  <stat.icon size={28} strokeWidth={1} />
                </div>

                <div className="space-y-4">
                  <div className="space-y-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
                      {stat.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}
                      >
                        {stat.value}
                      </span>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>

                  <div className="h-px w-8 bg-white/20 group-hover:w-full transition-all duration-700" />

                  <p className="text-gray-400 text-sm font-light leading-relaxed opacity-80">
                    {stat.desc}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none">
                <Zap size={140} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {["Security Audited", "Cloud Native", "Enterprise Ready"].map(
            (tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600"
              >
                <div className="w-1 h-1 rounded-full bg-sky-500/50" />
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
