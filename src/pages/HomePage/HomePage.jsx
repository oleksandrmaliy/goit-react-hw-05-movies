import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

import getAllMovies from 'components/API/GetTrendingMovies';

const HomePage = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const allMovies = async () => {
      try {
        setLoading(true);
        const response = await getAllMovies();
        const movies = response.data.results;
        setAllMovies(movies?.length ? [...movies] : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    allMovies();
  }, []);

  const dailyTrend = allMovies.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  ));

  return (
    <div className={styles.home}>
      <h2>Home Page Content</h2>
      {loading && <p>...Loading</p>}
      {error && <h3>{error}</h3>}
      {(!loading || error) && <ol>{dailyTrend}</ol>}
    </div>
  );
};

export default HomePage;
