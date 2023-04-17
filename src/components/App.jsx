import React from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import Tweets from 'pages/Tweets/Tweets';
import Home from 'pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
