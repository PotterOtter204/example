import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyComponent from './MyComponent';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MyComponent",
    element: <MyComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);