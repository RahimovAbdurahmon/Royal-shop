import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart/Cart";

const App = () => {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "cart",
          element: <Cart />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
