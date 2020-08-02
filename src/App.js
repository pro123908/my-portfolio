import React, { useState } from "react";
import "./App.scss";
import IntroSection from "./components/IntroSection/IntroSection";
import Education from "./components/Education";
import Skills from "./components/Skills/Skills";

function App() {
  let [renderIntro, setRenderIntro] = useState(true);
  let [renderEducation, setRenderEducation] = useState(true);
  let [renderSkills, setRenderSkills] = useState(false);

  const getSection = () => {
    if (renderIntro)
      return (
        <IntroSection
          setRenderIntro={setRenderIntro}
          setRenderEducation={setRenderEducation}
        />
      );
    else if (renderEducation) {
      return (
        <Education
          setRenderEducation={setRenderEducation}
          setRenderSkills={setRenderSkills}
        />
      );
    } else if (renderSkills) {
      return <Skills setRenderSkills={setRenderSkills} />;
    } else {
      return "";
    }
  };

  return (
    <div className="app">
      {/* {getSection()} */}

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

      {/* <Education /> */}
      {/* <Skills /> */}
    </div>
  );
}

export default App;
