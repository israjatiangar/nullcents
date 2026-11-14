import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import FavouritePage from "./pages/FavouritePage";
import Error404Page from "./pages/Error404Page";
export default function App() {
  document.querySelector("html")!.className =
    "motion-safe:scroll-smooth scrollbar-gutter-stable";
  return (
    <>
      <Navbar />
      <main className="my-4 min-h-screen space-y-4 *:px-2 md:mx-auto md:max-w-6xl">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
