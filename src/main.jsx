import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import cartProductsLoader from "./loaders/cartProductsLoader";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch("/featuredJobs.json"),
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: cartProductsLoader,
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
