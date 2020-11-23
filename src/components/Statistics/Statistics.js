import React from "react";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div>
        <h2>Statistics</h2>
      </div>
      <div>
        <ul>
          <li>
            <p>Good:{good}</p>
          </li>
          <li>
            <p>Neutral:{neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feeedback: {positivePercentage}%</p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Statistics;
