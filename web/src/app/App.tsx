import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../features/top/pages/Landing";
import ProtectedRoute from "../routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={} /> */}
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        {/* <Route path="/admin" element={} /> */}
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["WRITER"]} />}>
        {/* <Route path="/writer" element={} /> */}
      </Route>
    </BrowserRouter>
  );
}