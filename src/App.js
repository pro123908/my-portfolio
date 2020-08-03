import React, { useState } from "react";
import "./App.scss";
import IntroSection from "./components/IntroSection/IntroSection";
import Education from "./components/Education";
import Skills from "./components/Skills/Skills";

function App() {
  let [renderIntro, setRenderIntro] = useState(true);
  let [renderEducation, setRenderEducation] = useState(true);
  let [renderSkills, setRenderSkills] = useState(false);

  return (
    <div className="app">
      {renderIntro ? (
        <IntroSection
          setRenderIntro={setRenderIntro}
          setRenderEducation={setRenderEducation}
        />
      ) : renderEducation ? (
        <Education
          setRenderEducation={setRenderEducation}
          setRenderSkills={setRenderSkills}
        />
      ) : (
        <Skills setRenderSkills={setRenderSkills} />
      )}
    </div>
  );
}

export default App;
