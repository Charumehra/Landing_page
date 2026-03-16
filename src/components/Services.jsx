import { Code, Smartphone, ShieldCheck, Database, Cloud, Briefcase } from "lucide-react";

const services = [
  { title: "Custom Software Engineering", icon: Code, description: "Modern product architecture, microservices, API-first engineering and cloud-native delivery." },
  { title: "Cloud & Infrastructure", icon: Cloud, description: "Multi-cloud strategy, migration, DevOps automation, and cost optimization." },
  { title: "Data & AI", icon: Database, description: "Analytics, data platforms, ML ops, and real-time insights with governance." },
  { title: "Cybersecurity", icon: ShieldCheck, description: "Cyber defense, identity management, compliance, and secure transformation." },
  { title: "Mobile & Web Experience", icon: Smartphone, description: "UX-led apps and platforms that drive engagement and retention." },
  { title: "Digital Strategy", icon: Briefcase, description: "Roadmap, innovation labs, and execution for long-term digital business value." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-widest text-sky-600">Services</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Full-service enterprise capabilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Engineering, data, cloud operations, and security services to accelerate a resilient digital business.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <service.icon size={20} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold text-sky-600 transition hover:text-sky-500">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;