import { createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Main from '../layout/Main';
import App from '../App';
import Contact from '../components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
