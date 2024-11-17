import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageLayout from "./hoc/PageLayout";
import Bookings from "./pages/booking";

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;
