import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import Tweets from 'pages/Tweets/Tweets';
import Home from 'pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  // const isUserFetching = useSelector(getIsUserFetching);

  // useEffect(() => {
  // }, []);

  return (
    // isUserFetching ? (
    //   <MainLoader />
    // ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
