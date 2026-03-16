const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Infocera</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">Crafting digital transformation journeys for enterprises by building scalable, compliant, and data-driven platforms.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Cloud Migration</li>
              <li>Data Engineering</li>
              <li>App Modernization</li>
              <li>Security & Compliance</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Contact</h4>
            <p className="text-sm text-slate-400">contact@infocera.in</p>
            <p className="mt-2 text-sm text-slate-400">+91 98765 43210</p>
            <p className="mt-2 text-sm text-slate-400">Bangalore, India</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Infocera. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;