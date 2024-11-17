import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../images/icon/home icon.svg";
import confimedImg from "../images/appointment.png";
import Meta from "../components/Meta";

const BookingConfirmed = () => {
  return (
    <>
      <Meta
        title="Little Lemon - Booking Confirmed"
        description="Welcome to Little Lemon, the best place in Chicago for fresh and delicious dishes."
        image="https://example.com/og-image.jpg"
        url="https://littlelemon.com"
      />
      <main
        className="container my-0 mx-auto p-10 h-full"
        role="main"
        aria-labelledby="booking-confirmed-title"
      >
        <h1 id="booking-confirmed-title" className="sr-only">
          Booking Confirmed - Little Lemon
        </h1>
        <div className="h-14" />
        <h2
          className="text-2xl font-bold mb-4 text-green"
          id="booking-confirmed-title"
        >
          Booking Confirmed!
        </h2>
        <p className="text-gray-600 mb-4">
          Thank you for your booking! We're looking forward to seeing you soon.
        </p>

        {/* Add an image or SVG to enhance the page */}
        <img
          src={confimedImg}
          alt="Confirmation"
          className="w-48 h-48 mx-auto mb-4"
          aria-describedby="confirmation-description"
        />

        <Link
          to="/"
          className="bg-yellow hover:bg-orange text-black font-bold py-2 px-4 rounded"
          role="button"
          aria-label="Return to Home"
        >
          Return to Home <img src={HomeIcon} alt="home" />
        </Link>
      </main>
    </>
  );
};

export default BookingConfirmed;
