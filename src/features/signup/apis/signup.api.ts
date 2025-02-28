import ISignupPayload from "../interfaces/signupPayload.interface";
import axiosClient from "../../../configs/axios.configs";

const signupApi = (payload: ISignupPayload) => {
  return axiosClient.post("/auth/signup", payload);
};

export default signupApi;
