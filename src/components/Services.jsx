import {
  Code,
  Smartphone,
  ShieldCheck,
  Database,
  Cloud,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

const services = [
  {
    title: "Custom Software",
    icon: Code,
    desc: "Bespoke engines built for your specific scale and performance needs.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "Cloud Systems",
    icon: Cloud,
    desc: "Resilient infrastructure for the modern web with 99.9% uptime guarantee.",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Data & AI",
    icon: Database,
    desc: "Transforming raw numbers into actionable intel using neural learning.",
    accent: "from-purple-500 to-pink-600",
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    desc: "Military-grade protection for digital assets and sensitive data.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Mobile & Web",
    icon: Smartphone,
    desc: "Seamless experiences across every screen size with native performance.",
    accent: "from-orange-500 to-red-600",
  },
  {
    title: "Strategy",
    icon: Briefcase,
    desc: "Roadmaps designed for long-term dominance in competitive markets.",
    accent: "from-cyan-500 to-sky-600",
  },
];

const Services = () => {
  const [index, setIndex] = useState(services.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(400);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(window.innerWidth * 0.85);
      else if (window.innerWidth < 1024) setCardWidth(340);
      else setCardWidth(420);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const extended = [...services, ...services, ...services];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => handleNext(), 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= services.length * 2 || index <= 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(services.length);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  return (
    <section className="relative bg-[#020202] text-white py-14 md:py-22 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 text-center mb-20 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          Our Expertise
        </div>
        <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
          Future-Proof <br className="hidden md:block" /> Engineering.
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          We combine{" "}
          <span className="text-white font-medium">uncompromising code</span>{" "}
          with{" "}
          <span className="text-gray-300 italic">visionary architecture</span>{" "}
          to build the systems of tomorrow.
        </p>
      </div>
      <div
        className="relative px-4"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div className="flex justify-center md:justify-end max-w-7xl mx-auto gap-4 mb-10 md:pr-12">
          <button
            onClick={handlePrev}
            className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all active:scale-95"
          >
            <ChevronLeft
              size={24}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={handleNext}
            className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all active:scale-95"
          >
            <ChevronRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="overflow-visible select-none">
          <div
            className={`flex items-center ${
              isTransitioning
                ? "transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
                : ""
            }`}
            style={{
              transform: `translateX(calc(50% - ${index * cardWidth + cardWidth / 2}px))`,
            }}
          >
            {extended.map((item, i) => {
              const isActive = i === index;
              return (
                <div
                  key={i}
                  style={{ width: `${cardWidth}px` }}
                  className={`flex-shrink-0 px-4 transition-all duration-1000
                    ${isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-20 blur-[2px]"}
                  `}
                >
                  <div
                    className={`relative h-[480px] p-10 rounded-[3rem] bg-neutral-900/40 backdrop-blur-xl border ${isActive ? "border-white/20 shadow-2xl shadow-sky-500/10" : "border-white/5"} overflow-hidden group transition-all duration-700`}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700`}
                    />

                    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-1000">
                      <Code size={140} />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div
                          className={`p-5 rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-xl transition-all duration-700 ${isActive ? "rotate-0 scale-110" : "-rotate-12 scale-90"}`}
                        >
                          <item.icon size={32} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-20 group-hover:opacity-100 transition-opacity">
                          0{(i % services.length) + 1}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-3xl font-semibold tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed font-light line-clamp-3 group-hover:text-gray-200 transition-colors">
                          {item.desc}
                        </p>

                        <div
                          className={`flex items-center gap-2 text-sky-400 font-medium text-sm pt-4 transition-all duration-700 ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                        >
                          Explore Solution <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-20 px-10">
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
          <div
            className="absolute h-full bg-sky-500 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
            style={{
              width: `${100 / services.length}%`,
              left: `${(index % services.length) * (100 / services.length)}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
