import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

// import MainMenu from 'components/MainMenu/MainMenu';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

// import MovieCastInfo from 'components/MovieCast/MovieCast';
// import MovieReviewsInfo from 'components/MovieReviews/MovieReviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const MovieCastInfo = lazy(() => import('components/MovieCast/MovieCast'));
const MovieReviewsInfo = lazy(() =>
  import('components/MovieReviews/MovieReviews')
);

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCastInfo />} />
            <Route path="reviews" element={<MovieReviewsInfo />} />
          </Route>
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
