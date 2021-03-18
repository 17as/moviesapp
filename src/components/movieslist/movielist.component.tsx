import { IMovieData } from "../../App";
import { Movie } from "../movie/movie.component";
import "./movielist.styles.css";

type MoviesProps = { movies: IMovieData[] };

export const MovieList = (props: MoviesProps) => (
  <div className="movie-list">
    {props.movies.map((movieData: IMovieData) => (
      <Movie key={movieData.imdbID} movie={movieData} />
    ))}
  </div>
);
