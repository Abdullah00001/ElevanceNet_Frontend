import { FC } from "react";
import VerifyOtpForm from "./VerifyOtpForm";

const Verify: FC = () => {
  return (
    <div className="w-[90%] max-w-[600px] p-4 sm:p-6 md:p-8 border  rounded-2xl">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Verify Your Account
      </h1>
      <hr className="mt-2 sm:mt-3" />
      <h5 className="text-sm sm:text-base md:text-lg mt-2">
        Please enter the 6-digit code below to complete verification.
      </h5>
      <VerifyOtpForm />
    </div>
  );
};

export default Verify;
