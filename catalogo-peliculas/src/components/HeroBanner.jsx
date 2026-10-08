import React from 'react';

export function HeroBanner({ movie, onPlay, onSelect }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-[65vh] min-h-[450px] flex items-end pb-16 px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={movie.backdrop || movie.image}
          alt={movie.title}
          className="w-full h-full object-cover filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent w-2/3" />
      </div>

      <div className="relative z-10 max-w-xl space-y-3">
        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
          Tendencia Principal
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          {movie.title}
        </h1>
        <p className="text-gray-300 text-xs md:text-sm line-clamp-3">
          {movie.description}
        </p>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => onPlay(movie.id)}
            className="bg-white hover:bg-white/90 text-black font-semibold px-5 py-2.5 rounded text-xs flex items-center gap-2 transition-all shadow-md"
          >
            Reproducir
          </button>
          <button
            onClick={() => onSelect(movie.id)}
            className="bg-gray-600/70 hover:bg-gray-600/50 text-white font-semibold px-5 py-2.5 rounded text-xs flex items-center gap-2 backdrop-blur-md transition-all"
          >
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}