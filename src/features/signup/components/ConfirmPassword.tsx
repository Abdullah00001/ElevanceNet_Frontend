import { ChangeEvent, FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import useSignupPayload from "../hooks/useSignupPayload";

const ConfirmPassword: FC = () => {
  const { fieldErrors, setFieldErrors } = useFieldError();
  const { signupPayload } = useSignupPayload();
  const password = signupPayload.password;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    if (password !== confirmPassword) {
      setFieldErrors((prev) => ({
        ...prev,
        confirmPasswordError: "Password didnt matched",
      }));
    } else {
      setFieldErrors((prev) => ({ ...prev, confirmPasswordError: "" }));
    }
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <Input
          disabled={!password}
          onChange={handleChange}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          key={"confirmPassword"}
          placeholder="Re type your password"
          style={`border-[1px] rounded-[1rem] w-full ${
            fieldErrors.confirmPasswordError
              ? `border-[#F5212E]`
              : `border-[#ffffff]`
          } ${
            !password ? "opacity-30 cursor-not-allowed" : ""
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[#F5212E]  ${
            fieldErrors.confirmPasswordError ? "visible" : "invisible"
          }`}
        >
          {fieldErrors.confirmPasswordError
            ? fieldErrors.confirmPasswordError
            : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default ConfirmPassword;
