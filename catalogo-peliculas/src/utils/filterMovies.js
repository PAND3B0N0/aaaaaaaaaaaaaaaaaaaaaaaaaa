// Combina buscador + filtros. Devuelve un arreglo nuevo, sin tocar el original.
export function filterMovies(movies, query, filters, favorites) {
  const text = query.trim().toLowerCase()

  return movies
    .filter((m) => m.title.toLowerCase().includes(text))
    .filter((m) => filters.genre === 'all' || m.genre === filters.genre)
    .filter((m) => filters.year === 'all' || m.year === Number(filters.year))
    .filter((m) => m.rating >= filters.minRating)
    .filter((m) => !filters.onlyFavorites || favorites.includes(m.id))
}
