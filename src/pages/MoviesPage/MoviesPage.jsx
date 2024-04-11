import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { fetchMoviesBySearchQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";
  console.log(queryParam);
  useEffect(() => {
    async function getData() {
      try {
        if (queryParam) {
          const { results } = await fetchMoviesBySearchQuery(queryParam);
          setSearchMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, [queryParam]);

  const initialValues = {
    query: "",
  };

  function handleSubmit(data, option) {
    if (!data.query.trim()) return;
    setSearchQuery(data.query);
    setSearchParams({ query: data.query });
    option.resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            placeholder="search movie"
          />
          <button className={css.form_btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <MovieList arrayOfMovies={searchMovies} />
    </>
  );
};

export default MoviesPage;
