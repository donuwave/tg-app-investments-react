import { Element } from "../screens/Element";
import { HomePage } from "../screens/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../screens/Profile";
import { Deposit } from "../screens/Deposit";
import { Invite } from "../screens/Invite";
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
          <Route path="/invite" element={<Invite />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </BrowserRouter>
    </WithProviders>
  );
};
