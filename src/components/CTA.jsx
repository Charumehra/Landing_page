const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 text-white">
      <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to design your next generation platform?</h2>
        <p className="mt-4 text-lg text-sky-100">Let’s align technology, product, and operations with measurable business outcomes. we help you execute from concept to steady-state.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:scale-105">Start a Project</a>
          <a href="mailto:contact@infocera.in" className="inline-flex items-center justify-center rounded-xl border border-white/70 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10">Email us</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;