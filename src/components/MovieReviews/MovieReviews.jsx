import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewById } from "../../services/api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { results } = await fetchMovieReviewById(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviews_list}>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        "We don`t have reviews for this movie"
      )}
    </>
  );
};

export default MovieReviews;
