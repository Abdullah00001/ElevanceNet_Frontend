import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
import Button from "../../../components/Button";
import ConfirmPassword from "./ConfirmPassword";
import useSignupPayload from "../hooks/useSignupPayload";
import signupInputValidationSchema from "../../../schemas/signup.schema";
import useFieldError from "../hooks/useFieldError";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const SignupForm: FC = () => {
  const { signupPayload } = useSignupPayload();
  const { setFieldError, resetFieldErrors } = useFieldError();
  const [signupFailedError, setSignupFailedError] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    resetFieldErrors();
    const fieldValidationResult =
      signupInputValidationSchema.safeParse(signupPayload);
    if (!fieldValidationResult.success) {
      const formatErrors = fieldValidationResult.error.format();
      Object.entries(formatErrors)
        .filter(([key]) => key !== "_errors")
        .map(([field, value]) => {
          let message = "";
          if (Array.isArray(value)) {
            message = value[0];
          } else if (value?._errors) {
            message = value._errors[0];
          }
          setFieldError(field, message);
        });
      return;
    }
  };
  useEffect(() => {
    console.log(signupFailedError);
  }, []);
  return (
    <section className="mt-10 w-full max-w-md px-4 md:px-0 relative">
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-5">
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
          style="mt-2 hover:opacity-90 w-full rounded-lg bg-[#1D9BF0] py-3 text-lg font-bold text-white cursor-pointer"
          type="submit"
        >
          {isPending ? <HashLoader size={20} /> : "Signup"}
        </Button>
        <h5 className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-[#1D9BF0] font-bold md:text-[18px] cursor-pointer"
            onClick={useCallback(() => {
              navigate("/");
            }, [])}
          >
            Login
          </span>
        </h5>
      </form>
    </section>
  );
};

export default SignupForm;
