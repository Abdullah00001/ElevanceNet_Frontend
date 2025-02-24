import { FC, useState } from "react";
import FieldErrorContext from "../contexts/fieldError.context";
import IProviderProps from "../../../interfaces/providerProps.interface";

const FieldErrorProvider: FC<IProviderProps> = ({ children }) => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  return (
    <>
      <FieldErrorContext.Provider
        value={{
          firstNameError,
          setFirstNameError,
          lastNameError,
          setLastNameError,
          emailError,
          setEmailError,
          passwordError,
          setPasswordError,
          confirmPasswordError,
          setConfirmPasswordError,
        }}
      >
        {children}
      </FieldErrorContext.Provider>
    </>
  );
};

export default FieldErrorProvider;
