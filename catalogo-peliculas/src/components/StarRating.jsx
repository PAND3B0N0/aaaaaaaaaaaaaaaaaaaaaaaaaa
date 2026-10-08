export default function StarRating({ value, onRate }) {
  return (
    <div className="stars" role="radiogroup" aria-label="Tu calificación">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={n === value}
          aria-label={`${n} ${n === 1 ? 'estrella' : 'estrellas'}`}
          className={n <= value ? 'star star--on' : 'star'}
          onClick={() => onRate(n)}
        >
          ★
        </button>
      ))}
    </div>
  )
}
