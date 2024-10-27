import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './app';
import ErrorPage from './pages/ErrorPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMePage from './pages/AboutMePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: '/PortfolioPage',
        element: <PortfolioPage />,
      },
    ],
  },
]);
console.log("Router initialized with routes:", router.routes);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
