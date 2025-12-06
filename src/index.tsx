import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/geologica/400.css";
import "@fontsource/geologica/500.css";
import "@fontsource/dela-gothic-one/400.css";
import { App } from "./app";
import "./shared/config/i18n";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
