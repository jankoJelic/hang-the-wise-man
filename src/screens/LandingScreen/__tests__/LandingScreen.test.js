import LandingScreen from "../LandingScreen";
import { render, screen } from "test-utils";

it("displays correct elements", () => {
  render(<LandingScreen />);

  expect(screen.getByText("Welcome, wise man!")).toBeInTheDocument();
  expect(screen.getByText("Tell us your name!")).toBeInTheDocument();
});
