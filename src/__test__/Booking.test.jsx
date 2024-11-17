/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router";
import Bookings from "../pages/booking";

import { fetchAPI } from "../api";

jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

describe("Bookings Component", () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  it("renders the bookings page correctly", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Bookings />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText("Book Your Table")).toBeInTheDocument();
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
  });

  it("initializes available times when the component is mounted", async () => {
    fetchAPI.mockResolvedValueOnce(["17:00", "17:30", "18:00"]);

    render(
      <HelmetProvider>
        <MemoryRouter>
          <Bookings />
        </MemoryRouter>
      </HelmetProvider>
    );
    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1));

    expect(screen.getByLabelText("Time").children.length).toBeGreaterThan(0);
  });

  it("does not call fetchAPI if the date is not selected", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Bookings />
        </MemoryRouter>
      </HelmetProvider>
    );

    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1));

    fireEvent.change(screen.getByLabelText("Date"), { target: { value: "" } });

    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1));
  });
});
