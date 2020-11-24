import React from "react";
import styles from "../FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = function ({ onLeaveFeedback }) {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.buttonGood} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={styles.buttonNeutral} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={styles.buttonBad} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
