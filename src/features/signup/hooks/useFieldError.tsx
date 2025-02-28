import { useContext } from "react";
import { IFieldErrorContextValue } from "../interfaces/fieldErrorContext.interface";
import FieldErrorContext from "../contexts/fieldError.context";

const useFieldError = (): IFieldErrorContextValue => {
  return useContext(FieldErrorContext) as IFieldErrorContextValue;
};

export default useFieldError;
