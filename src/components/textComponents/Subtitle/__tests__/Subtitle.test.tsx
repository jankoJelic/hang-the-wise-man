import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Subtitle from "../Subtitle";

it("renders correctly", () => {
  const tree = renderer.create(<Subtitle text="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct text", () => {
  const wrapper = render(<Subtitle text="Test" />);

  expect(wrapper.getByText("Test")).toBeInTheDocument();
});
