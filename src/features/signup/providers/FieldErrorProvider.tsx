import { FC, useState } from "react";
import FieldErrorContext from "../contexts/fieldError.context";
import IProviderProps from "../../../interfaces/providerProps.interface";

const FieldErrorProvider: FC<IProviderProps> = ({ children }) => {
  const [firstNameError, setFirstNameError] = useState("sert");
  const [lastNameError, setLastNameError] = useState("set");
  const [emailError, setEmailError] = useState("sert");
  const [passwordError, setPasswordError] = useState("str");
  const [confirmPasswordError, setConfirmPasswordError] = useState("sert");
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
