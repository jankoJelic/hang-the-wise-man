import useDimensions from "hooks/useDimensions";
import Highscore from "models/Highscore";

const HighScoresTable = ({ data }: { data: Highscore[] }) => {
  const { width } = useDimensions();

  return (
    <table
      style={{ width: width * 0.7 }}
      className="bg-white rounded-xl table-auto p-4 mb-8 overflow-hidden"
    >
      <thead className="h-8 border-b-2 border-mainText">
        <tr>
          <th>Username</th>
          <th>Length</th>
          <th>Unique Characters</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data.map((hs, index) => (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HighScoresTable;
