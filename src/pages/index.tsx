import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/homePage';
import { lazy } from 'react';

const LoginPage = lazy(() => import('pages/loginPage'));

const Pages = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default Pages;
