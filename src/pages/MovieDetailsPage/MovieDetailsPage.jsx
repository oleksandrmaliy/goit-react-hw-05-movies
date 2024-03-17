import { useState, useEffect, useRef, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import getSingleMovie from 'components/API/GetSingleMovie';

import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  // console.log('location', location);
  const pageBack = useRef(location.state?.from ?? '/');
  console.log(pageBack.current);
  // console.log('pageBack', location.state.from);

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
      <button onClick={() => navigate(pageBack.current)} type="button">
        Go Back to Future
      </button>

      <p className={styles.film}>{id}</p>
      <p className={styles.film}>{movie.title}</p>
      <img
        width="auto"
        height="300px"
        src={
          movie.poster_path ? (
            `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          ) : (
            <p>aaa</p>
          )
        }
        alt="Sorry, no poster"
      />

      {loading && <p>...Loading</p>}
      {error && <h3>{error}</h3>}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
