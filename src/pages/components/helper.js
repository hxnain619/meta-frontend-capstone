export const OccasionOptions = ["Birthday", "Anniversary"];

export const validateForm = (formData, setErrors) => {
  const newErrors = {};
  if (!formData.time) {
    newErrors.time = "Please select a time.";
  }
  if (!formData.guests) {
    newErrors.guests = "Please enter the number of guests.";
  } else if (isNaN(formData.guests)) {
    newErrors.guests = "Please enter a valid number of guests.";
  }
  if (!formData.occasion) {
    newErrors.occasion = "Please select an occasion.";
  }
  if (!formData.date) {
    newErrors.date = "Please select a date.";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // Return true if no errors
};
