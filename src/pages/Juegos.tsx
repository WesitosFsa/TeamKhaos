import StarsOrbit from '../components/StarsOrbit';

const Juegos = () => {
  const games = [
    {
      title: "Proyecto Alpha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      title: "Proyecto Beta",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      title: "Proyecto Gamma",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <StarsOrbit />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-black mb-16 uppercase tracking-widest text-[#7c3aed]">Nuestros Juegos</h1>
        
        <div className="space-y-20">
          {games.map((game, index) => (
            <div key={index} className="border-b border-white/5 pb-20">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Placeholder */}
                <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img 
                    src={`https://picsum.photos/800/450?random=${index + 1}`} 
                    alt={game.title} 
                    className="w-full h-auto rounded-xl border border-white/10 shadow-2xl hover:border-[#7c3aed]/50 transition-all duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : ''} space-y-6`}>
                  <h2 className="text-3xl font-black">{game.title}</h2>
                  <p className="text-[rgba(255,255,255,0.45)] leading-relaxed">
                    {game.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 border border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white font-bold rounded-lg transition-all">
                      Ver más
                    </button>
                    <button className="px-6 py-2 border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.2)] font-bold rounded-lg transition-all">
                      Presskit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Juegos;
