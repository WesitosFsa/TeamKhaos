import { useState } from 'react';
import { GameCard } from '../components/GameCard';

const VisitorHome = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  const games = [
    { title: "Neon Drifter", genre: "Racing", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" },
    { title: "Cyber Protocol", genre: "Puzzle", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="min-h-screen bg-gaming-black text-white pt-8 pb-20">
      {/* Tabs Navigation */}
      <div className="flex justify-center gap-4 mb-12 border-b border-white/10 pb-4">
        {['inicio', 'juegos', 'proyectos'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${
              activeTab === tab ? 'bg-gaming-purple text-white' : 'text-gray-500 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {activeTab === 'inicio' && (
          <section className="animate-fade-in">
            <div className="h-96 bg-gaming-charcoal rounded-3xl flex items-center justify-center border border-white/10 mb-12">
              <h2 className="text-4xl font-black text-gaming-purple">Carrusel de Inicio</h2>
            </div>
            <p className="text-xl text-gray-300">Bienvenido a Team Khaos. Explora lo que tenemos para ti.</p>
          </section>
        )}

        {activeTab === 'juegos' && (
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Nuestros Juegos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {games.map((game, i) => <GameCard key={i} {...game} />)}
            </div>
          </section>
        )}

        {activeTab === 'proyectos' && (
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-gaming-purple">Proyectos en curso</h2>
            <div className="p-8 rounded-2xl bg-gaming-charcoal border border-white/5">
              <p className="text-gray-300">Estamos trabajando en nuevos títulos increíbles. ¡Mantente atento!</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default VisitorHome;
