import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://imdb.iamidiotareyoutoo.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Fetch a meaningful list of movies from the new API.
export async function getPopularMovies () {
  const { data } = await apiClient.get('/search?q=all')

  return (data?.description || []).map((movie) => ({
    id: movie['#IMDB_ID'],
    title: movie['#TITLE'],
    description: `Rank: ${movie['#RANK']} - ${movie['#ACTORS']}`, 
    image: movie['#IMG_POSTER'],
    score: 0, 
    date: String(movie['#YEAR'])
  }))
}
