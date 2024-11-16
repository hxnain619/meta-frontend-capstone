import { Route, Routes, Router } from "react-router-dom";

import Home from "../pages/home";
import BookingForm from "../pages/booking";
import NotFound from "../pages/not-found";
import BookingConfirmed from "../pages/confirmed-booking";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<BookingForm />} />
        <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
