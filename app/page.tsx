import {
  HeroWithNavigation,
  LogoSection,
  FeaturesSection,
  ProcessSection,
  ProductShowcaseSection,
  ExampleScenariosSection,
  IndustryShowcaseSection,
  TestimonialsSection,
  PricingSection,
  CTASection,
  Footer
} from '../components'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroWithNavigation />
      <LogoSection />
      <FeaturesSection />
      <ProcessSection />
      <ProductShowcaseSection />
      <ExampleScenariosSection />
      <IndustryShowcaseSection />
      <Footer />
    </div>
  )
}
