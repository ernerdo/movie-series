import { describe, expect, test } from 'vitest'
import { getGenreMovieList } from '../../client/MovieGenreApiClient'

describe('MovieGenreApi for getGenreMovieList', () => {
  test('getGenreMovieList search movie genre Action', async () => {
    const genreMovieList = await getGenreMovieList(28)
    expect(genreMovieList.genres.length).greaterThanOrEqual(1)
  })
})
