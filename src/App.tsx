import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-screen flex-col gap-4 md:max-w-6xl">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
