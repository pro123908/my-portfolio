import React from "react";

const SkipToNext = ({ currentSection, nextSection, interval }) => {
  const skipToNextSection = () => {
    currentSection(false);
    nextSection(true);
    clearInterval(interval);
  };

  return (
    <button className="skip-btn" onClick={skipToNextSection}>
      Skip <i class="fa fa-forward" aria-hidden="true"></i>
    </button>
  );
};

export default SkipToNext;
