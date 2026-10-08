export default function Favorites({ movies, onSelect, onToggleFavorite }) {
  if (movies.length === 0) return null

  return (
    <section className="favs" aria-label="Mis favoritas">
      <h2>Tu lista de la risa</h2>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <button className="chip" onClick={() => onSelect(m.id)}>{m.title}</button>
            <button className="chip__x" onClick={() => onToggleFavorite(m.id)} aria-label={`Quitar ${m.title} de favoritos`}>✕</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
