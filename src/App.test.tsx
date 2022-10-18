import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });
  /*
  const title = screen.getByTestId('title-test');
  
*/
  it('should have title "Mi DUI es valido?"', () => {
    render(<App />);
    const title = screen.getByTestId("title-test");
    expect(title).toBeInTheDocument;
    //expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Mi DUI es valido?");
  });

  it("should have an input text", () => {
    render(<App />);
    const duiInput = screen.getByTestId("input-dui");
    expect(duiInput).toBeInTheDocument();
    expect(duiInput).toHaveAttribute("type", "text");
  });

  it('should have a button with text "Validar"', () => {
    render(<App />);
    const button = screen.getByTestId("button-form");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Validar");
  });
});
