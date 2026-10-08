import React from 'react';
import { SearchBar } from './SearchBar';

export function Header({ query, setQuery, filters, setFilters }) {
  return (
    <header className="fixed top-0 z-40 w-full bg-gradient-to-b from-black/95 via-black/60 to-transparent px-8 py-4 flex items-center justify-between transition-all">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold tracking-widest text-red-600 cursor-pointer">
          WACHUWACHUWA
        </h1>
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-300">
          <button 
            onClick={() => setFilters(prev => ({ ...prev, onlyFavorites: false, genre: "all" }))}
            className="hover:text-white transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => setFilters(prev => ({ ...prev, onlyFavorites: true }))}
            className={`hover:text-white transition-colors ${filters.onlyFavorites ? 'text-red-500 font-semibold' : ''}`}
          >
            Mi Lista
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <SearchBar query={query} setQuery={setQuery} />
        <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-bold text-white text-xs">
          MV
        </div>
      </div>
    </header>
  );
}