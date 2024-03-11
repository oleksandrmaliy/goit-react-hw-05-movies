import { Outlet } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';

const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
};

export default SharedLayout;
