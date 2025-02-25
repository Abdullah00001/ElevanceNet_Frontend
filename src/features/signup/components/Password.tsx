import { ChangeEvent, FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import useSignupPayload from "../hooks/useSignupPayload";

const Password: FC = () => {
  const { fieldErrors } = useFieldError();
  const { setSignupPayload } = useSignupPayload();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupPayload((prev) => ({ ...prev, password: e.target.value }));
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <Input
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          key={"password"}
          placeholder="Type your password"
          style={`border-[1px] rounded-[1rem] w-full ${
            fieldErrors.passwordError ? `border-[#F5212E]` : `border-[#ffffff]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[#F5212E]  ${
            fieldErrors.passwordError ? "visible" : "invisible"
          }`}
        >
          {fieldErrors.passwordError
            ? fieldErrors.passwordError
            : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default Password;
