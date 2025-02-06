import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

};

export default App;
