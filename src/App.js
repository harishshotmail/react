import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Cart from "./components/Cart";
import Contactus from "./components/Contact";
import ErrorBoundary from "./components/Error";
import Menu from "./components/Menu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary/>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "aboutus",
        element: <Aboutus />
      },
      {
        path: "contactus",
        element: <Contactus />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "restaurant/:resId",
        element: <Menu/>
      }
    ],
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
