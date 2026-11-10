import { lazy, Suspense } from "react";
import HeroBannerSkeleton from "../components/HeroBanner/HeroBannerSkeleton";
import Section from "../components/Section";
const HeroBanner = lazy(() => import("../components/HeroBanner/HeroBanner"));
import CardsCaraousel from "../components/CardsCaraousel";

export default function HomePage() {
  function Header(title: string) {
    return (
      <header className="py-6">
        <h2 className="text-4xl font-bold">{title}</h2>
      </header>
    );
  }

  return (
    <>
      <title>NullCents | HomePage</title>
      <h1 className="hidden read-only:visible">Home Page</h1>

      <Section idValue={"#Featured"}>
        <Suspense fallback={<HeroBannerSkeleton />}>
          <HeroBanner />
        </Suspense>
      </Section>

      <Section idValue={"#Browse"}>
        {Header("Popular")}
        <CardsCaraousel />
      </Section>
    </>
  );
}
