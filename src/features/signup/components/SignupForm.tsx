import { FC } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
import Button from "../../../components/Button";
import ConfirmPassword from "./ConfirmPassword";

const SignupForm: FC = () => {
  return (
    <section className="mt-10 w-full max-w-md px-4 md:px-0">
      <form className="w-full space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:gap-5">
          <FirstName />
          <LastName />
        </div>
        <div>
          <Email />
        </div>
        <div>
          <Password />
        </div>
        <div>
          <ConfirmPassword />
        </div>
        <Button
          style="mt-2 w-full rounded-lg bg-[#1D9BF0] py-3 text-lg font-bold text-white cursor-pointer"
          type="submit"
        >
          Signup
        </Button>
        <h5 className="text-center text-sm text-gray-600">
          Already have an account?
        </h5>
      </form>
    </section>
  );
};

export default SignupForm;
