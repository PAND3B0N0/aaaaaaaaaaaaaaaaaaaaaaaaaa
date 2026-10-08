import { useEffect } from 'react'
import StarRating from './StarRating'

export default function MovieDetail({ movie, isFavorite, userRating, onToggleFavorite, onRate, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="overlay" onClick={onClose}>
      <div className="detail" role="dialog" aria-modal="true" aria-label={movie.title} onClick={(e) => e.stopPropagation()}>
        <button className="detail__close" onClick={onClose} aria-label="Cerrar detalle">✕</button>
        <img src={movie.image} alt={`Poster de ${movie.title}`} />
        <div className="detail__info">
          <h2>{movie.title}</h2>
          <p className="card__meta">{movie.genre}, {movie.year}, nota general {movie.rating.toFixed(1)}</p>
          <p>{movie.description}</p>

          <h3>Tu calificación</h3>
          <StarRating value={userRating} onRate={(n) => onRate(movie.id, n)} />
          <p className="detail__hint">{userRating ? `Le diste ${userRating} de 5.` : 'Aún no la calificas.'}</p>

          <button className="btn" onClick={() => onToggleFavorite(movie.id)}>
            {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        </div>
      </div>
    </div>
  )
}
