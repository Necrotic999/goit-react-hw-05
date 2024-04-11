import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCastById } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { cast } = await fetchMovieCastById(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [movieId]);
  return (
    <ul className={css.cast_list}>
      {cast.map((actor) => {
        return (
          <li className={css.cast_item} key={actor.id}>
            {
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} photo`}
                />
                <div className={css.cast_info}>
                  <h4 className={css.cast_name}>{actor.name}</h4>
                  <p>{actor.character}</p>
                </div>
              </>
            }
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
