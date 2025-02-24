import { FC } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
import Button from "../../../components/Button";
import ConfirmPassword from "./ConfirmPassword";

const SignupForm: FC = () => {
  return (
    <>
      <section className=" mt-[2.5rem]">
        <form className="w-full">
          <div className="flex items-center justify-center gap-5">
            <FirstName />
            <LastName />
          </div>

          <div className="flex items-center justify-center mt-1">
            <Email />
          </div>
          <div className="flex items-center justify-center mt-1">
            <Password />
          </div>
          <div className="flex items-center justify-center mt-1">
            <ConfirmPassword />
          </div>
          <Button
            style={`text-center mt-[.5rem] rounded-[.5rem] text-[1.1rem] font-bold w-full bg-[#1D9BF0] cursor-pointer py-[.8rem]`}
            type={"submit"}
          >
            Signup
          </Button>
          <h5 className="mt-3">Already have an account?</h5>
        </form>
      </section>
    </>
  );
};

export default SignupForm;
