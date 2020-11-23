import React from "react";
import styles from "../Statistics/Statistics.module.css";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div>
        <h2 className={styles.title}>Statistics</h2>
      </div>
      <div>
        <ul className={styles.list}>
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
