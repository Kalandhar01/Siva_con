import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  disabled?: boolean;
  "aria-label"?: string;
};

const toCssSize = (value: number | string | undefined, fallback: number) =>
  typeof value === "number" ? `${value}px` : value ?? `${fallback}px`;

const baseClasses = "octf-btn";

export default function Button({
  children = "View Projects",
  href,
  onClick,
  width = 150,
  height = 50,
  className = "",
  style,
  type = "button",
  target,
  rel,
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    width: toCssSize(width, 150),
    height: toCssSize(height, 50),
    ...style,
  };

  const classes = `${baseClasses} ${
    disabled ? "cursor-not-allowed opacity-[0.55]" : "cursor-pointer"
  } ${className}`.trim();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };


  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={buttonStyle}
        onClick={handleClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
    </button>
  );
}
