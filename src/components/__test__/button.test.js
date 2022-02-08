import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../button";

it("should render content props properly", () => {
  render(<Button content="Hello world" />);
  expect(
    screen.getByRole("button", { name: "Hello world" })
  ).toBeInTheDocument();
});

it("should call the onClick when button clicked", () => {
  //Here createing simple mock function from jest.
  const mockOnClickFunction = jest.fn();
  render(<Button onClick={mockOnClickFunction} content="Hello world" />);
  const btn = screen.getByRole("button", { name: "Hello world" });
  // we will be using userEvent function from 'testing library' 
  // because we want to click the button but we can't click it manually 
  // so we'll use userEvet libray so that we can click or type or do something like that
  userEvent.click(btn);
  expect(mockOnClickFunction).toBeCalled();
});
