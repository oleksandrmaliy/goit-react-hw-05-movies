import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';

import getAllMovies from 'components/API/RequestSearch';

const HomePage = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await getAllMovies();
        const movies = response.data.results;
        console.log('then:', movies);
        setAllMovies(movies?.length ? [...movies] : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const dailyTrend = allMovies.map(({ id, title, name }) => {
    return <li key={id}>{title || name}</li>;
  });

  console.log('after:', allMovies);

  return (
    <div className={styles.home}>
      <h2>Home Page Content</h2>
      {loading && <p>...Loading</p>}
      {error && <h3>{error}</h3>}
      {(!loading || error) && <ul>{dailyTrend}</ul>}
    </div>
  );
};

export default HomePage;
