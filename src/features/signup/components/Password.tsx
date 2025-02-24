import { FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import { text, warning } from "../../../constants/colorShade";

const Password: FC = () => {
  const { passwordError } = useFieldError();
  return (
    <>
      <div className="flex flex-col w-full">
        <Input
          id="password"
          name="password"
          type="password"
          key={"password"}
          placeholder="Type your password"
          style={`border-[1px] rounded-[1rem] w-full ${
            passwordError ? `border-[${warning}]` : `border-[${text}]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[${warning}]  ${
            passwordError ? "visible" : "invisible"
          }`}
        >
          {passwordError ? passwordError : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default Password;
