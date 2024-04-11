import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzE3NDkxODRhMTM2YTY1MmMwOTRiNjE4NGU5NjE2NSIsInN1YiI6IjY2MTY2YWYyY2U1ZDgyMDE3YzkwMjk2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvHLCteyVVJrvMIK8Q4EVsFo2N8zInNmdn737Jcr6FA",
  },
};

export async function fetchMovies() {
  try {
    const res = await axios.get("/trending/movie/day", options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieById(movieId) {
  try {
    const res = await axios.get(`/movie/${movieId}`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCastById(movieId) {
  try {
    const res = await axios.get(`/movie/${movieId}/credits`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviewById(movieId) {
  try {
    const res = await axios.get(`/movie/${movieId}/reviews`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesBySearchQuery(query) {
  try {
    const res = await axios.get(`/search/movie?query=${query}`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
