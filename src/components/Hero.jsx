const Hero = () => {
  return (
     <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-6xl md:text-7xl font-serif leading-tight">
          It's now way easier <br /> to earn a living
        </h1>

        <button className="mt-8 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition">
          Start earning now
        </button>
      </div>

      {/* Animated Gradient Waves */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="relative w-[1400px] h-[350px]">

          <div className="absolute bottom-0 w-full h-40 rounded-full blur-3xl opacity-60 animate-wave
          bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

          <div className="absolute bottom-10 w-full h-40 rounded-full blur-3xl opacity-50 animate-wave
          bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

          <div className="absolute bottom-20 w-full h-32 rounded-full blur-3xl opacity-40 animate-wave
          bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500"></div>

        </div>
      </div>

      {/* Dark fade overlay */}
      <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

    </div>
  
  );
};

export default Hero;
