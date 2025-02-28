import { ChangeEvent, FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import useSignupPayload from "../hooks/useSignupPayload";

const FirstName: FC = () => {
  const { fieldErrors } = useFieldError();
  const { setSignupPayload } = useSignupPayload();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupPayload((prev) => ({ ...prev, firstName: e.target.value }));
  };
  return (
    <>
      <div className="flex-1 flex flex-col">
        <Input
          onChange={handleChange}
          id="firstName"
          name="firstName"
          type="text"
          key={"firstName"}
          placeholder="Type your first name"
          style={`border-[1px] rounded-[1rem] ${
            fieldErrors.firstNameError ? `border-[#F5212E]` : `border-[#ffffff]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white w-full`}
        />
        <p
          className={`pl-2 text-[#F5212E]  ${
            fieldErrors.firstNameError ? "visible" : "invisible"
          }`}
        >
          {fieldErrors.firstNameError
            ? fieldErrors.firstNameError
            : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default FirstName;
