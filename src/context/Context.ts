import { createContext } from 'react';
import { Movie } from '../models/movies/movies.model';

export const MovieDataContext = createContext<Movie[]>([])

