import React from 'react';

export function MovieCard({ movie, isFavorite, onToggleFavorite, onSelect, onPlay }) {
  return (
    <div 
      onClick={() => onSelect(movie.id)}
      className="group relative bg-[#181818] rounded overflow-hidden shadow cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 flex-shrink-0 w-[220px] md:w-[250px]"
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={(e) => { e.stopPropagation(); onPlay(movie.id); }}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="p-3 bg-[#181818] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-green-400 font-medium block mb-0.5">Rating: {movie.rating} ({movie.year})</span>
          <h4 className="text-white text-xs font-semibold truncate w-[150px]">{movie.title}</h4>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie.id);
          }}
          className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
            isFavorite ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:text-white'
          }`}
        >
          {isFavorite ? 'En Lista' : '+ Lista'}
        </button>
      </div>
    </div>
  );
}