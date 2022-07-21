import { render, screen } from "test-utils";
import HighScoresScreen from "..";

const renderHighScoresScreen = () => render(<HighScoresScreen />);

describe("HighScoresScreen", () => {
  it("renders correct components", () => {
    renderHighScoresScreen();

    expect(screen.getByText("New Game")).toBeInTheDocument();
    expect(screen.getByText("High scores")).toBeInTheDocument();
  });
});
