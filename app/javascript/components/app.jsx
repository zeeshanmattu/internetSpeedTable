import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Places from "./places_list";
import InternetSpeedForm from "./internet_speeds_new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Places />,
  },
  {
    path: "/new-internet-speed",
    element: <InternetSpeedForm />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
