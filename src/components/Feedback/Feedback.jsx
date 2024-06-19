import css from './Feedback.module.css';

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.feedback}>
      <p className={css.feedbackText}>Good: {good}</p>
      <p className={css.feedbackText}>Neutral: {neutral}</p>
      <p className={css.feedbackText}>Bad: {bad}</p>
      <p className={css.feedbackText}>Total: {totalFeedback}</p>
      <p className={css.feedbackText}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
