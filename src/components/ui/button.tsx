import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  external?: boolean;
  glow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  href,
  external = false,
  glow = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-100 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 active:scale-95",
    secondary:
      "bg-secondary-600 text-white hover:bg-secondary-500 hover:scale-105 active:scale-95",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white hover:scale-105 active:scale-95",
    ghost:
      "text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    glow && "glow-effect",
    loading && "cursor-wait",
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="mr-2 -ml-1 w-4 h-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}

// Specialized CTA Button
export function CTAButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      variant="primary"
      size="lg"
      glow
      className={cn("font-bold tracking-wide", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

// Icon Button
export function IconButton({
  icon,
  className,
  ...props
}: Omit<ButtonProps, "children"> & { icon: React.ReactNode }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("p-0 w-10 h-10", className)}
      {...props}
    >
      {icon}
    </Button>
  );
}
