import "./loadmovies.styles.css";

type LoadMoviesProps = {
  currentPage: number;
  totalResults: number;
  loadMovies: (currentPage: number) => void;
};

export const LoadMovies = (props: LoadMoviesProps) =>
  props.currentPage < 1 + props.totalResults / 10 ? (
    <button onClick={() => props.loadMovies(props.currentPage)}>
      Load more movies
    </button>
  ) : (
    <div></div>
  );
