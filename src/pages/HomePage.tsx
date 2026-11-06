import { lazy, Suspense } from "react";
import HeroBannerSkeleton from "../components/HeroBanner/HeroBannerSkeleton";
import Section from "../components/Section";
const HeroBanner = lazy(() => import("../components/HeroBanner/HeroBanner"));
import CardsCaraousel from "../components/CardsCaraousel";

export default function HomePage() {
  return (
    <>
      <title>NullCents | HomePage</title>
      <h1 className="hidden read-only:visible">Home Page</h1>

      <Section idValue={"#Featured"}>
        <header className="border-base-300 border-b px-12 py-6">
          <h2 className="text-4xl font-bold">Popular</h2>
        </header>
        <Suspense fallback={<HeroBannerSkeleton />}>
          <HeroBanner />
        </Suspense>
      </Section>

      <Section idValue={"#Browse"}>
        <header className="border-base-300 border-b px-12 py-6">
          <h2 className="text-4xl font-bold">Offers</h2>
        </header>
        <CardsCaraousel />
      </Section>
    </>
  );
}
