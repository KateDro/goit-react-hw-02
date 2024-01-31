import { useEffect, useState } from "react";
import "./App.css";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { Options } from "./Options/Options";

export function App() {
  const savedRates = JSON.parse(localStorage.getItem("saved-rates")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [rates, setRates] = useState(savedRates);

  useEffect(() => {
    localStorage.setItem("saved-rates", JSON.stringify(rates));
  }, [rates]);

  return (
    <>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options rates={rates} setRates={setRates} />
      <Feedback rates={rates} />
    </>
  );
}
