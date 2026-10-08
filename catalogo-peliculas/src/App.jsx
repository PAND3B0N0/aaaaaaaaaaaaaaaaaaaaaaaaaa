import React, { useState } from 'react';
import { movies } from './data/movies';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MovieRow } from './components/MovieRow';
import { MovieList } from './components/MovieList';
import { MovieDetail } from './components/MovieDetail';
import { VideoPlayer } from './components/VideoPlayer';
import { Filters } from './components/Filters';

export function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [playingId, setPlayingId] = useState(null);

  const genres = [...new Set(movies.map((m) => m.genre))];
  const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleRate = (id, score) => {
    setRatings((prev) => ({ ...prev, [id]: score }));
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= Number(filters.minRating);
    const matchesFavorites = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorites;
  });

  const selectedMovie = movies.find((m) => m.id === selectedId);
  const playingMovie = movies.find((m) => m.id === playingId);
  const heroMovie = movies.find((m) => m.trending) || movies[0];

  const isFilteringActive = query || filters.genre !== "all" || filters.year !== "all" || filters.minRating > 0 || filters.onlyFavorites;

  return (
    <div className="min-h-screen bg-[#141414] text-gray-100 flex flex-col font-sans">
      <Header query={query} setQuery={setQuery} filters={filters} setFilters={setFilters} />

      {isFilteringActive ? (
        <main className="max-w-7xl mx-auto w-full px-8 pt-24 pb-12 flex-grow">
          <Filters filters={filters} setFilters={setFilters} genres={genres} years={years} />
          <MovieList
            movies={filteredMovies}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelect={setSelectedId}
            onPlay={setPlayingId}
          />
        </main>
      ) : (
        <main className="flex-grow pb-12">
          <HeroBanner 
            movie={heroMovie} 
            onPlay={setPlayingId} 
            onSelect={setSelectedId} 
          />

          <div className="-mt-14 relative z-20 space-y-4">
            <MovieRow 
              title="Tendencias Actuales" 
              movies={movies.filter(m => m.trending)} 
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelect={setSelectedId}
              onPlay={setPlayingId}
            />
            <MovieRow 
              title="Comedia y Absurdo" 
              movies={movies.filter(m => m.genre === "Comedia" || m.genre === "Absurdo")} 
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelect={setSelectedId}
              onPlay={setPlayingId}
            />
            <MovieRow 
              title="Terror Informático" 
              movies={movies.filter(m => m.genre === "Terror")} 
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelect={setSelectedId}
              onPlay={setPlayingId}
            />
          </div>
        </main>
      )}

      {selectedId && (
        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedId(null)}
          isFavorite={favorites.includes(selectedId)}
          onToggleFavorite={handleToggleFavorite}
          userRating={ratings[selectedId]}
          onRate={handleRate}
        />
      )}

      {playingId && (
        <VideoPlayer
          movie={playingMovie}
          onClose={() => setPlayingId(null)}
        />
      )}
    </div>
  );
}

export default App;