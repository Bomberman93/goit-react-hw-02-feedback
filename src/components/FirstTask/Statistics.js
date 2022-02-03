import React from "react";

const Statistics = ({valueGood, valueNeutral, valueBad, valueTotal, valueProcentPositiv}) => (
  <div>
    <h1 className="FirstTitle">Statistics</h1>
    <p className="FirstText">Good:{valueGood}</p>
    <p className="FirstText">Neutral:{valueNeutral}</p>
    <p className="FirstText">Bad:{valueBad}</p>
    <p className="FirstText">Total: </p>
    <p className="FirstText">Positiv feedback: </p>
  </div>
);

export default Statistics;

