export interface IButton {
  style: string;
  children: string;
  onClick: () => {};
  disabled: boolean;
  type: "button" | "reset" | "submit";
}
