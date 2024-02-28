import { Routes, Route } from 'react-router-dom';

import MainMenu from './MainMenu/MainMenu';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};

// const APIKEY = 4eee553d147a6af33b8e479e9282e0a2;
