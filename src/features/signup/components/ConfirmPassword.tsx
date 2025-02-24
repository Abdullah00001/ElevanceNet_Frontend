import { FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import { text, warning } from "../../../constants/colorShade";

const ConfirmPassword: FC = () => {
  const { confirmPasswordError } = useFieldError();
  return (
    <>
      <div className="flex flex-col w-full">
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          key={"confirmPassword"}
          placeholder="Re type your password"
          style={`border-[1px] rounded-[1rem] w-full ${
            confirmPasswordError ? `border-[${warning}]` : `border-[${text}]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[${warning}]  ${
            confirmPasswordError ? "visible" : "invisible"
          }`}
        >
          {confirmPasswordError ? confirmPasswordError : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default ConfirmPassword;
