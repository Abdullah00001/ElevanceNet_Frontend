import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import VerifyUser from "../pages/VerifyUser";
import Main from "../layouts/Main";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/verify",
    element: <VerifyUser />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
