import { useState, useEffect } from "react";
import { fetchMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { results } = await fetchMovies();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <MovieList arrayOfMovies={movies} movies={movies} />
    </>
  );
};

export default HomePage;
