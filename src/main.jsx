import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
