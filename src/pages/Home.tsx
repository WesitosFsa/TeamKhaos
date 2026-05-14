import { GameCard } from '../components/GameCard';

const Home = () => {
  const featuredGames = [
    { title: "Neon Drifter", genre: "Racing / Sci-Fi", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" },
    { title: "Cyber Protocol", genre: "Puzzle / Strategy", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" },
    { title: "Void Walker", genre: "Platformer", imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400" },
    { title: "Data Breach", genre: "Action / Indie", imageUrl: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&q=80&w=400" },
    { title: "Binary Souls", genre: "RPG", imageUrl: "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?auto=format&fit=crop&q=80&w=400" },
    { title: "Pixel Quest", genre: "Adventure", imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="min-h-screen bg-gaming-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header / Hero Showcase */}
        <header className="py-12 border-b border-white/10 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Explora <span className="text-gaming-purple">Khaos</span></h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Descubre juegos independientes, sube tus creaciones y únete a nuestra comunidad.
            </p>
            <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 bg-gaming-purple hover:bg-purple-600 transition-colors font-bold rounded-lg shadow-lg">
                    Explorar Juegos
                </button>
                <button className="px-8 py-3 bg-white/5 hover:bg-white/10 transition-colors font-bold rounded-lg border border-white/10">
                    Subir Proyecto
                </button>
            </div>
        </header>

        {/* Filter Bar (Simplified) */}
        <div className="py-8 flex items-center justify-between border-b border-white/10 mb-8">
            <h2 className="text-2xl font-bold">Juegos Recientes</h2>
            <div className="flex gap-2">
                {['Todos', 'Acción', 'RPG', 'Puzzle'].map(genre => (
                    <button key={genre} className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                        {genre}
                    </button>
                ))}
            </div>
        </div>

        {/* Project Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {featuredGames.map((game, i) => (
                <GameCard key={i} {...game} />
            ))}
        </section>
      </div>

      <footer className="py-12 px-4 border-t border-white/5 bg-gaming-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-4">
                <span className="font-bold text-gaming-purple">TEAM KHAOS</span>
                <span>© 2026</span>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos</a>
                <a href="#" className="hover:text-white transition-colors">Soporte</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
