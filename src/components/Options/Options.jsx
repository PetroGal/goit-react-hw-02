import css from './Options.module.css';

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <ul className={css.listOptions}>
      <li>
        <button
          className={css.optionsBtn}
          onClick={() => updateFeedback('good')}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.optionsBtn}
          onClick={() => updateFeedback('neutral')}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.optionsBtn}
          onClick={() => updateFeedback('bad')}
        >
          Bad
        </button>
      </li>
      <li>
        {totalFeedback > 0 && (
          <button className={css.optionsBtn} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
}
