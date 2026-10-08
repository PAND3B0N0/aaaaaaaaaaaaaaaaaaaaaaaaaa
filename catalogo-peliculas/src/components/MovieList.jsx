import React from 'react';

export function MovieDetail({ movie, onClose, isFavorite, onToggleFavorite, userRating, onRate }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#181818] border border-gray-800 rounded-lg overflow-hidden max-w-xl w-full shadow-2xl relative flex flex-col md:flex-row">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
        >
          ✕
        </button>

        <div className="md:w-1/2 relative aspect-video md:aspect-auto">
          <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-5 md:w-1/2 flex flex-col justify-between text-xs">
          <div>
            <div className="flex items-center gap-2 font-medium text-gray-400 uppercase tracking-wider mb-2">
              <span>{movie.genre}</span>
              <span>•</span>
              <span>{movie.year}</span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2">{movie.title}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">{movie.description}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-gray-300">
              <span>Calificación global:</span>
              <span className="text-green-400 font-semibold">{movie.rating} / 5</span>
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <span>Tu valoración:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => onRate(movie.id, star)}
                    className={`text-sm transition-colors ${
                      (userRating || 0) >= star ? 'text-yellow-400' : 'text-gray-600 hover:text-gray-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onToggleFavorite(movie.id)}
              className={`w-full py-2 rounded font-semibold transition-all ${
                isFavorite 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700'
              }`}
            >
              {isFavorite ? 'Remover de Mi Lista' : 'Añadir a Mi Lista'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}