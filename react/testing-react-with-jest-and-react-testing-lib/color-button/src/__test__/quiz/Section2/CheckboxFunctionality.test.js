import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxFunctionality from "../../../quiz/Section2/CheckboxFunctionality";

test("button has correct initial color", () => {
  render(<CheckboxFunctionality />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<CheckboxFunctionality />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checked conditions", () => {
  render(<CheckboxFunctionality />);

  // check that the button starts out enabled
  // check that the checkbox gets cehcked

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).not.toBeEnabled();

  // check the checkbox reverts after second click
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

});