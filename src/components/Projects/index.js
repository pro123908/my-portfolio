import React, { useState, useEffect, useRef } from "react";
import gsap, { TweenMax, Power3, TimelineMax } from "gsap";
import SkipToNext from "../SkipToNext";
import Counter from "../Counter/Counter";

gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const Projects = () => {
  const headingRef = useRef(null);
  const projectsListRef = useRef([]);
  const [nextBtn, renderNextBtn] = useState(false);

  const ProjectsTimeline = new TimelineMax({
    defaults: { duration: 2 },
  });

  useEffect(() => {
    ProjectsTimeline.from(headingRef.current, {
      y: "100vh",
      ease: Power3,
      delay: 1,
      duration: 1,
    }).from([projectsListRef.current], {
      x: "-100vw",
      ease: Power3,
      stagger: 0.5,
      onComplete: () => renderNextBtn(true),
    });
  }, []);

  const projectsArray = [
    {
      name: "Pintar (Home Automation Website)",
      url: "https://pintalr.firebaseapp.com/",
    },
    {
      name: "YellowStone Technologies (E-Commerce)",
      url: "https://yellowstone-tech.firebaseapp.com/",
    },
    {
      name: "Parking System (Personal Project)",
      url: "https://parking-system-3acb7.web.app/",
    },
    {
      name: "Student Management System (Attendance,Result)",
      url: "https://hidden-savannah-41274.herokuapp.com/",
    },
    {
      name: "Stripe API (Replicated,Project by TraversyMedia)",
      url: "https://polar-fortress-32027.herokuapp.com/",
    },
    {
      name: "Weather App (PWA,Replicated)",
      url: "https://sharp-noyce-f4ca9a.netlify.app/",
    },
    {
      name: "Basic Chat App (Room based)",
      url: "https://awesome-goldwasser-9eb70d.netlify.app/",
    },
  ];

  const projectsContent = projectsArray.map(({ name, url }) => (
    <div
      className="projects__list-item"
      ref={(el) => projectsListRef.current.push(el)}
      key={name}
    >
      <a target="_blank" className="projects__list-link" href={url}>
        <i className="fa fa-chevron-circle-right mrs" aria-hidden="true"></i>
        {name}
      </a>
    </div>
  ));
  return (
    <div className="projects">
      {nextBtn ? <SkipToNext text="Next" /> : ""}
      <div className="projects__heading" ref={headingRef}>
        Projects
      </div>
      <div className="projects__list">{projectsContent}</div>
    </div>
  );
};

export default Projects;
