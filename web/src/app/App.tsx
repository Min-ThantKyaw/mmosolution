import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../features/top/pages/Landing";
import LoginPage from "../features/auth/pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}