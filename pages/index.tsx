import {
  Cta,
  HeroSection,
  PortfolioSection,
  TestimonialSection,
  Topnav,
  ContactSection
} from "@/components";

export default function Home(): React.ReactNode {
  return (
    <>
      <Topnav />
      <main>
        <HeroSection />
        <Cta />
        <PortfolioSection />
        {/* <TestimonialSection /> */}
        <ContactSection />
      </main>
    </>
  );
}
