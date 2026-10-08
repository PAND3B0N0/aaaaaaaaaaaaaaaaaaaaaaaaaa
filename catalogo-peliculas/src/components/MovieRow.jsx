import React from 'react';
import { MovieCard } from './MovieCard';

export function MovieRow({ title, movies, favorites, onToggleFavorite, onSelect, onPlay }) {
  if (movies.length === 0) return null;

  return (
    <div className="space-y-2 px-8 lg:px-16 my-6">
      <h2 className="text-base md:text-lg font-bold text-white tracking-wide">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none scroll-smooth">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onToggleFavorite={onToggleFavorite}
            onSelect={onSelect}
            onPlay={onPlay}
          />
        ))}
      </div>
    </div>
  );
}