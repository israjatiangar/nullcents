import "./App.css";
// import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="border-base-300 mx-12 min-h-screen border-x">
        {/*<HeroBanner />*/}
      </main>
    </>
  );
}
