import { useContext } from "react";
import ISignupPayloadContext from "../interfaces/signupPayloadContext.interface";
import SignupPayloadContext from "../contexts/signupPayload.context";

const useSignupPayload = (): ISignupPayloadContext => {
  return useContext(SignupPayloadContext) as ISignupPayloadContext;
};

export default useSignupPayload;
