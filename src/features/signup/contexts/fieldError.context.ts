import { createContext } from "react";
import { IFieldErrorContextValue } from "../interfaces/fieldErrorContext.interface";

const FieldErrorContext = createContext<IFieldErrorContextValue | undefined>(
  undefined
);

export default FieldErrorContext;
