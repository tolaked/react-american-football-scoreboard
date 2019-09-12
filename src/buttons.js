import React from "react";

const Buttons = props => {
  return (
    <div>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={props.changehomeScore}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => {
              props.setHomeScore(props.homeScore + 3);
            }}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={props.changeawayScore}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => {
              props.setAwayScore(props.awayScore + 3);
            }}
          >
            Away Field Goal
          </button>
          <button className="awayButtons__fieldGoal" onClick={props.setQuarter}>
            Current Quarter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Buttons;
