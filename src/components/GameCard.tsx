import React from 'react';

interface GameCardProps {
  title: string;
  genre: string;
  imageUrl: string;
}

export const GameCard: React.FC<GameCardProps> = ({ title, genre, imageUrl }) => (
  <div className="bg-gaming-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-gaming-purple/30 transition-all group shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="p-5">
      <h3 className="text-lg font-bold text-white group-hover:text-gaming-purple transition-colors">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{genre}</p>
      <button className="mt-4 w-full py-2 bg-white/5 text-white text-sm font-semibold rounded-lg hover:bg-gaming-purple transition-colors">
        Ver Proyecto
      </button>
    </div>
  </div>
);
