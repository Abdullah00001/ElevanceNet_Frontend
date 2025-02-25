import { useMutation } from "@tanstack/react-query";
import signup from "../apis/signup.api";

const useSignup = () => {
  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data?.success) {
        console.log("Signup Success", data.message);
      }
    },
    onError: (error) => {
      if (error) {
        console.log("Signup Error", error.message);
      }
    },
  });
};

export default useSignup;
