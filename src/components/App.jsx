import { useState, useEffect } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import "./App.css";

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
