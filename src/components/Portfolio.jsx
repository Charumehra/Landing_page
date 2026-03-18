import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  Globe,
  Zap,
  ChevronRight,
  Share2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cloud Scale",
    category: "Platform",
    year: "2024",
    description: "High-performance architecture scaled to 300% growth.",
    longDescription:
      "We engineered a custom cloud-native solution that reduced latency by 45% while allowing the client to scale their user base by 300%.",
    tags: ["React", "AWS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Speed", value: "+45%" },
      { label: "Scale", value: "300%" },
    ],
  },
  {
    id: 2,
    title: "AI Insights",
    category: "Intelligence",
    year: "2024",
    description: "Predictive analysis tool for customer behavior.",
    longDescription:
      "This tool processes millions of data points to provide predictive analysis on customer behavior with 98% accuracy.",
    tags: ["Python", "TensorFlow", "React"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "ROI", value: "3wks" },
      { label: "Accuracy", value: "98%" },
    ],
  },
  {
    id: 3,
    title: "Cyber Audit",
    category: "Security",
    year: "2024",
    description: "Enterprise-grade vulnerability assessment suite.",
    longDescription:
      "A comprehensive security audit that identified and patched over 50 critical vulnerabilities in a global logistics network.",
    tags: ["Next.js", "Go", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Patched", value: "50+" },
      { label: "Risk", value: "-90%" },
    ],
  },
];

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft size={14} />
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-gray-500">
              Back
            </span>
          </button>
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-sky-500">
            {project.category}
          </span>
        </div>
      </nav>
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12">
          {project.title}{" "}
          <span className="text-gray-600 italic font-light">Case.</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-[2rem] overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-cover aspect-video"
            />
          </div>
          <div className="space-y-6">
            {project.stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem]"
              >
                <p className="text-4xl font-medium text-sky-400">{s.value}</p>
                <p className="text-[9px] tracking-widest uppercase text-gray-500 font-bold">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  if (activeProject)
    return (
      <ProjectDetail
        project={activeProject}
        onBack={() => setActiveProject(null)}
      />
    );

  return (
    <section className="bg-[#030303] text-white py-20 px-6 min-h-screen relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-sky-400 font-bold tracking-[0.4em] uppercase text-[9px] block mb-4">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight">
            Selected{" "}
            <span className="text-gray-700 italic font-light">Works.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-3 transition-all duration-500 hover:border-sky-500/30"
            >
              <div className="relative aspect-square overflow-hidden rounded-[1.8rem] mb-5">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <span className="text-[8px] font-bold uppercase tracking-widest">
                    Details
                  </span>
                  <ChevronRight size={12} />
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] text-sky-500 font-black uppercase tracking-widest mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
