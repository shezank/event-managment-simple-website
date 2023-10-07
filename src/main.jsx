import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root/Root.jsx';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Sharde/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import EventDetails from './Pages/EventDetails/EventDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/events/:id",
        element: <EventDetails></EventDetails>,
        loader: ()=> fetch("/events.json")
      },
      {
        path: "/booking",
        element: <Booking></Booking>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
