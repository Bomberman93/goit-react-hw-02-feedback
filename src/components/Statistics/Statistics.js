import React from "react";
import Header from "../Titles/Header";
import Notification from "../Titles/Notification";
import PropTypes from 'prop-types';

const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  valueProcentPositiv,
}) => {
  return valueTotal === 0 ? (
    <Notification titleZero={"There is no feedback"} />
  ) : (
    <div className="StatisticContainer">
      <Header title={"Statistic"} />
      <p className="FirstText">Good:{valueGood}</p>
      <p className="FirstText">Neutral:{valueNeutral}</p>
      <p className="FirstText">Bad:{valueBad}</p>
      <p className="FirstText">Total:{valueTotal} </p>
      <p className="FirstText">Positiv feedback: {valueProcentPositiv}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  valueGood:PropTypes.number.isRequired,
  valueNeutral:PropTypes.number.isRequired,
  valueBad:PropTypes.number.isRequired,
  valueTotal:PropTypes.number.isRequired,
  valueProcentPositiv:PropTypes.number.isRequired,
}