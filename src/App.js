import React, { useState } from "react";
import "./App.scss";
import IntroSection from "./components/IntroSection/IntroSection";
import Education from "./components/Education";

function App() {
  let [renderIntro, setRenderIntro] = useState(true);

  return (
    <div className="app">
      {renderIntro ? (
        <IntroSection setRenderIntro={setRenderIntro} />
      ) : (
        <Education />
      )}

      {/* <Education /> */}
    </div>
  );
}

export default App;
