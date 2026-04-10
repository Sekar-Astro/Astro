import { type ButtonHTMLAttributes, type ReactElement, type ReactNode, cloneElement } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "icon" | "sm" | "md" | "lg";
  className?: string;
  nativeButton?: boolean;
  render?: ReactElement;
  children?: ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  ghost: "bg-transparent text-secondary hover:bg-secondary/10",
  outline: "border border-border bg-transparent text-secondary hover:bg-secondary/10",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  icon: "h-10 w-10 px-2",
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-14 px-6 text-base",
};

export const Button = ({
  variant = "default",
  size = "md",
  className,
  nativeButton = true,
  render,
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  const buttonClasses = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (!nativeButton && render) {
    return cloneElement(render, {
      className: clsx(buttonClasses, render.props.className),
      onClick: props.onClick,
      children,
    });
  }

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
