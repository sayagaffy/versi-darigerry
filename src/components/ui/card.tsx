import React from "react";
import { cn } from "@/lib/utils";
import { CardProps } from "@/types";

interface ExtendedCardProps extends CardProps {
  variant?: "default" | "gradient" | "glass";
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  title,
  description,
  children,
  className,
  variant = "gradient",
  hover = true,
  glow = false,
  animated = true,
}: ExtendedCardProps) {
  const cardVariants = {
    default: "bg-dark-200 border border-dark-300",
    gradient: "gradient-card",
    glass: "backdrop-blur-custom bg-white/5 border border-white/10",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl transition-all duration-500",
        cardVariants[variant],
        hover && "hover:scale-105 hover:shadow-2xl",
        glow && "glow-effect",
        animated && "animate-on-scroll",
        className
      )}
    >
      {variant === "gradient" && (
        <div className="gradient-card-content">
          <CardContent title={title} description={description}>
            {children}
          </CardContent>
        </div>
      )}

      {variant !== "gradient" && (
        <div className="p-6 h-full">
          <CardContent title={title} description={description}>
            {children}
          </CardContent>
        </div>
      )}
    </div>
  );
}

function CardContent({
  title,
  description,
  children,
}: Pick<CardProps, "title" | "description" | "children">) {
  return (
    <>
      <h3 className="mb-3 font-bold text-white text-xl text-balance">
        {title}
      </h3>
      <p className="mb-4 text-gray-300 text-balance leading-relaxed">
        {description}
      </p>
      {children}
    </>
  );
}

// Product Card Specialized Component
export function ProductCard({
  product,
  className,
}: {
  product: any;
  className?: string;
}) {
  return (
    <Card
      title={product.name}
      description={product.description}
      className={cn("group relative overflow-hidden", className)}
      variant="gradient"
      hover
      glow
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "flex justify-center items-center rounded-xl w-12 h-12 text-2xl",
            product.gradient
          )}
        >
          {product.icon}
        </div>
        {product.badge && (
          <span className="bg-primary-600/20 px-3 py-1 border border-primary-600/30 rounded-full font-semibold text-primary-300 text-xs">
            {product.badge}
          </span>
        )}
      </div>

      <ul className="space-y-2">
        {product.features.map((feature: string, index: number) => (
          <li
            key={index}
            className="flex items-start gap-2 text-gray-300 text-sm"
          >
            <span className="flex-shrink-0 bg-primary-500 mt-2 rounded-full w-1.5 h-1.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

// Feature Card Component
export function FeatureCard({
  feature,
  className,
}: {
  feature: any;
  className?: string;
}) {
  return (
    <Card
      title={feature.title}
      description={feature.description}
      className={cn("text-center", className)}
      variant="gradient"
      hover
    >
      <div className="flex justify-center items-center bg-gradient-primary mx-auto mb-4 rounded-2xl w-16 h-16 text-white text-3xl">
        {feature.icon}
      </div>

      {feature.details && (
        <ul className="space-y-1 mt-4 text-gray-400 text-sm">
          {feature.details.map((detail: string, index: number) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}
