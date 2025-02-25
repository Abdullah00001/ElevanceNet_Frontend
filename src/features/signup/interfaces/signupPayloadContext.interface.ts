import ISignupPayload from "./signupPayload.interface";

interface ISignupPayloadContext {
  signupPayload: ISignupPayload;
  setSignupPayload: React.Dispatch<React.SetStateAction<ISignupPayload>>;
}

export default ISignupPayloadContext;
