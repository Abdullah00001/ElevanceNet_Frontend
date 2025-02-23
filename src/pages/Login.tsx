import { FC } from "react";
import PageTitle from "../utils/PageTitle";

const Login: FC = () => {
  return (
    <>
      <PageTitle key={"login"} title="Login" description="Its login page" />
      <div className="text-4xl text-red-500">Login</div>
    </>
  );
};

export default Login;
