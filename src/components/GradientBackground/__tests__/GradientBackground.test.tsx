import renderer from "react-test-renderer";
import GradientBackground from "../GradientBackground";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <GradientBackground>
        <></>
      </GradientBackground>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
