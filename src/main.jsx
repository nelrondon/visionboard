import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BoardProvider } from "./context/BoardProvider.jsx";
import { OverlayProvider } from "./context/OverlayProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <OverlayProvider>
      <BoardProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BoardProvider>
    </OverlayProvider>
  </StrictMode>
);
