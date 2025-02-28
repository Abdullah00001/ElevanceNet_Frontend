import { ChangeEvent } from "react";

export interface IInput {
  id: string;
  name: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  placeholder?: string;
  required?: boolean;
  style: string;
  disabled?:boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
