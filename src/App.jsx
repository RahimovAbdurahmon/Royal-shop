import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const App = () => {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{}],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
