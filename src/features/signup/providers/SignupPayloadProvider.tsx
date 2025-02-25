import { FC, useState } from "react";
import SignupPayloadContext from "../contexts/signupPayload.context";
import ISignupPayload from "../interfaces/signupPayload.interface";
import IProviderProps from "../../../interfaces/providerProps.interface";

const SignupPayloadProvider: FC<IProviderProps> = ({ children }) => {
  const [signupPayload, setSignupPayload] = useState<ISignupPayload>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <SignupPayloadContext.Provider value={{ signupPayload, setSignupPayload }}>
      {children}
    </SignupPayloadContext.Provider>
  );
};

export default SignupPayloadProvider;
