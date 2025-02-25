import axios from "axios";
import axiosInstance from "../../../configs/axios.configs";
import ISignupPayload from "../interfaces/signupPayload.interface";
import IApiResponse from "../../../interfaces/apiResponse.interface";

const signup = async (
  payload: ISignupPayload
): Promise<IApiResponse<any> | undefined> => {
  try {
    const response = await axiosInstance.post<IApiResponse<any>>(
      "/auth/signup",
      payload
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data.message;
      }
    }
  }
};

export default signup;
