import renderer from "react-test-renderer";
import BackdropOverlay from "../BackdropOverlay";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BackdropOverlay>
        <></>
      </BackdropOverlay>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
