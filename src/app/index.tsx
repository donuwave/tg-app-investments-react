import { Element } from "../screens/Element";
import { HomePage } from "../screens/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../screens/Profile";
import { WithProviders } from "@app/providers";

export const App = () => {
  return (
    <WithProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Element />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/payments" element={<HomePage />} />
          <Route path="/invite" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </WithProviders>
  );
};
