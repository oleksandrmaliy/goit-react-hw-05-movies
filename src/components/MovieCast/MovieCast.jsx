import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import styles from './MovieCast.module.css';

import getMovieCast from '../API/GetMovieCast';

const MovieCastInfo = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        setLoading(true);
        const response = await getMovieCast(id);
        console.log(response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    console.log(error, loading, cast);
    movieCast();
  }, []);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <h3>{error}</h3>}
      <p>cast cast cast</p>
    </div>
  );
};

export default MovieCastInfo;
