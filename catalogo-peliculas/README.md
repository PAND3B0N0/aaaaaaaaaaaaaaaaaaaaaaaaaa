# MEMETRÓN, catálogo interactivo de memes

Plataforma de streaming ficticia dedicada a memes y cosas random. Laboratorio de React (Vite) sin backend.

## Funcionalidades
- Catálogo con tarjetas (imagen, título, género, año, calificación y descripción).
- Buscador por título en tiempo real.
- Filtros por género, año, calificación mínima y solo favoritas, combinables con el buscador.
- Detalle de cada película (se cierra con la X, clic afuera o Esc).
- Favoritos (guardados solo por ID) con su lista rápida.
- Calificación personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Cómo ejecutarlo
```bash
npm install
npm run dev
```
Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## Estructura
```
src/
  App.jsx                 estado compartido y composición
  data/movies.js          12 películas
  utils/filterMovies.js   lógica de búsqueda + filtros
  components/
    Header, SearchBar, Filters, MovieList, MovieCard,
    MovieDetail, StarRating, Favorites
```

## Estado en App
`query`, `filters`, `favorites` (IDs), `ratings` (`{ id: estrellas }`) y `selectedId`.
