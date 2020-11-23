import React from "react";
import styles from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = function ({ onLeaveFeedback }) {
  return (
    <>
      <button className={styles.button} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={styles.button} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={styles.button} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};
export default FeedbackOptions;
