interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "main" | "second" | "danger"; // Different button styles
  transparent?: boolean;
  size?: "small" | "medium" | "large";
  icon?: JSX.Element; // Optional icon to display inside the button
}
