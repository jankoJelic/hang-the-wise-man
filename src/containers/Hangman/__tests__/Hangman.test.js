import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Hangman from "../Hangman";

const renderHangman = (mistakes) => render(<Hangman mistakes={mistakes} />);

it("renders correctly", () => {
  const tree = renderer.create(<Hangman mistakes={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("elements by number of mistakes", () => {
  describe("when there are no mistakes made", () => {
    it("renders Gallows component without any body parts", async () => {
      const wrapper = renderHangman(0);
      expect(wrapper.getByRole("gallows")).toBeInTheDocument();

      const container = wrapper.getByRole("container");
      expect(container.children).toHaveLength(1);
    });
  });

  it("renders correct number of body parts", () => {
    const wrapper = renderHangman(5);

    const container = wrapper.getByRole("container");
    expect(container.children).toHaveLength(6);
  });
});

it("renders a maximum of 7 body parts", async () => {
  const wrapper = renderHangman(100);

  const container = await wrapper.findByRole("container");
  expect(container.children).toHaveLength(7);
});
