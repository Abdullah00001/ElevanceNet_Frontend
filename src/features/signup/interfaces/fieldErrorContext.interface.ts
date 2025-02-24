interface IFieldError {
  firstNameError?: string;
  setFirstNameError?: (error: string) => void;
  lastNameError?: string;
  setLastNameError?: (error: string) => void;
  emailError?: string;
  setEmailError?: (error: string) => void;
  passwordError?: string;
  setPasswordError?: (error: string) => void;
  confirmPasswordError?: string;
  setConfirmPasswordError?: (error: string) => void;
}
export default IFieldError;
