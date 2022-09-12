import Pages from 'pages';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => (
  <Suspense fallback="Loading ...">
    <Link to="/">Home Page</Link>
    <Link to="/login">Login</Link>
    <Pages />
  </Suspense>
);

export default App;
