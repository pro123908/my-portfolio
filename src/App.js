import React, { useRef, useEffect } from "react";
import "./App.scss";

import { TweenMax, Power3 } from "gsap";

function App() {
  let introText = useRef();
  let introSelf1 = useRef();
  let introSelf2 = useRef();
  let introSelf3 = useRef();

  // console.log(introText);

  useEffect(() => {
    console.log(introSelf2);
    // TweenMax.to(introText.current, 1, { });
    TweenMax.from(introText.current, 1, {
      x: "-100%",
      ease: Power3,
      scale: 1.1,
    });

    TweenMax.from(introSelf1.current, 1, {
      x: "-100vw",
      ease: Power3,
      delay: 1,
    });

    TweenMax.from(introSelf2.current, 1, {
      y: "100vh",
      ease: Power3,
      delay: 1.5,
      scale: 2,
    });

    TweenMax.from(introSelf3.current, 1, {
      x: "-100vw",
      ease: Power3,
      delay: 3,
    });
  }, []);
  return (
    <div className="App">
      <div className="intro-text" ref={introText}>
        Hello World, Welcome to my portfolio
      </div>

      <div className="intro-self">
        <span className="intro-self-1" ref={introSelf1}>
          My name is{" "}
        </span>
        <span className="intro-self-2" ref={introSelf2}>
          Bilal Ahmad
        </span>

        <div className="intro-self-3" ref={introSelf3}>
          Full Stack Developer
        </div>
      </div>
    </div>
  );
}

export default App;
