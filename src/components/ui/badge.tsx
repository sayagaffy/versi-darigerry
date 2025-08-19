import React from "react";
import { cn } from "@/lib/utils";
import { BadgeProps } from "@/types";

export function Badge({
  text,
  variant = "primary",
  size = "md",
  className,
}: BadgeProps & { className?: string }) {
  const baseStyles =
    "inline-flex items-center font-semibold rounded-full border";

  const variants = {
    primary: "bg-primary-600/20 text-primary-300 border-primary-600/30",
    secondary: "bg-secondary-600/20 text-secondary-300 border-secondary-600/30",
    success: "bg-green-600/20 text-green-300 border-green-600/30",
    warning: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {text}
    </span>
  );
}

// Status Badge for features
export function StatusBadge({
  status,
  className,
}: {
  status: "new" | "updated" | "beta" | "coming-soon";
  className?: string;
}) {
  const statusConfig = {
    new: { text: "NEW", variant: "success" as const },
    updated: { text: "UPDATED", variant: "primary" as const },
    beta: { text: "BETA", variant: "warning" as const },
    "coming-soon": { text: "COMING SOON", variant: "secondary" as const },
  };

  const config = statusConfig[status];

  return (
    <Badge
      text={config.text}
      variant={config.variant}
      size="sm"
      className={cn("animate-pulse", className)}
    />
  );
}

// Gradient Badge with special effects
export function GradientBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full font-semibold text-sm",
        "bg-gradient-primary text-white",
        "shadow-lg shadow-primary-500/25",
        "animate-glow",
        className
      )}
    >
      {text}
    </span>
  );
}
