import React from "react";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  transparent = false,
  variant = "main",
  size = "medium",
  icon,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} btn-${size} ${
        disabled ? "btn-disabled" : ""
      } ${transparent ? "btn-transparent" : ""}`}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
