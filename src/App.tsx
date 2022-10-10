import { Pages } from 'pages';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import routes from 'routers/routes';
import { getRoutePath } from './utils/routes';

const App = () => (
  <Suspense fallback="Loading ...">
    <Link to={routes.homePage}>Home Page</Link>
    <Link to={getRoutePath(routes.users, 'login')}>Login</Link>
    <Pages />
  </Suspense>
);

export default App;
