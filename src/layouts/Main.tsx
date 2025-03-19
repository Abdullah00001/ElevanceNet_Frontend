import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const Main: FC = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default Main;
