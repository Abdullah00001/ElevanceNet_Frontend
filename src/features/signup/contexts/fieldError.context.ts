import { createContext } from "react";
import IFieldError from "../interfaces/fieldErrorContext.interface";

const FieldErrorContext = createContext<IFieldError | undefined>(undefined);

export default FieldErrorContext;
