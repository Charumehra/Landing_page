import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Headphones,
  Users,
  ChevronDown,
} from "lucide-react";

const words = ["Modern", "Robust", "Secure"];

const features = [
  {
    title: "Innovation",
    desc: "We bring creative and cutting-edge ideas to solve real-world problems.",
    icon: <Lightbulb size={24} />,
  },
  {
    title: "Secure & Reliable",
    desc: "Your data is protected with advanced security systems.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "24/7 Support",
    desc: "We are always available to assist you anytime.",
    icon: <Headphones size={24} />,
  },
  {
    title: "Expert Team",
    desc: "Work with professionals delivering quality solutions.",
    icon: <Users size={24} />,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-16 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div
          className={`transform transition-all duration-1000 ease-out
          ${show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
          text-center lg:text-left`}
        >
          <div className="inline-block px-4 py-2 mb-6 text-sm text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md">
            🚀 Next Gen Digital Solutions
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Build{" "}
            <span className="relative inline-flex items-baseline">
              <span className="invisible">Modern</span>

              {words.map((word, i) => (
                <span
                  key={i}
                  className={`absolute left-0 top-0 w-full transition-all duration-500
                  ${
                    i === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {word}
                  </span>
                </span>
              ))}
            </span>{" "}
            Digital Products
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            We design and develop modern, scalable, and high-performing web
            solutions that elevate your business presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <button className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition shadow-xl hover:shadow-purple-500/40">
              Get Started
              <ArrowRight
                className="group-hover:translate-x-1 transition"
                size={18}
              />
            </button>

            <button className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white hover:text-black transition hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((item, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white 
              transform transition-all duration-1000 ease-out
              hover:scale-105 hover:bg-white/20 cursor-pointer
              ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
              `}
            >
              <div className="mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                {item.icon}
              </div>

              <h3 className="text-md sm:text-lg font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={handleScroll}
          className="group flex flex-col items-center gap-2"
        >
          <span className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent"></span>

          <ChevronDown
            size={28}
            className="text-white/70 group-hover:text-white 
            transition-all duration-300 
            group-hover:translate-y-1 animate-pulse"
          />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="relative w-[1400px] h-[300px]">
          <div
            className="absolute bottom-0 w-full h-40 rounded-full blur-3xl opacity-60 animate-pulse
          bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          ></div>

          <div
            className="absolute bottom-10 w-full h-40 rounded-full blur-3xl opacity-50 animate-pulse
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          ></div>

          <div
            className="absolute bottom-20 w-full h-32 rounded-full blur-3xl opacity-40 animate-pulse
          bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500"
          ></div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-72 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>
  );
};

export default Hero;
