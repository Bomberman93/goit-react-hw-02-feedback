import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import "./FirstTask.css";

class FirstTask extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleRating = (key) => {
    this.setState((prevState) => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const procentPositiv = 
    this.countTotalFeedback()
      ? ((this.state.good + this.state.neutral) * 100) /this.countTotalFeedback()
      : 0;
    return Math.round(procentPositiv);
  };

  render() {
    return (
      <div className="FirstTask">
        <FeedbackOptions 
          options={this.state}
          onLeaveFeedback = {this.handleRating}
        />
        <Statistics
          valueGood={this.state.good}
          valueNeutral={this.state.neutral}
          valueBad={this.state.bad}
          valueTotal={this.countTotalFeedback()}
          valueProcentPositiv={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default FirstTask;
