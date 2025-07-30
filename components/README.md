# Components Directory

This directory contains all the reusable React components for the BicaraPintar landing page.

## Component Structure

Each section of the landing page has been separated into its own component for better organization and maintainability:

### Components

- **`Navigation.tsx`** - Top navigation bar with mobile menu
- **`HeroSection.tsx`** - Main hero section with headline and chat mockup
- **`FeaturesSection.tsx`** - Features grid with icons and descriptions
- **`TestimonialsSection.tsx`** - Customer testimonials with ratings
- **`PricingSection.tsx`** - Pricing plans with highlighted popular option
- **`CTASection.tsx`** - Call-to-action section with buttons
- **`Footer.tsx`** - Footer with links and company information

### Usage

Components can be imported individually:

```tsx
import Navigation from './Navigation'
import HeroSection from './HeroSection'
```

Or using the index file for cleaner imports:

```tsx
import { Navigation, HeroSection, FeaturesSection } from '../components'
```

### Design Principles

- Each component is self-contained and reusable
- Components follow the same design system (purple-blue gradient theme)
- Responsive design is built into each component
- Hover effects and transitions are consistent across components
