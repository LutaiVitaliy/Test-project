import React from 'react';
import MainPage from './pages/main-page';
import Albums from './pages/main-page/albums';
import Posts from './pages/main-page/posts';
import {BrowserRouter as Router, createBrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
            {
                path: ':id/posts',
                element: <Posts />,
            },
            {
                path: ':id/albums',
                element: <Albums />,
            }
        ]
    },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;