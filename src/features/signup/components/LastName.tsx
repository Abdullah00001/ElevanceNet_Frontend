import { FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import { text, warning } from "../../../constants/colorShade";

const LastName: FC = () => {
  const { lastNameError } = useFieldError();
  return (
    <>
      <div className="flex flex-col">
        <Input
          id="lastName"
          name="lastName"
          type="text"
          key={"lastName"}
          placeholder="Type your last name"
          style={`border-[1px] rounded-[1rem] ${
            lastNameError ? `border-[${warning}]` : `border-[${text}]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white `}
        />
        <p
          className={`pl-2 text-[${warning}]  ${
            lastNameError ? "visible" : "invisible"
          }`}
        >
          {lastNameError ? lastNameError : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default LastName;
