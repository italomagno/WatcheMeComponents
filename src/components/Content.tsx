import { useEffect, useState } from 'react'
import { ContentProps, MovieProps } from '../@types/types'
import { api } from '../services/api'
import { Header } from './Header'
import { MovieCard } from './MovieCard'

export function Content({ selectedGenreId ,selectedGenre}: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])
  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then(response => {
        setMovies(response.data)
      })
  }, [selectedGenreId])

  return (
    <main>
      <div className="container">
      <Header selectedGenre = {selectedGenre} />
   
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
