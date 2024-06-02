import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurentItem from "./components/RestaurentItem";
import ContextData from "./utils/contextData";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { useEffect, useState } from "react";
import appStore from "./utils/appStore";

const Grossery = lazy(() => import("./components/Grossery"));

const FoodAppContainer = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const userData = {
      name: "joel Ranjan",
    };
    setUserName(userData.name);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <ContextData.Provider value={{ name: userName }}>
          <Header />
          <Outlet />
        </ContextData.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodAppContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About name={"about Page"} />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentItem />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grossery",
        element: (
          <Suspense>
            <Grossery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
