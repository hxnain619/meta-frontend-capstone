import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { OccasionOptions, validateForm } from "./helper";
import { submitAPI } from "../../api";
import { useNavigate } from "react-router";

const BookingForm = ({ availableTimes, selectedDate, updateTimes }) => {
  const [formData, setFormData] = useState({
    time: "",
    guests: "",
    occasion: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData, setErrors)) {
      const response = submitAPI(formData);
      if (response) {
        navigate("/booking-confirmed");
      }
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      date: new Date(selectedDate).toISOString().split("T")[0],
    }));
  }, [selectedDate]);

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="font-bold mb-4 text-green">Book Your Table</h2>
      <div className="flex flex-row gap-2 justify-evenly">
        <Input
          label="Date"
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => updateTimes(e.target.value)}
        />

        <Select
          label="Time"
          id="time"
          options={availableTimes ?? []}
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row gap-4">
        <Input
          label="Number of Guests"
          id="guests"
          type="number"
          placeholder={"Select guests"}
          value={formData.guests}
          onChange={handleChange}
        />
        <Select
          id="occasion"
          label="Occasion"
          options={OccasionOptions}
          onChange={handleChange}
          value={formData.occasion}
        />
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mb-2">
          {/* Display all errors in a single message or list */}
          <h4>Please fix the following errors:</h4>
          <ul>
            {Object.entries(errors).map(([key, value]) => (
              <li key={key} className="body-font">
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="submit"
        className="bg-yellow hover:bg-orange text-black font-bold py-2 px-4 rounded mt-4"
        disabled={Object.keys(errors).length > 0}
        onClick={handleSubmit}
      >
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
