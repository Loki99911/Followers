import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';
// import { AppBar } from '../AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
// import { ToastContainer } from 'react-toastify';
// import AniT from '../AniT/AniT';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <ToastContainer /> */}
      {/* <AniT color={'green'} /> */}
    </Container>
  );
};
