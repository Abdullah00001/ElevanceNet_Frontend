export interface IFieldError {
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
}

export interface IFieldErrorContextValue {
  fieldErrors: IFieldError;
  setFieldErrors: React.Dispatch<React.SetStateAction<IFieldError>>;
  setFieldError: (field: string, errorMessage: string) => void;
  resetFieldErrors:()=>void;
}
