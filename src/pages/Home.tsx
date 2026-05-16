import { GameCard } from '../components/GameCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-gaming-black text-white p-8">
        <header className="mb-12">
            <h1 className="text-4xl font-black mb-2">Panel de Administración</h1>
            <p className="text-gray-400">Gestiona tus proyectos, miembros y contenido.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-gaming-charcoal border border-white/5">
                <h3 className="font-bold mb-2">Total Juegos</h3>
                <p className="text-4xl font-black text-gaming-purple">24</p>
            </div>
            <div className="p-6 rounded-2xl bg-gaming-charcoal border border-white/5">
                <h3 className="font-bold mb-2">Miembros</h3>
                <p className="text-4xl font-black text-gaming-purple">5</p>
            </div>
            <div className="p-6 rounded-2xl bg-gaming-charcoal border border-white/5">
                <h3 className="font-bold mb-2">Proyectos Pendientes</h3>
                <p className="text-4xl font-black text-gaming-purple">3</p>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-6">Acciones Rápidas</h2>
            <div className="flex gap-4">
                <button className="px-6 py-3 bg-gaming-purple rounded-xl font-bold hover:scale-105 transition-transform">Crear Nuevo Juego</button>
                <button className="px-6 py-3 bg-white/5 rounded-xl font-bold hover:scale-105 transition-transform">Gestionar Miembros</button>
            </div>
        </section>
    </div>
  );
};

export default Home;
