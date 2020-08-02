import React, { useRef, useEffect } from "react";
import gsap, { TweenMax, Power3, TimelineMax } from "gsap";

gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const Skills = () => {
  const frontendHeader = useRef(null);
  const backendHeader = useRef(null);

  const frontendListItem = useRef(null);

  const frontendTimeline = new TimelineMax({ defaults: { duration: 1 } });
  const backendTimeline = new TimelineMax({ defaults: { duration: 1 } });

  useEffect(() => {
    frontendTimeline
      .from(frontendHeader.current, {
        x: "-100vw",
        ease: Power3,
      })
      .from(frontendListItem.current, { x: "-100vw", ease: Power3 });

    backendTimeline.from(backendHeader.current, { x: "100vw", ease: Power3 });
  }, []);

  return (
    <div className="skills">
      <div className="skills__frontend">
        <div className="skills__frontend-header" ref={frontendHeader}>
          Front End Skills
        </div>
        <ul className="skills__frontend-list">
          <li className="skills__frontend-list__item" ref={frontendListItem}>
            HTML CSS Javascript
          </li>
          <li className="skills__frontend-list__item" ref={frontendListItem}>
            ReactJS
          </li>
        </ul>
      </div>

      <div className="skills__backend">
        <div className="skills__backend-header" ref={backendHeader}>
          Back End Skills
        </div>
        <ul className="skills__backend-list">
          <li className="skills__backend-list__item">NodeJS</li>
          <li className="skills__backend-list__item">Express</li>
          <li className="skills__backend-list__item">MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
