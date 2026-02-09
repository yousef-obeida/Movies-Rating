import axios from 'axios'

// Supports a v3 API key.
const v3Key = import.meta.env.VITE_TMDB_API_KEY

if (!v3Key) {
  console.warn('TMDB API key missing: set VITE_TMDB_API_KEY (v3)')
}

const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    language: 'en-US',
    ...(v3Key ? { api_key: v3Key } : {}),
  },
})

// Fetch a list of popular movies from TMDB.
export async function getPopularMovies () {
  const { data } = await tmdbClient.get('/movie/popular')
  return (data?.results || []).map(normalizeMovie)
}

// Search for movies by query string.
export async function searchMovies (query) {
  const { data } = await tmdbClient.get('/search/movie', { params: { query } })
  return (data?.results || []).map(normalizeMovie)
}

// Fetch the list of official genres.
export async function getGenres () {
  const { data } = await tmdbClient.get('/genre/movie/list')
  return data?.genres || []
}

function normalizeMovie (movie) {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    image: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null,
    score: movie.vote_average,
    date: movie.release_date,
    genreIds: movie.genre_ids || [],
  }
}
