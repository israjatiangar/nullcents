import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Error404Page from "./pages/Error404Page";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

const FavouritePage = lazy(() => import("./pages/FavouritePage")),
  FreeToGamesPage = lazy(() => import("./pages/FreeToGamesPage")),
  GamerPowerPage = lazy(() => import("./pages/GamerPowerPage"));

export default function App() {
  document.querySelector("html")!.className =
    "motion-safe:scroll-smooth scrollbar-gutter-stable";
  return (
    <>
      <Navbar />
      <main className="my-4 min-h-screen space-y-4 *:px-2 md:mx-auto md:max-w-6xl">
        <Suspense>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="/freeToPlay" element={<FreeToGamesPage />} />
            <Route path="/giveaways" element={<GamerPowerPage />} />
            <Route path="/*" element={<Error404Page />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
