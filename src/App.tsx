import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen space-y-4 md:max-w-6xl">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
