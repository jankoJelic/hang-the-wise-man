import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "routes/game";
import Highscores from "routes/highscores";
import { Provider } from "react-redux";
import store from "store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="game" element={<Game />} />
          <Route path="highscores" element={<Highscores />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
