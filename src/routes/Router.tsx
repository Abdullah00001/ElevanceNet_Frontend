import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import VerifyUser from "../pages/VerifyUser";

const Routes = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/auth/verify",
    element: <VerifyUser />,
  },
]);

export default Routes;
