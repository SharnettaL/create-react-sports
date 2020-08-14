import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game/Game";
import Team from "./components/team/Team";
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import raccoon from "./components/assets/raccoon.png";
import squirrel from "./components/assets/squirrel.png";
import bunny from "./components/assets/bunny.png";
import hound from "./components/assets/hound.png";
import shotSound from "./components/assets/Back+Board.mp3";
import scoreSound from "./components/assets/Swish+2.mp3";

function App() {
  return (
    <div className="App">
      <Game />
      <Team />
      <ScoreBoard />
      <img src={raccoon} alt="this is raccoon image" />
      <img src={squirrel} alt="this is squirrel image" />
      <img src={bunny} alt="this is bunny image" />
      <img src={hound} alt="this is hound image" />
      <audio src={shotSound} />
      <audio src={scoreSound} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
