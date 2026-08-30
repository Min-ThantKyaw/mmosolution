import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../features/top/pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}