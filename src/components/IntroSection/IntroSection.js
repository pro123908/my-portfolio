import React, { useRef, useEffect, useState } from "react";
import gsap, { TweenMax, Power3, TimelineMax } from "gsap";
import Counter from "../Counter/Counter";
import SkipToNext from "../SkipToNext";

gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const IntroSection = ({ setRenderIntro, setRenderEducation }) => {
  const [nextSectionTimer, setNextSectionTimer] = useState(null);
  let introText = useRef();
  let introSelf1 = useRef();
  let introSelf2 = useRef();
  let introSelf3 = useRef();

  let introTimeline = new TimelineMax({ defaults: { duration: 1 } });

  useEffect(() => {
    introTimeline
      .from(introText.current, 1, {
        x: "-150%",
        ease: Power3,
        scale: 1.1,
      })
      .from(introSelf1.current, 1, {
        x: "-100vw",
        ease: Power3,
      })
      .from(introSelf2.current, 1, {
        y: "100vh",
        ease: Power3,

        scale: 2,
      })
      .from(introSelf3.current, 1, {
        x: "-100vw",
        ease: Power3,
      });

    const timerId = setTimeout(async () => {
      introTimeline.timeScale(3);
      await introTimeline.reverse();
      setTimeout(() => {
        setRenderIntro(false);
        setRenderEducation(true);
      }, 500);
    }, (introTimeline.duration() + 3) * 1000);

    setNextSectionTimer(timerId);
  }, []);

  return (
    <div className="intro">
      <SkipToNext
        currentSection={setRenderIntro}
        nextSection={setRenderEducation}
        interval={nextSectionTimer}
      />
      <Counter time={6} />
      <div className="intro__text" ref={introText}>
        Hello World, Welcome to my portfolio
      </div>

      <div className="intro__self">
        <span className="intro__self-1" ref={introSelf1}>
          My name is{" "}
        </span>
        <span className="intro__self-2" ref={introSelf2}>
          Bilal Ahmad
        </span>

        <div className="intro__self-3" ref={introSelf3}>
          Full Stack Developer
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
