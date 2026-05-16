function Footer() {
  return (
    <footer className="bg-gaming-charcoal border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gaming-purple rounded-lg flex items-center justify-center font-black text-xs">TK</div>
            <span className="font-bold tracking-tighter text-gray-300">TEAM KHAOS</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-medium">Team Khaos</span>. Todos los derechos reservados.
          </p>

          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-gaming-purple transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gaming-purple transition-colors">Términos</a>
            <a href="#" className="hover:text-gaming-purple transition-colors">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
