import { FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import { text, warning } from "../../../constants/colorShade";

const Email: FC = () => {
  const { emailError } = useFieldError();
  return (
    <>
      <div className="flex flex-col w-full">
        <Input
          id="email"
          name="email"
          type="email"
          key={"email"}
          placeholder="Type your email"
          style={`border-[1px] rounded-[1rem] w-full ${
            emailError ? `border-[${warning}]` : `border-[${text}]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[${warning}]  ${
            emailError ? "visible" : "invisible"
          }`}
        >
          {emailError ? emailError : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default Email;
