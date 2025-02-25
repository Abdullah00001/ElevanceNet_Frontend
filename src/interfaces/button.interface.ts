import { ReactElement } from "react";

export interface IButton {
  style: string;
  children: string | ReactElement;
  onClick?: () => {};
  disabled?: boolean;
  type: "button" | "reset" | "submit";
}
