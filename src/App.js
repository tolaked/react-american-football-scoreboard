//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import ScoreBoard from "./scoreBoard";
import Buttons from "./buttons";
import Timer from "./Timer";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(20);
  const [awayScore, setAwayScore] = useState(50);
  const [quarter, setQuarter] = useState(1);

  const [timer, setTimer] = useState("00:10");

  const changeHomeScore = () => {
    setHomeScore(homeScore + 7);
  };

  const changeAwayScore = () => {
    setAwayScore(awayScore + 7);
  };

  const changeQuarter = () => {
    setQuarter(quarter + 1);
    setHomeScore(homeScore);
    setAwayScore(awayScore);
  };

  return (
    <div className="container">
      <ScoreBoard
        homeScore={homeScore}
        awayScore={awayScore}
        changehomeScore={changeHomeScore}
        changeawayScore={changeAwayScore}
        timer={timer}
        quarter={quarter}
      />
      <Buttons
        homeScore={homeScore}
        awayScore={awayScore}
        changehomeScore={changeHomeScore}
        changeawayScore={changeAwayScore}
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
        setQuarter={changeQuarter}
      />
    </div>
  );
}

export default App;
