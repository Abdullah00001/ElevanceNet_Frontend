import { FC } from "react";
import PageTitle from "../utils/PageTitle";

const Signup: FC = () => {
  return (
    <>
      <PageTitle key={"signup"} title="Signup" description="its signup page" />
      <div className="text-5xl">Signup</div>
    </>
  );
};

export default Signup;
