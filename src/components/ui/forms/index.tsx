import React from "react";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  onKeyUp,
  placeholder = "",
  label,
  id,
  name,
  disabled = false,
  required = false,
  className = "",
  size = "medium",
  hasError = false,
  errorMessage = "",
}) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        required={required}
        className={`input-field input-field-${size} ${
          hasError && "border-red-500 "
        }`}
      />
      {hasError && <span className={`text-red-400`}>{errorMessage}</span>}
    </div>
  );
};
