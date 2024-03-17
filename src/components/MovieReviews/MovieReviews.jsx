import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import styles from './MovieReviews.module.css';

import getMovieReviews from '../API/GetMovieReviews';

const MovieReviewsInfo = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        setLoading(true);
        const response = await getMovieReviews(id);
        console.log(response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    console.log(error, loading, reviews);
    movieReviews();
  }, []);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <h3>{error}</h3>}
      <p>reviews reviews reviews</p>
      <p>reviews reviews reviews</p>
    </div>
  );
};

export default MovieReviewsInfo;
