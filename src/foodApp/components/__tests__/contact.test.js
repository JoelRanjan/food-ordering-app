import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact page tests", () => {
  //grouping test cases
  test("test contact us", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("test contact us", () => {
    render(<Contact />);

    const inpotBox = screen.getByRole("textbox");

    expect(inpotBox).toBeInTheDocument();
  });
});
