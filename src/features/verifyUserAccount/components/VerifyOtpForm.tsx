import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { fieldNames } from "../../../constants/const";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
// import { useMutation } from "@tanstack/react-query";
// import verifyUserAccountService from "../services/verifyUserAccount.services";

const VerifyOtpForm: FC = () => {
  // const [otp, setOtp] = useState<string[]>(
  //   new Array(fieldNames.length).fill("")
  // );
  // const { mutate, error, isError } = useMutation({
  //   mutationKey: ["verifyUserAccount"],
  //   mutationFn: verifyUserAccountService.verify,
  // });
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    // setOtp((prev) => {
    //   const newOtp = [...prev];
    //   newOtp[index] = value;
    //   return newOtp;
    // });
    console.log(value)
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // mutate({ otp: otp.join("") });
  };
  // useEffect(() => {
  //   if (isError) {
  //     console.log(error.message);
  //   }
  // }, [isError]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-left items-center gap-2 md:gap-4 mt-5">
        {fieldNames.map((item, index) => (
          <div
            key={index}
            className="w-[50px] h-[50px] [@media(max-width:320px)]:h-[40px] md:w-[70px] md:h-[70px]"
          >
            <Input
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
              type="text"
              id={item}
              name={item}
              style={`w-full h-full text-center text-[20px] md:text-[30px] p-2 md:p-4 font-medium rounded-[8px] md:rounded-[12px] outline-none bg-transparent border border-gray-300`}
            />
          </div>
        ))}
      </div>
      <Button
        type="submit"
        style="font-bold text-[14px] md:text-[18px] bg-blue-500 px-5 md:px-7 py-2.5 md:py-3 rounded-md md:rounded-lg mt-4 md:mt-6"
      >
        Verify
      </Button>
    </form>
  );
};

export default VerifyOtpForm;
