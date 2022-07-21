import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import LoadingSpinner from "components/LoadingSpinner";
import GameScreen from "screens/GameScreen";
import HighScoresScreen from "screens/HighscoresScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="game" element={<GameScreen />} />
          <Route path="highscores" element={<HighScoresScreen />} />
        </Routes>
        <LoadingSpinner />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
