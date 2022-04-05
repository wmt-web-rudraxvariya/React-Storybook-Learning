import React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  borderRadius,
  onclick,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      onClick={onclick}
      type="button"
      className={[
        "storybook-button",
        `borderRadius-${borderRadius}`,
        `storybook-button--${size}`,
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
