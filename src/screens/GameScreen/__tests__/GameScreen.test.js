import { render, screen, fireEvent } from "test-utils";
import GameScreen from "../GameScreen";
import axios from "axios";
import { act } from "react-test-renderer";

jest.mock("axios");

const mockSolution = {
  _id: "Stv2simdFUzRv",
  content: "This is a mocked sentence.",
  author: "Janko Jelic",
  tags: ["famous-quotes"],
  authorSlug: "janko-jelic",
  length: 104,
  dateAdded: "2020-04-02",
  dateModified: "2020-04-02",
};

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

    expect(screen.getByRole("head")).toBeInTheDocument();
    expect(screen.getByRole("leftHand")).toBeInTheDocument();
    expect(screen.getByRole("rightHand")).toBeInTheDocument();
    expect(screen.getByRole("leftLeg")).toBeInTheDocument();
    expect(screen.getByRole("rightLeg")).toBeInTheDocument();
    expect(screen.getByText("You lost!")).toBeInTheDocument();
  });

  it("restarts the game when button is clicked", async () => {
    renderGameScreen();
    const restartButton = await screen.findByText("Restart game");
    await axios.get.mockResolvedValueOnce(mockSolution);

    await act(() => {
      fireEvent.click(screen.getByText("X"));
      fireEvent.click(screen.getByText("Z"));

      fireEvent.click(restartButton);
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
