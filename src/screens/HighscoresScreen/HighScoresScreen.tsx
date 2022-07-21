import Button from "components/Button";
import GradientBackground from "components/GradientBackground";
import Title from "components/textComponents/Title";
import useAbortEffect from "hooks/useAbortEffect";
import useDimensions from "hooks/useDimensions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getHighScores from "services/getHighScores";

type Highscore = {
  id: string;
  length: number;
  userName: string;
  duration: number;
  quoteId: string;
  errors: number;
  uniqueCharacters: number;
};

const HighscoresScreen = () => {
  const navigate = useNavigate();
  const { width, height } = useDimensions();
  const [data, setData] = useState<Highscore[]>([]);

  useAbortEffect(async () => {
    const response = await getHighScores();
    response.status === 200 && setData(response.data);
  });

  return (
    <GradientBackground>
      <Title text="High scores" />
      <table
        style={{ width: width * 0.7 }}
        className="bg-white rounded-xl table-auto p-4 mb-8"
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
          {data.map((hs) => (
            <tr key={hs.id}>
              <td className="text-center">{hs.userName}</td>
              <td className="text-center">{hs.length}</td>
              <td className="text-center">{hs.uniqueCharacters}</td>
              <td className="text-center">{hs.duration / 1000}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button title="New Game" onClick={() => navigate("/")} />
    </GradientBackground>
  );
};

export default HighscoresScreen;
