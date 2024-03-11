import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Signup from './authenticate/Register/Signup';
import Login from './authenticate/Login';

const router = createBrowserRouter([  
    {
      path: '/',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Homepage />,
    },
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
