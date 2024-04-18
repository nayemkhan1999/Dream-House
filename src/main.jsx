import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registar from "./Components/Registar/Registar";
import Root from "./Components/Root/Root";
import SeeMoreDetails from "./Components/SeeMoreDetails/SeeMoreDetails";
import User from "./Components/User/User";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/seeMoreDetails/:id",
        element: <SeeMoreDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/registar",
        element: <Registar/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
