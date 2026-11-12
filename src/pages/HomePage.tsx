import { lazy, Suspense } from "react";
import HeroBannerSkeleton from "../components/HeroBanner/HeroBannerSkeleton";
import Section from "../components/Section";
const HeroBanner = lazy(() => import("../components/HeroBanner/HeroBanner"));
import CardsCaraousel from "../components/CardsCaraousel";
import FreeToGamesGrid from "../components/FreeToGamesGrid";

export default function HomePage() {
  function Header({ children }) {
    return (
      <header className="py-4">
        <h2 className="text-4xl font-bold">{children}</h2>
      </header>
    );
  }

  return (
    <>
      <title>NullCents | Home</title>
      <h1 className="hidden read-only:visible">Home Page</h1>

      <Section idValue={"Featured"}>
        <Suspense fallback={<HeroBannerSkeleton />}>
          <HeroBanner />
        </Suspense>
      </Section>

      <Section idValue={"Give_Aways"}>
        <Header>Give Aways</Header>
        <CardsCaraousel />
      </Section>

      <Section idValue={"All_Games"}>
        <Header>All Games</Header>
        <FreeToGamesGrid />
      </Section>
    </>
  );
}
