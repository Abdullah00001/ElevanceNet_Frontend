import { forwardRef } from "react";
import { IInput } from "../interfaces/input.interface";

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      style,
      id,
      name,
      onChange,
      placeholder,
      required = false,
      type,
      disabled = false,
      maxLength,
      onKeyDown,
      value,
      onPaste,
    },
    ref
  ) => {
    return (
      <input
        disabled={disabled}
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        className={style}
        required={required}
        type={type}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        ref={ref}
        value={value}
        onPaste={onPaste}
      />
    );
  }
);

export default Input;
