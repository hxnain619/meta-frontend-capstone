import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import PageLayout from "./PageLayout";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
  useParams: () => ({}),
}));

describe("PageLayout", () => {
  it("renders the Navbar and Footer", () => {
    render(
      <MemoryRouter>
        <PageLayout>
          <main>Child Content</main>
        </PageLayout>
      </MemoryRouter>
    );

    const navbar = screen.getByTestId("nav");
    const footer = screen.getByTestId("footer");

    expect(navbar).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
