import { ChangeEvent, useState, FunctionComponent } from "react";

import { MovieList } from "./components/movieslist/movielist.component";
import { SearchBar } from "./components/search-bar/search-bar.component";
import { LoadMovies } from "./components/loadmovies/loadmovies.component";

import "./App.css";

export interface IMovieData {
  Title: string;
  Poster: string;
  imdbID: string;
}
const App: FunctionComponent = () => {
  const [movies, setMovies] = useState<Array<IMovieData>>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onSearchSubmitted = (event: MouseEvent) => {
    let pageNumber: number = 1;
    setCurrentPage(pageNumber);
    setMovies([]);
    setTotalResults(0);
    loadMovies(pageNumber);
  };

  const loadMovies = async (pageNumber: number) => {
    setErrorText("");
    await fetch(
      "http://www.omdbapi.com/?apikey=52447dd4&s=" +
        searchText +
        "&page=" +
        pageNumber
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.Search) {
          if (pageNumber === 1) {
            setMovies([...result.Search]);
            setTotalResults(result.totalResults);
          } else {
            setMovies([...movies, ...result.Search]);
          }
        }
        setCurrentPage(pageNumber + 1);
        if (result.Error) setErrorText(result.Error);
      })
      .catch((error) => {
        setErrorText(
          "Something unexpected happened. We apologies for the inconvenience. Please try again."
        );
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Movies Database</h1>
      <SearchBar
        onSearchChange={onSearchChange}
        onSearchSubmitted={onSearchSubmitted}
      />
      <p className="error">{errorText}</p>
      <MovieList movies={movies} />
      <LoadMovies
        currentPage={currentPage}
        totalResults={totalResults}
        loadMovies={loadMovies}
      />
    </div>
  );
};

export default App;
