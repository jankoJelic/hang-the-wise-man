import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../Button";

const mockOnClick = jest.fn();

const tree = renderer
  .create(<Button onClick={mockOnClick} title="Submit" />)
  .toJSON();

it("renders correctly", () => {
  expect(tree).toMatchSnapshot();
});

describe("onClick", () => {
  it("fires correctly", () => {
    render(<Button onClick={mockOnClick} title="Submit" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});