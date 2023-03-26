import { describe, expect, test } from 'vitest'
import {
  getMovieDetails,
  getSimilarMovies,
  getCast,
  getImages,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieVideos,
} from '../../client/MovieApiClient'

describe('MovieApiClient for getMovieDetails', () => {
  test('getMovieDetails search movie Finding Nemo', async () => {
    const movieDetails = await getMovieDetails(12)
    expect(movieDetails.title).toBe('Finding Nemo')
  })
})

describe('MovieApiClient for getSimilarMovies', () => {
  test('getSimilarMovies search movie Finding Nemo', async () => {
    const similarMovies = await getSimilarMovies(12)
    expect(similarMovies.results.length).greaterThanOrEqual(1)
  })
})

describe('MovieApiClient for getCast', () => {
  test('getCast search movie Finding Nemo', async () => {
    const cast = await getCast(12)
    expect(cast.cast.length).greaterThanOrEqual(1)
  })
})
describe('MovieApiClient for getImages', () => {
  test('getImages search movie Finding Nemo', async () => {
    const images = await getImages(12)
    expect(images.backdrops.length).greaterThanOrEqual(1)
  })
})
describe('MovieApiClient for getPopularMovies', () => {
  test('getPopularMovies search movie Finding Nemo', async () => {
    const popularMovies = await getPopularMovies(12)
    expect(popularMovies.results.length).greaterThanOrEqual(1)
  })
})
describe('MovieApiClient for getMovieVideos', () => {
  test('getMovieVideos search movie Finding Nemo', async () => {
    const movieVideos = await getMovieVideos(12)
    expect(movieVideos.results.length).greaterThanOrEqual(1)
  })
})
describe('MovieApiClient for getTopRatedMovies', () => {
  test('getTopRatedMovies search movie Finding Nemo', async () => {
    const topRatedMovies = await getTopRatedMovies()
    expect(topRatedMovies.results.length).greaterThanOrEqual(1)
  })
})
describe('MovieApiClient for getUpcomingMovies', () => {
  test('getUpcomingMovies search movie Finding Nemo', async () => {
    const upcomingMovies = await getUpcomingMovies()
    expect(upcomingMovies.results.length).greaterThanOrEqual(1)
  })
})
