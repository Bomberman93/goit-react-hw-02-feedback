import React from "react";

const FeedbackOptions = ({ onGoog, onNeutral, onBad }) => (
  <div className="FirstTask__controls">
    <h1 className="FirstTitle">Please liave feedback</h1>
    <button type="button" onClick={onGoog}>
      Good
    </button>
    <button type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
