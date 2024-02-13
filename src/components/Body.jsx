import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Body = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "home", element: <Browse /> },
    { path: "browse", element: <Browse /> },
    { path: "login", element: <Login /> },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={routes}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
};

export default Body;
