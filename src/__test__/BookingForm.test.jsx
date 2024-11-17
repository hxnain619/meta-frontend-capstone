import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "../pages/components/BookingForm";

const mockUpdateTimes = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("BookingForm Validation", () => {
  const availableTimes = ["17:00", "17:30", "18:00"];
  const selectedDate = "2024-12-25";

  const renderForm = () =>
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={availableTimes}
          selectedDate={selectedDate}
          updateTimes={mockUpdateTimes}
        />
      </BrowserRouter>
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays validation errors when the form is submitted with invalid data", () => {
    renderForm();

    const submitButton = screen.getByRole("button", {
      name: /submit reservation/i,
    });
    fireEvent.click(submitButton);

    expect(screen.getByText("Please select a time.")).toBeInTheDocument();
    expect(
      screen.getByText("Please enter the number of guests.")
    ).toBeInTheDocument();
    expect(screen.getByText("Please select an occasion.")).toBeInTheDocument();
    expect(screen.queryByText("Please select a date.")).not.toBeInTheDocument();
  });

  it("removes validation errors when valid data is provided", () => {
    renderForm();

    const timeSelect = screen.getByLabelText("Time");
    const guestsInput = screen.getByLabelText("Number of Guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByRole("button", {
      name: /submit reservation/i,
    });

    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    fireEvent.click(submitButton);

    expect(screen.queryByText("Please select a time.")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please enter the number of guests.")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Please select an occasion.")
    ).not.toBeInTheDocument();
  });

  it("displays specific error for non-numeric guests input", () => {
    renderForm();

    const guestsInput = screen.getByLabelText("Number of Guests");
    const submitButton = screen.getByRole("button", {
      name: /submit reservation/i,
    });

    fireEvent.change(guestsInput, { target: { value: "invalid" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter the number of guests.")
    ).toBeInTheDocument();
  });
});
