import { Route, Routes, Router } from "react-router-dom";

import Home from "../pages/home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}