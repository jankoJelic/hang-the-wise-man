import Keyboard from "../Keyboard";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";

const mockClickLetter = jest.fn();
const mockUsedLetters = "ASDF";

const renderKeyboard = () =>
  render(
    <Keyboard onClickLetter={mockClickLetter} usedLetters={mockUsedLetters} />
  );

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Keyboard onClickLetter={mockClickLetter} usedLetters={mockUsedLetters} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("contains 26 letters", () => {
  renderKeyboard();

  expect(screen.getAllByRole("letter")).toHaveLength(26);
});

it("fires onClickLetter when a letter is clicked", () => {
  renderKeyboard();

  const letter = screen.getByText("X");
  fireEvent.click(letter);

  expect(mockClickLetter).toHaveBeenCalledTimes(1);
});
