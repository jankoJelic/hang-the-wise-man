import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Title from "components/textComponents/Title";

it("renders correctly", () => {
  const tree = renderer.create(<Title text="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correct text", () => {
  const wrapper = render(<Title text="Test" />);

  expect(wrapper.getByText("Test")).toBeInTheDocument();
});
