import React, { useState } from "react";
import "./App.scss";
import IntroSection from "./components/IntroSection/IntroSection";
import Education from "./components/Education";
import Skills from "./components/Skills/Skills";

function App() {
  let [renderIntro, setRenderIntro] = useState(true);

  return (
    <div className="app">
      {/* {renderIntro ? (
        <IntroSection setRenderIntro={setRenderIntro} />
      ) : (
        <Education />
      )} */}

      <Skills />
    </div>
  );
}

export default App;
