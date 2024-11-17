import { useEffect, useReducer } from "react";

import BookingForm from "./components/BookingForm";
import Logo from "../images/icon/Logo.svg";
import Meta from "../components/Meta";
import { fetchAPI } from "../api";

const initialState = {
  selectedDate: "",
  availableTimes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, selectedDate: action.payload };
    case "UPDATE_TIMES":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

const Bookings = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initializeTimes = () => {
    const currentDate = new Date();
    const timeSlots = fetchAPI(currentDate);

    dispatch({ type: "SET_DATE", payload: currentDate.toDateString() });
    dispatch({ type: "UPDATE_TIMES", payload: timeSlots });
  };

  const updateTimes = (date) => {
    if (date.length) {
      dispatch({ type: "SET_DATE", payload: date });
      dispatch({ type: "UPDATE_TIMES", payload: fetchAPI(new Date(date)) });
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <>
      <Meta
        title="Little Lemon - Bookings"
        description="Welcome to Little Lemon, the best place in Chicago for fresh and delicious dishes."
        image="https://example.com/og-image.jpg"
        url="https://littlelemon.com"
      />
      <main
        className="container my-0 mx-auto p-10 h-full"
        role="main"
        aria-labelledby="bookings-page-title"
      >
        <h1 id="bookings-page-title" className="sr-only">
          Book a Table at Little Lemon
        </h1>
        <div className="h-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-md min-h-[500px]">
          <div
            className="bg-black p-8 pt-10 rounded-l-md"
            role="complementary"
            aria-labelledby="info-section"
          >
            {/* Text content column */}
            <p className="mb-4">
              <img
                src={Logo}
                alt="Little Lemon logo"
                className="w-2/4"
                aria-hidden="true"
              />
            </p>
            <br />
            <p
              className="text-gray-600 mb-4 text-white mt-4"
              id="info-section"
              aria-describedby="info-description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p
              className="text-gray-600 mb-4 text-white mt-4"
              id="info-description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="bg-grey rounded-r-md p-4">
            <BookingForm
              selectedDate={state.selectedDate}
              availableTimes={state.availableTimes}
              updateTimes={updateTimes}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bookings;
