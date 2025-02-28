import signupApi from "../apis/signup.api";
import ISignupPayload from "../interfaces/signupPayload.interface";

const signupService = async (payload: ISignupPayload) => {
  try {
    return await signupApi(payload);
  } catch (error) {
    throw error;
  }
};

export default signupService;
