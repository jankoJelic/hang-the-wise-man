import LoadingSpinner from "../LoadingSpinner";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "store/store";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LoadingSpinner />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
