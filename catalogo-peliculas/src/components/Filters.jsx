import React from 'react';

export function Filters({ filters, setFilters, genres, years }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="bg-[#181818] border border-gray-800 rounded-lg p-4 my-6 flex flex-wrap items-center gap-4 text-xs">
      <div className="flex flex-col gap-1">
        <label className="text-gray-400 font-medium">Género</label>
        <select
          name="genre"
          value={filters.genre}
          onChange={handleChange}
          className="bg-black border border-gray-700 rounded px-3 py-1 text-white focus:outline-none focus:border-white"
        >
          <option value="all">Todos</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-400 font-medium">Año</label>
        <select
          name="year"
          value={filters.year}
          onChange={handleChange}
          className="bg-black border border-gray-700 rounded px-3 py-1 text-white focus:outline-none focus:border-white"
        >
          <option value="all">Todos</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-400 font-medium">Mín. Rating ({filters.minRating})</label>
        <input
          type="range"
          name="minRating"
          min="0"
          max="5"
          step="0.5"
          value={filters.minRating}
          onChange={handleChange}
          className="accent-red-600 cursor-pointer h-6"
        />
      </div>

      <div className="flex items-center gap-2 ml-auto pt-4">
        <label className="flex items-center gap-2 cursor-pointer text-gray-300 font-medium">
          <input
            type="checkbox"
            name="onlyFavorites"
            checked={filters.onlyFavorites}
            onChange={handleChange}
            className="accent-red-600 w-4 h-4 rounded"
          />
          Solo Mi Lista
        </label>
      </div>
    </div>
  );
}