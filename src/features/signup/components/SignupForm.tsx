import { FC, FormEvent, useEffect, useState } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Email from "./Email";
import Password from "./Password";
import Button from "../../../components/Button";
import ConfirmPassword from "./ConfirmPassword";
import useSignupPayload from "../hooks/useSignupPayload";
import signupInputValidationSchema from "../../../schemas/signup.schema";
import useFieldError from "../hooks/useFieldError";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import signupService from "../services/signup.service";
import { HashLoader } from "react-spinners";
import { AxiosError } from "axios";
import { FaExclamationCircle } from "react-icons/fa";

const SignupForm: FC = () => {
  const { signupPayload } = useSignupPayload();
  const { setFieldError, resetFieldErrors } = useFieldError();
  const [serverError, setServerError] = useState<string>("");
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isError, isPending, data, error, mutate } = useMutation({
    mutationFn: signupService,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    resetFieldErrors();
    const fieldValidationResult =
      signupInputValidationSchema.safeParse(signupPayload);
    if (!fieldValidationResult.success) {
      const formatErrors = fieldValidationResult.error.format();
      Object.entries(formatErrors)
        .filter(([key]) => key !== "_errors")
        .map(([field, value]) => {
          let message = "";
          if (Array.isArray(value)) {
            message = value[0];
          } else if (value?._errors) {
            message = value._errors[0];
          }
          setFieldError(field, message);
        });
      return;
    }

    mutate(signupPayload);
  };

  if (data?.success) {
    navigate("/auth/verify");
  }

  const closeModal = () => {
    setShowErrorModal(false);
  };

  useEffect(() => {
    if (isError) {
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          setShowErrorModal(true);
          const serverErrorMessage = error.response?.data.message;
          if (typeof serverErrorMessage === "string") {
            setServerError(serverErrorMessage);
          } else {
            setServerError("An unexpected error occurred.");
          }
        }
      }
    }
  }, [isError, error]);

  return (
    <>
      <section className="mt-10 w-full max-w-md px-4 md:px-0 relative">
        <form className="w-full space-y-2" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-5">
            <FirstName />
            <LastName />
          </div>
          <div>
            <Email />
          </div>
          <div>
            <Password />
          </div>
          <div>
            <ConfirmPassword />
          </div>
          <Button
            style="mt-2 hover:opacity-90 w-full rounded-lg bg-[#1D9BF0] py-3 text-lg font-bold text-white cursor-pointer"
            type="submit"
          >
            {isPending ? <HashLoader size={20} /> : "Signup"}
          </Button>
          <h5 className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span
              className="text-[#1D9BF0] font-bold md:text-[18px] cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </span>
          </h5>
        </form>
      </section>
      {showErrorModal && serverError && (
        <>
          <section className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-10"></section>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-11/12 sm:w-80 md:w-96 text-center border border-[#ffffff]">
              <FaExclamationCircle className="text-[#F5212E] text-4xl mx-auto" />
              <h2 className="text-xl sm:text-2xl font-bold mt-4">Oops Error</h2>
              <p className="text-[#F5212E] mt-2 text-sm sm:text-base">
                {serverError}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-[#1D9BF0] text-white px-4 py-2 rounded-lg hover:opacity-90 cursor-pointer transition"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignupForm;
