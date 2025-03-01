import { AxiosError } from "axios";
import signupApi from "../apis/signup.api";
import ISignupPayload from "../interfaces/signupPayload.interface";

const signupService = async (payload: ISignupPayload) => {
  try {
    const response = await signupApi(payload);
    return response.data;
  } catch (error) {
    if (error instanceof Error && error instanceof AxiosError) {
      throw error;
    }
  }
};

export default signupService;
