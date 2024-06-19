import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setValues(values => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    }));
  }

  const totalFeedback = values.good + values.neutral + values.bad;

  function resetFeedback() {
    setValues({ good: 0, neutral: 0, bad: 0 });
  }

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((values.good / (totalFeedback - values.neutral)) * 100)
      : 0;

  useEffect(() => {
    const storedValues = localStorage.getItem('reviewsData');
    if (storedValues) {
      setValues(JSON.parse(storedValues));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reviewsData', JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
