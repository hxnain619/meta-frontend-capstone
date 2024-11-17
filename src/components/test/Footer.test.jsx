import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the logo, copyright text, and all link sections", () => {
    render(<Footer />);

    const logo = screen.getByRole("img", { name: "Little Lemon Logo" });
    const copyright = screen.getByText(/© 2023 Little Lemon/i);

    const linkSections = screen.getAllByTestId("heading", { level: 2 });
    expect(linkSections.length).toBe(3);

    const contactLink = screen.getByText("Contact Info");
    const aboutLink = screen.getByText("About");
    const socialLink = screen.getByText("Social Media Links");

    expect(logo).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(socialLink).toBeInTheDocument();
  });
});
