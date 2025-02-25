import { FC, FormEvent, useEffect, useState } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
import Button from "../../../components/Button";
import ConfirmPassword from "./ConfirmPassword";
import useSignupPayload from "../hooks/useSignupPayload";
import signupInputValidationSchema from "../../../schemas/signup.schema";
import useFieldError from "../hooks/useFieldError";

const SignupForm: FC = () => {
  const { signupPayload } = useSignupPayload();
  const [isValid, setIsValid] = useState<boolean>(false);
  const { setFieldError, resetFieldErrors } = useFieldError();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    resetFieldErrors();
    const fieldValidationResult =
      signupInputValidationSchema.safeParse(signupPayload);
    if (fieldValidationResult.success) {
      setIsValid(true);
    } else {
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
    }
    if (isValid) {
      console.log(signupPayload);
    }
  };
  return (
    <section className="mt-10 w-full max-w-md px-4 md:px-0">
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
