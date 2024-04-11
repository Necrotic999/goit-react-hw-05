import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ arrayOfMovies }) => {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      {arrayOfMovies.map((movie) => {
        return (
          <li key={movie.id} className={css.movie_item}>
            <Link
              to={`/movies/${movie.id.toString()}`}
              state={{ from: location }}
              className={css.movie_link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
