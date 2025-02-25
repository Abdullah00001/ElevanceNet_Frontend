import { createContext } from "react";
import ISignupPayloadContext from "../interfaces/signupPayloadContext.interface";

const SignupPayloadContext = createContext<ISignupPayloadContext | undefined>(
  undefined
);

export default SignupPayloadContext;
