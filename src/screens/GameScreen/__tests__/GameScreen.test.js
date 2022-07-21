import { render, screen, fireEvent } from "test-utils";
import GameScreen from "../GameScreen";

const renderGameScreen = () => render(<GameScreen />);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      data: {
        _id: "Stv2simFUzRv",
        content: "This is a wise sentence.",
        author: "Helen Keller",
        tags: ["famous-quotes"],
        authorSlug: "helen-keller",
        length: 104,
        dateAdded: "2020-04-02",
        dateModified: "2020-04-02",
      },
    },
  }),
}));

describe("GameScreen", () => {
  it("renders correct elements", () => {
    renderGameScreen();
    const gameOverModal = screen.queryByText("You lost!");

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("A wise man once said:")).toBeInTheDocument();
    expect(screen.getByText("Good luck, !")).toBeInTheDocument();
    expect(gameOverModal).toBe(null);
  });

  it("is game over when player makes 7 mistakes", () => {
    renderGameScreen();

    fireEvent.click(screen.getByText("X"));
    fireEvent.click(screen.getByText("V"));
    fireEvent.click(screen.getByText("Z"));
    fireEvent.click(screen.getByText("Q"));
    fireEvent.click(screen.getByText("B"));
    fireEvent.click(screen.getByText("D"));
    fireEvent.click(screen.getByText("M"));

    expect(screen.getByText("You lost!")).toBeInTheDocument();
  });
});
