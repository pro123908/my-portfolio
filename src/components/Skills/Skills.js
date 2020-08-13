import React, { useRef, useEffect, useState } from "react";
import gsap, { TweenMax, Power3, TimelineMax } from "gsap";
import SkipToNext from "../SkipToNext";
import Counter from "../Counter/Counter";

gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const Skills = ({ setRenderSkills, setRenderProjects }) => {
  const [nextSectionTimer, setNextSectionTimer] = useState(null);
  var frontendHeader = useRef(null);
  var backendHeader = useRef(null);

  var frontendListItems = useRef([]);
  frontendListItems.current = [];

  var backEndListItems = useRef([]);
  backEndListItems.current = [];

  const frontEndSkills = ["HTML5/CSS3", "JAVASCRIPT", "REACTJS"];
  const backEndSkills = ["NodeJS", "Express", "MongoDB"];

  const frontendTimeline = new TimelineMax({ defaults: { duration: 1 } });
  const backendTimeline = new TimelineMax({ defaults: { duration: 1 } });

  const addToFrontEndRef = (el) => {
    if (el && !frontendListItems.current.includes(el)) {
      frontendListItems.current.push(el);
    }
  };

  const addToBackEndRef = (el) => {
    if (el && !backEndListItems.current.includes(el)) {
      backEndListItems.current.push(el);
    }
  };

  useEffect(() => {
    frontendTimeline
      .from(frontendHeader.current, {
        x: "-100vw",
        ease: Power3,
      })
      .from([frontendListItems.current], {
        x: "-100vw",
        ease: Power3,
        stagger: 0.5,
      });

    backendTimeline
      .from(backendHeader.current, { x: "100vw", ease: Power3 })
      .from([backEndListItems.current], {
        x: "100vw",
        ease: Power3,
        stagger: 0.5,
      });

    const timer = setTimeout(async () => {
      frontendTimeline.timeScale(3);
      frontendTimeline.reverse();
      backendTimeline.timeScale(3);
      backendTimeline.reverse();
      setTimeout(() => {
        setRenderSkills(false);
        setRenderProjects(true);
      }, 500);
    }, (frontendTimeline.duration() + 2) * 1000);
    setNextSectionTimer(timer);
  }, []);

  return (
    <div className="skills">
      <SkipToNext
        currentSection={setRenderSkills}
        nextSection={setRenderProjects}
        s
        interval={nextSectionTimer}
      />
      <Counter time={4} />
      <div className="skills__frontend">
        <div className="skills__frontend-header" ref={frontendHeader}>
          Front End Skills
        </div>
        <ul className="skills__frontend-list">
          {frontEndSkills.map((el) => (
            <li
              key={el}
              className="skills__frontend-list__item"
              ref={addToFrontEndRef}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>

      <div className="skills__backend">
        <div className="skills__backend-header" ref={backendHeader}>
          Back End Skills
        </div>
        <ul className="skills__backend-list">
          {backEndSkills.map((el) => (
            <li
              key={el}
              className="skills__backend-list__item"
              ref={addToBackEndRef}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
