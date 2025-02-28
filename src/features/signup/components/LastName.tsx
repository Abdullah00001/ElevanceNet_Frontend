import { ChangeEvent, FC } from "react";
import Input from "../../../components/Input";
import useFieldError from "../hooks/useFieldError";
import useSignupPayload from "../hooks/useSignupPayload";

const LastName: FC = () => {
  const { fieldErrors } = useFieldError();
  const { setSignupPayload } = useSignupPayload();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupPayload((prev) => ({ ...prev, lastName: e.target.value }));
  };
  return (
    <>
      <div className="flex-1 flex flex-col">
        <Input
          onChange={handleChange}
          id="lastName"
          name="lastName"
          type="text"
          key={"lastName"}
          placeholder="Type your last name"
          style={`border-[1px] rounded-[1rem] ${
            fieldErrors.lastNameError ? `border-[#F5212E]` : `border-[#ffffff]`
          } text-[1rem] px-[1.2rem] py-[1rem] placeholder-white w-full`}
        />
        <p
          className={`pl-2 text-[#F5212E]  ${
            fieldErrors.lastNameError ? "visible" : "invisible"
          }`}
        >
          {fieldErrors.lastNameError
            ? fieldErrors.lastNameError
            : "Placeholder"}
        </p>
      </div>
    </>
  );
};

export default LastName;
