import { useContext } from "react";
import IFieldError from "../interfaces/fieldErrorContext.interface";
import FieldErrorContext from "../contexts/fieldError.context";

const useFieldError = (): IFieldError => {
  return useContext(FieldErrorContext) as IFieldError;
};

export default useFieldError;
