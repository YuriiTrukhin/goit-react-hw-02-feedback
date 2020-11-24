import React from "react";
import styles from "../Statistics/Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div>
        <ul className={styles.list}>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
