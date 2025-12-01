import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@app/index.tsx";
import "@fontsource/geologica/400.css";
import "@fontsource/geologica/500.css";
import "@fontsource/dela-gothic-one/400.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
