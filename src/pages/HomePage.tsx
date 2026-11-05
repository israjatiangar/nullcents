import { lazy, Suspense } from "react";
import CardsCaraousel from "../components/CardsCaraousel";
import HeroBannerSkeleton from "../components/HeroBanner/HeroBannerSkeleton";
import Section from "../components/Section";
const HeroBanner = lazy(() => import("../components/HeroBanner/HeroBanner"));
export default function HomePage() {
  return (
    <>
      <title>NullCents | HomePage</title>
      <h1 className="hidden read-only:visible">Home Page</h1>
      <Section>
        <Suspense fallback={<HeroBannerSkeleton />}>
          <HeroBanner />
        </Suspense>
      </Section>
      <Section>
        <CardsCaraousel />
      </Section>
    </>
  );
}
