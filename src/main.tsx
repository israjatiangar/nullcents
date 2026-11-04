import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import GamesListContextProvider from "./contexts/GamesListContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GamesListContextProvider>
        <App />
      </GamesListContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
