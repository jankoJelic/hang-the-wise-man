import useWindowSize from "hooks/useWindowsSize";
import Highscore from "models/Highscore";
import calculateRealScore from "util/calculateRealScore";

const HighScoresTable = ({ data }: { data: Highscore[] }) => {
  const { width } = useWindowSize();

  const score = (errors: number) => parseFloat((100 / (1 + errors)).toFixed(2));

  const dataWithScore = data.map((hs) => {
    return {
      ...hs,
      score: score(hs.errors),
      realScore: calculateRealScore({
        quoteLength: hs.length,
        uniqueLetters: hs.uniqueCharacters,
        errors: hs.errors,
        solvingTime: hs.duration,
      }),
    };
  });

  const dataByScore = dataWithScore.sort((a, b) => b.score - a.score);

  return (
    <table
      style={{ width: width * 0.9 }}
      className="bg-white rounded-xl table-auto p-4 mb-8 overflow-hidden shadow-md"
    >
      <thead className="h-8 border-b-2 border-mainText">
        <tr>
          <th>Username</th>
          <th>Length</th>
          <th>Unique Characters</th>
          <th>Duration</th>
          <th className="text-mainAction">Score</th>
          <th>Real Score</th>
        </tr>
      </thead>
      <tbody>
        {dataByScore.map((hs, index) => {
          console.log(hs);
          return (
            <tr
              key={hs.id}
              className={`text-center py-1 roundex-xl ${
                index % 2 ? "bg-gray-100" : ""
              }`}
            >
              <td className="">{hs.userName}</td>
              <td>{hs.length}</td>
              <td>{hs.uniqueCharacters}</td>
              <td>{hs.duration / 1000}</td>
              <td className="font-semibold text-mainAction">{hs.score}</td>
              <td>{hs.realScore.toFixed(5)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HighScoresTable;
