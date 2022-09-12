import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/homePage';
import routes from 'routers/routes';
import { lazy } from 'react';

const LoginPage = lazy(() => import('pages/loginPage'));

const Pages = () => (
  <Routes>
    <Route path={routes.homePage} element={<HomePage />} />
    <Route path={routes.users.index}>
      <Route path={routes.users.login} element={<LoginPage />} />
    </Route>
  </Routes>
);

export { Pages };
