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

const baseClasses = [
  "group relative inline-flex max-w-full items-center justify-center",
  "border-0 rounded-none bg-[#222222] px-[12px]",
  "text-center text-[10px] font-semibold uppercase leading-none tracking-[0.5px] text-white! no-underline",
  "whitespace-nowrap transition-colors duration-300 hover:bg-black",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#222222]",
  "[font-family:var(--font-titillium)]",
].join(" ");

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

  const decorativeLines = (
    <>
      {/* Vertical accent: starts below the top edge, ends 18px past the bottom. */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-[6px] right-[-8px] block h-[calc(100%_+_6px)] w-[1px] scale-x-100 scale-y-100 origin-bottom bg-[#222222] transition-all duration-300 ease-out group-hover:scale-y-0"
      />
      {/* Horizontal accent: starts inside the left edge and crosses the vertical line. */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-[-6px] left-[6px] right-[-16px] block h-[1px] scale-x-100 scale-y-100 origin-right bg-[#222222] transition-all duration-300 ease-out group-hover:scale-x-0"
      />
    </>
  );

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
        {decorativeLines}
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
      {decorativeLines}
    </button>
  );
}
