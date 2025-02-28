import { FC } from "react";
import { IButton } from "../interfaces/button.interface";

const Button: FC<IButton> = ({
  children,
  onClick,
  style,
  disabled = false,
  type = "button",
}) => {
  return (
    <>
      <button
        type={type}
        className={style}
        onClick={onClick}
        disabled={disabled}
        nonce=""
      >
        {children}
      </button>
    </>
  );
};

export default Button;
