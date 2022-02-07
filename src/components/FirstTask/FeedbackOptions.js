import React from "react";
import Header from "./Header";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const array = Object.keys(options);
  return (
    <div className="FirstTask__controls">
      <Header title={"Please liave feedback"}/>
      {array.map((value, key) => (
        <button key={key} type="button" onClick={() => {onLeaveFeedback(value)}}>{value}</button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
