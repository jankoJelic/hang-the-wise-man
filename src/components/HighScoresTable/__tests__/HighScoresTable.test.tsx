import HighScoresTable from "../HighScoresTable";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Highscore from "models/Highscore";

const mockData: Highscore[] = [
  {
    id: "1",
    length: 20,
    userName: "janko",
    duration: 100000,
    quoteId: "e2ni",
    errors: 10,
    uniqueCharacters: 17,
  },
  {
    id: "2",
    length: 22,
    userName: "jakov",
    duration: 222222,
    quoteId: "e22ni",
    errors: 9,
    uniqueCharacters: 14,
  },
  {
    id: "3",
    length: 99,
    userName: "user3",
    duration: 88888,
    quoteId: "e12ni",
    errors: 3,
    uniqueCharacters: 20,
  },
];

const renderTable = () => render(<HighScoresTable data={mockData} />);

it("renders correctly", () => {
  const tree = renderer.create(<HighScoresTable data={mockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("has 6 columns", () => {
  renderTable();

  expect(screen.getAllByRole("columnheader")).toHaveLength(6);
});

it("its body contains one row for each item in data", () => {
  renderTable();

  expect(screen.getAllByRole("cell")).toHaveLength(6 * mockData.length);
});
