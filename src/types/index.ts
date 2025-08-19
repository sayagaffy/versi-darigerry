export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  badge?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface TechComponent {
  id: string;
  name: string;
  description: string;
  type: "input" | "processing" | "integration";
  features?: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: "primary" | "secondary";
  isExternal?: boolean;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: CTAButton[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: string;
}

// Animation and UI Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

export interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export interface BadgeProps {
  text: string;
  variant?: "primary" | "secondary" | "success" | "warning";
  size?: "sm" | "md" | "lg";
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  product?: string;
}
