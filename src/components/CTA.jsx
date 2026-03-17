import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Zap, Check } from "lucide-react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectService = (serviceName) => {
    setFormData((prev) => ({ ...prev, service: serviceName }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form Submitted:", formData);

    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:w-5/12 flex flex-col justify-between bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                <Zap size={12} fill="currentColor" /> Strategic Partnership
              </div>
              <h2 className="text-5xl font-semibold tracking-tighter">
                Architecting <span className="text-sky-500">Futures.</span>
              </h2>
              <p className="text-gray-400 font-light italic">
                "The best way to predict the future is to engineer it."
              </p>
            </div>

            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Mail className="text-sky-400" size={20} />
                <p className="text-lg font-medium">info@infocera.in</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Phone className="text-sky-400" size={20} />
                <p className="text-lg font-medium">+91 8882824948</p>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                  <label
                    className={`absolute left-0 transition-all pointer-events-none ${formData.name ? "-top-5 text-sky-500 text-xs" : "top-3 text-gray-500 peer-focus:-top-5 peer-focus:text-sky-500 peer-focus:text-xs"}`}
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                  <label
                    className={`absolute left-0 transition-all pointer-events-none ${formData.email ? "-top-5 text-sky-500 text-xs" : "top-3 text-gray-500 peer-focus:-top-5 peer-focus:text-sky-500 peer-focus:text-xs"}`}
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] text-sky-500 uppercase tracking-[0.2em] font-bold">
                  Select Service
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Software", "Cloud", "Data/AI", "Strategy"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => selectService(s)}
                      className={`px-6 py-2.5 rounded-full border transition-all flex items-center gap-2 text-xs ${
                        formData.service === s
                          ? "bg-sky-500 border-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]"
                          : "border-white/10 text-gray-400 hover:border-white/30"
                      }`}
                    >
                      {formData.service === s && <Check size={14} />}
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
                <label
                  className={`absolute left-0 transition-all pointer-events-none ${formData.message ? "-top-5 text-sky-500 text-xs" : "top-3 text-gray-500 peer-focus:-top-5 peer-focus:text-sky-500 peer-focus:text-xs"}`}
                >
                  Project Goals
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-sky-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Start Transformation"}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
