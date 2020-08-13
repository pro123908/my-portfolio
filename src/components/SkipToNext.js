import React from "react";

const SkipToNext = ({
  currentSection,
  nextSection,
  interval,
  text = "Skip",
}) => {
  const skipToNextSection = () => {
    currentSection(false);
    nextSection(true);
    clearInterval(interval);
  };

  return (
    <button className="skip-btn" onClick={skipToNextSection}>
      {text} <i class="fa fa-forward" aria-hidden="true"></i>
    </button>
  );
};

export default SkipToNext;
