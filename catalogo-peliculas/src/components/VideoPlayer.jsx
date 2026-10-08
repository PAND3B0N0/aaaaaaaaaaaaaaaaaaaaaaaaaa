import React from 'react';

export function VideoPlayer({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between animate-fadeIn">
      <div className="p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
        <button 
          onClick={onClose}
          className="text-white text-xs font-semibold flex items-center gap-2 hover:text-red-500 transition-colors"
        >
          Volver al catálogo
        </button>
        <span className="text-white font-semibold text-xs">{movie.title}</span>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center relative px-4">
        <div className="w-full max-w-3xl aspect-video bg-black rounded overflow-hidden border border-gray-800 relative shadow-2xl flex items-center justify-center">
          <img src={movie.backdrop || movie.image} alt={movie.title} className="absolute inset-0 w-full h-full object-cover opacity-50 filter blur-sm" />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 text-center space-y-2">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-sm mx-auto shadow-lg animate-pulse">
              ▶
            </div>
            <p className="text-white font-semibold text-xs tracking-wider">Reproduciendo transmisión...</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-1 max-w-3xl mx-auto w-full text-[10px]">
        <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
          <div className="bg-red-600 w-1/3 h-full"></div>
        </div>
        <div className="flex justify-between text-gray-400 font-medium">
          <span>01:23 / 03:45</span>
          <span>HD • Audio Estéreo • Español</span>
        </div>
      </div>
    </div>
  );
}