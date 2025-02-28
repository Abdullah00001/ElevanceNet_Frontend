import { FC, useState } from "react";
import FieldErrorContext from "../contexts/fieldError.context";
import IProviderProps from "../../../interfaces/providerProps.interface";
import { IFieldError } from "../interfaces/fieldErrorContext.interface";

const FieldErrorProvider: FC<IProviderProps> = ({ children }) => {
  const [fieldErrors, setFieldErrors] = useState<IFieldError>({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const setFieldError = (field: string, errorMessage: string) => {
    if (field === "firstName") {
      setFieldErrors((prev) => ({ ...prev, firstNameError: errorMessage }));
    } else if (field === "lastName") {
      setFieldErrors((prev) => ({ ...prev, lastNameError: errorMessage }));
    } else if (field === "email") {
      setFieldErrors((prev) => ({ ...prev, emailError: errorMessage }));
    } else if (field === "password") {
      setFieldErrors((prev) => ({ ...prev, passwordError: errorMessage }));
    }
  };
  const resetFieldErrors = () => {
    setFieldErrors({
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
  };
  return (
    <>
      <FieldErrorContext.Provider
        value={{
          fieldErrors,
          setFieldErrors,
          setFieldError,
          resetFieldErrors,
        }}
      >
        {children}
      </FieldErrorContext.Provider>
    </>
  );
};

export default FieldErrorProvider;
