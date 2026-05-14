
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const location = useLocation();
  const isVisitor = location.pathname.startsWith('/visitante');

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-white/5 bg-gaming-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Hamburger menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo and Brand */}
            <a
              href={isVisitor ? "/visitante" : "/home"}
              className="flex items-center space-x-3 ml-4 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gaming-purple blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <img
                  src="/logo.png"
                  alt="logo"
                  className="relative h-12 w-12 rounded-xl object-contain border border-white/10 shadow-lg"
                />
              </div>
              <span className="font-black text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                TEAM KHAOS
              </span>
            </a>
          </div>

          {/* Conditional Navigation Links */}
          {isVisitor && (
            <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider text-gray-400">
              <a href="/visitante" className="hover:text-gaming-purple transition-colors">Inicio</a>
              <a href="/visitante" className="hover:text-gaming-purple transition-colors">Juegos</a>
              <a href="/visitante" className="hover:text-gaming-purple transition-colors">Proyectos</a>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative px-6 py-2.5 bg-gaming-purple hover:bg-gaming-purple/90 text-white font-bold rounded-xl transition-all duration-300 purple-glow-hover active:scale-95 text-sm uppercase tracking-wider overflow-hidden group">
              <span className="relative z-10 flex items-center">
                {isVisitor ? "Comunidad" : "Subir Proyecto"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
