import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getSingleMovie from 'components/API/GetSingleMovie';

import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const singleMovie = async () => {
      try {
        setLoading(true);
        const response = await getSingleMovie(id);
        setMovie(response.data ? response.data : {});
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      singleMovie();
    }
  }, [id]);

  return (
    <>
      <h2>Single Film Page Content</h2>
      <button onClick={() => navigate(-1)} type="button">
        Go Back to Future
      </button>

      <p className={styles.film}>{id}</p>
      <p className={styles.film}>{movie.title}</p>

      {loading && <p>...Loading</p>}
      {error && <h3>{error}</h3>}
    </>
  );
};

export default MovieDetailsPage;
