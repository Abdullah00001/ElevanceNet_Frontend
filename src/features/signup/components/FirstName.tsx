import { FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";

const FirstName: FC = () => {
  const { firstNameError } = useFieldError();
  return (
    <>
      <div className="flex flex-col">
        <Input
          id="firstName"
          name="firstName"
          type="text"
          key={"firstName"}
          placeholder="Type your first name"
          style={`border-[1px] rounded-[1rem] ${
            firstNameError ? `border-[#F5212E]` : `border-[#ffffff]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[#F5212E]  ${
            firstNameError ? "visible" : "invisible"
          }`}
        >
          {firstNameError ? firstNameError : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default FirstName;
