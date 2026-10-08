import React from 'react';

export function SearchBar({ query, setQuery }) {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar títulos..."
        className="w-full bg-[#141414] border border-gray-700 rounded px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
      />
    </div>
  );
}