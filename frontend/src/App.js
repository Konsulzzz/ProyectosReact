import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      {}
      {router}
    </RouterProvider>
  );
}

export default App;
