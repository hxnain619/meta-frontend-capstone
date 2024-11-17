/* eslint-disable jsx-a11y/no-redundant-roles */
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

  // Update formData when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData, setErrors)) {
      const response = submitAPI(formData);
      if (response) navigate("/booking-confirmed");
    }
  };

  // Synchronize date from selectedDate prop
  useEffect(() => {
    if (selectedDate) {
      const parsedDate = new Date(selectedDate);
      if (!isNaN(parsedDate)) {
        setFormData((prev) => ({
          ...prev,
          date: parsedDate.toISOString().split("T")[0],
        }));
      }
    }
  }, [selectedDate]);

  return (
    <form role="form" onSubmit={handleSubmit} className="p-4">
      <h2 className="font-bold mb-4 text-green">Book Your Table</h2>
      <div className="flex flex-row gap-2 justify-evenly">
        <Input
          label="Date"
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => {
            handleChange(e);
            updateTimes(e.target.value);
          }}
          aria-required="true"
          aria-invalid={!!errors.date}
          aria-describedby="date-error"
        />
        {errors.date && (
          <p id="date-error" className="text-red-500 text-sm">
            {errors.date}
          </p>
        )}

        <Select
          label="Time"
          id="time"
          options={availableTimes ?? []}
          value={formData.time}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.time}
          aria-describedby="time-error"
        />
        {errors.time && (
          <p id="time-error" className="text-red-500 text-sm">
            {errors.time}
          </p>
        )}
      </div>
      <div className="flex flex-row gap-4">
        <Input
          label="Number of Guests"
          id="guests"
          type="number"
          placeholder="Select guests"
          value={formData.guests}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.guests}
          aria-describedby="guests-error"
        />
        {errors.guests && (
          <p id="guests-error" className="text-red-500 text-sm">
            {errors.guests}
          </p>
        )}

        <Select
          id="occasion"
          label="Occasion"
          options={OccasionOptions}
          value={formData.occasion}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.occasion}
          aria-describedby="occasion-error"
        />
        {errors.occasion && (
          <p id="occasion-error" className="text-red-500 text-sm">
            {errors.occasion}
          </p>
        )}
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mb-2">
          <h4 data-testid="error">Please fix the following errors:</h4>
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
      >
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
