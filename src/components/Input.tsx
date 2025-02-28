import { FC } from "react";
import { IInput } from "../interfaces/input.interface";

const Input: FC<IInput> = ({
  style,
  id,
  name,
  onChange,
  placeholder,
  required = false,
  type,
  disabled = false,
}) => {
  return (
    <>
      <input
        disabled={disabled}
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        className={style}
        required={required}
        type={type}
      />
    </>
  );
};

export default Input;
