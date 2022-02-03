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

  handlGooD = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handlNeutral = () => {
    this.setState((prevState) => {
         console.log(prevState)  /*приходит обьект=)*/
      return {
        neutral: prevState.neutral + 1,
      };
      
    });
  };

  handlBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div className="FirstTask">
        <FeedbackOptions
          onGoog={this.handlGooD}
          onNeutral={this.handlNeutral}
          onBad={this.handlBad}
        />
        <Statistics
          valueGood={this.state.good}
          valueNeutral={this.state.neutral}
          valueBad={this.state.bad}
        />
      </div>
    );
  }
}

export default FirstTask;
