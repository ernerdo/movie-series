import { describe, expect, test } from 'vitest'
import { getMovieDetails } from '../../client/MovieApiClient'

describe('MovieApiClient for getMovieDetails', () => {
  test('getMovieDetails search movie Finding Nemo', async () => {
    console.log('MovieApiClient test')
    const movieDetails = await getMovieDetails(12)
    expect(movieDetails.title).toBe('Finding Nemo')
  })
})
