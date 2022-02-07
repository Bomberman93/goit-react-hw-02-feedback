import React from "react";
import Header from "./Header";

const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  valueProcentPositiv,
}) => (
  <div>
    <Header title={"Statistic"}/>
    <p className="FirstText">Good:{valueGood}</p>
    <p className="FirstText">Neutral:{valueNeutral}</p>
    <p className="FirstText">Bad:{valueBad}</p>
    <p className="FirstText">Total:{valueTotal} </p>
    <p className="FirstText">Positiv feedback: {valueProcentPositiv}%</p>
  </div>
);

export default Statistics;

