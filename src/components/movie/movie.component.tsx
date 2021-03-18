import { IMovieData } from "../../App";
import "./movie.styles.css";

type MovieProps = { movie: IMovieData };

export const Movie = (props: MovieProps) => (
  <div className="movie">
    <h2> {props.movie.Title} </h2>
    {props.movie.Poster !== "N/A" ? (
      <img alt={`Poster of ${props.movie.Title}`} src={props.movie.Poster} />
    ) : (
      ""
    )}
  </div>
);
