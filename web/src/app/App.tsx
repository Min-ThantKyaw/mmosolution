import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../features/top/pages/Landing";
import ProtectedRoute from "../routes/ProtectedRoute";

import Home from "../features/user/home/pages/Home";
import Library from "../features/user/library/pages/Library";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>

      <Routes>
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/dashboard" element={<Home />} />
          <Route path="/library" element={<Library />} /> */}
        </Route>
      </Routes>

      <Routes>
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          {/* <Route path="/admin" element={} /> */}
        </Route>
      </Routes>

      <Routes>
        <Route element={<ProtectedRoute allowedRoles={["WRITER"]} />}>
          {/* <Route path="/writer" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}