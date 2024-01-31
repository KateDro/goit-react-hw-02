import css from "./Options.module.css";

export const Options = ({ rates, setRates }) => {
  const { good, neutral, bad } = rates;
  const totalRates = good + neutral + bad;

  const updateGood = () => {
    setRates({
      ...rates,
      good: rates.good + 1,
    });
  };

  const updateNeutral = () => {
    setRates({
      ...rates,
      neutral: rates.neutral + 1,
    });
  };

  const updateBad = () => {
    setRates({
      ...rates,
      bad: rates.bad + 1,
    });
  };

  const resetRates = () => {
    setRates({
      ...rates,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  if (totalRates === 0) {
    return (
      <ul className={css.list}>
        <li key="Good">
          <button className={css.button} onClick={updateGood}>
            Good
          </button>
        </li>
        <li key="Neutral">
          <button className={css.button} onClick={updateNeutral}>
            Neutral
          </button>
        </li>
        <li key="Bad">
          <button className={css.button} onClick={updateBad}>
            Bad
          </button>
        </li>
      </ul>
    );
  } else
    return (
      <div>
        <ul className={css.list}>
          <li key="Good">
            <button className={css.button} onClick={updateGood}>
              Good
            </button>
          </li>
          <li key="Neutral">
            <button className={css.button} onClick={updateNeutral}>
              Neutral
            </button>
          </li>
          <li key="Bad">
            <button className={css.button} onClick={updateBad}>
              Bad
            </button>
          </li>
          <li key="Reset">
            <button className={css.button} onClick={resetRates}>
              Reset
            </button>
          </li>
        </ul>
      </div>
    );
};
