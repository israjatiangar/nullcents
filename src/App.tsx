import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="border-base-300 mx-auto min-h-screen border-x md:max-w-6xl">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
