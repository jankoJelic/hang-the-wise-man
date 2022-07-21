import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Solution from "components/Solution";

const mockSolution = "This is a wise sentence.";

const renderSolution = () =>
  render(
    <Solution solution={mockSolution} usedLetters={["A", "S", "D", "F"]} />
  );

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Solution solution={mockSolution} usedLetters={["A", "S", "D", "F"]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("words", () => {
  it("groups solution into correct number of words", () => {
    jest.clearAllMocks();
    const wrapper = renderSolution();
    expect(wrapper.getAllByRole("word")).toHaveLength(5);
  });
});

describe("letters", () => {
  it("contains as many letters as in the solution prop, without spaces", () => {
    jest.clearAllMocks();
    const wrapper = renderSolution();

    expect(wrapper.getAllByRole("letter")).toHaveLength(
      mockSolution.replaceAll(" ", "").length
    );
  });
});
