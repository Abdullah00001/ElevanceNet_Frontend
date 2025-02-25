import { ChangeEvent, FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import useSignupPayload from "../hooks/useSignupPayload";

const Email: FC = () => {
  const { fieldErrors } = useFieldError();
  const { setSignupPayload } = useSignupPayload();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupPayload((prev) => ({ ...prev, email: e.target.value }));
  };
  return (
    <>
      <div className="flex flex-col w-full">
        <Input
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          key={"email"}
          placeholder="Type your email"
          style={`border-[1px] rounded-[1rem] w-full ${
            fieldErrors.emailError ? `border-[#F5212E]` : `border-[#ffffff]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[#F5212E]  ${
            fieldErrors.emailError ? "visible" : "invisible"
          }`}
        >
          {fieldErrors.emailError ? fieldErrors.emailError : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default Email;
