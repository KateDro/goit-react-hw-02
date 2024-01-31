import css from "./Feedback.module.css";

export const Feedback = ({ rates: { good, neutral, bad } }) => {
  const totalFeedback = good + bad + neutral;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  if (totalFeedback > 0) {
    return (
      <div>
        <ul className={css.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li className={css.itemTotal}>Total: {totalFeedback}</li>
          <li className={css.itemTotal}>Positive: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
  return <p>No feedback yet</p>;
};
