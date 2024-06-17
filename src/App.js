import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Cart from "./components/Cart";
import Contactus from "./components/Contact";
import ErrorBoundary from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnLineStatus";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { LoggedInUserProvider } from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <div>Your Offline</div>;
  }
  return (
    //store key is mandatory here
    <Provider store = {appStore}>
      <LoggedInUserProvider>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </LoggedInUserProvider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={"Waiting for Grocery component to load"}>
            <Grocery />
          </Suspense>
        ),
        // fallback is something which will help to display before content get's loaded
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
