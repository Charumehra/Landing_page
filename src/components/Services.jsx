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
    desc: "Bespoke engines built for specific scale needs.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "Cloud Systems",
    icon: Cloud,
    desc: "Resilient infrastructure with 99.9% uptime.",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Data & AI",
    icon: Database,
    desc: "Transforming numbers into actionable intel.",
    accent: "from-purple-500 to-pink-600",
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    desc: "Military-grade protection for digital assets.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Mobile & Web",
    icon: Smartphone,
    desc: "Seamless experiences across every screen.",
    accent: "from-orange-500 to-red-600",
  },
  {
    title: "Strategy",
    icon: Briefcase,
    desc: "Roadmaps designed for long-term dominance.",
    accent: "from-cyan-500 to-sky-600",
  },
];

const Services = () => {
  const [index, setIndex] = useState(services.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(320); // Reduced width
  const intervalRef = useRef(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(window.innerWidth * 0.8);
      else if (window.innerWidth < 1024) setCardWidth(300);
      else setCardWidth(380);
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
    <section className="relative bg-[#020202] text-white py-12 md:py-16 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center mb-10 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
          <span className="w-1 h-1 rounded-full bg-sky-500 animate-pulse" />
          Our Expertise
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Future-Proof Engineering.
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Uncompromising code meets visionary architecture.
        </p>
      </div>

      <div
        className="relative px-4"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div className="flex justify-center md:justify-end max-w-6xl mx-auto gap-3 mb-6 md:pr-10">
          <button
            onClick={handlePrev}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="overflow-visible select-none">
          <div
            className={`flex items-center ${isTransitioning ? "transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)" : ""}`}
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
                  className={`flex-shrink-0 px-3 transition-all duration-1000 ${isActive ? "scale-100 opacity-100" : "scale-[0.9] opacity-20 blur-[1px]"}`}
                >
                  <div
                    className={`relative h-[380px] p-8 rounded-[2.5rem] bg-neutral-900/40 backdrop-blur-xl border ${isActive ? "border-white/20 shadow-xl shadow-sky-500/5" : "border-white/5"} overflow-hidden group transition-all`}
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.05] transition-opacity`}
                    />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div
                          className={`p-4 rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-lg transition-all ${isActive ? "scale-100" : "scale-90 opacity-50"}`}
                        >
                          <item.icon size={24} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
                          0{(i % services.length) + 1}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2">
                          {item.desc}
                        </p>
                        <div
                          className={`flex items-center gap-2 text-sky-400 font-medium text-xs pt-2 transition-all duration-700 ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                        >
                          Explore Solution <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-[200px] mx-auto mt-12 px-4">
        <div className="h-[1.5px] w-full bg-white/5 rounded-full overflow-hidden relative">
          <div
            className="absolute h-full bg-sky-500 transition-all duration-1000"
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
