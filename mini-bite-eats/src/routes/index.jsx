import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "../pages/landingpage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Details from "../pages/details";
import { useEffect } from "react";
import { setAxiosConfig } from "../utils/apis/axiosWithConfig";
import { useToken } from "../utils/context/token";
import Aboutus from "../pages/aboutus";
import Nutritions from "../pages/errorhandling/nutritions";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://65351a1fc620ba9358ec29c6.mockapi.io/api/v1");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/nutritions",
      element: token === "" ? <Nutritions /> : <Details />,
    },
    {
      path: "/about",
      element: <Aboutus />,
    },
    {
      path: "/login",
      element: token !== "" ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: token !== "" ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
