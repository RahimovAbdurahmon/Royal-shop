import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import CategoryByName from "./pages/CategoryByName/CategoryByName";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

const App = () => {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "category",
          element: <Category />,
          children: [
            {
              path: "categoryById/:id",
              element: <CategoryByName />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
