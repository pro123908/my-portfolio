import React, { useRef, useEffect } from "react";
import gsap, { TweenMax, Power3, TimelineMax } from "gsap";

gsap.registerPlugin(TweenMax, Power3, TimelineMax);

const Education = () => {
  const EducationHeader = useRef(null);
  const EducationDesc1 = useRef(null);
  const EducationDesc2 = useRef(null);
  const EducationDesc3 = useRef(null);
  const EducationDesc4 = useRef(null);

  let EducationTimeline = new TimelineMax({ defaults: { duration: 5 } });

  useEffect(() => {
    EducationTimeline.from(EducationHeader.current, {
      y: "100vh",
      ease: Power3,
    })
      .from(
        EducationDesc1.current,
        { y: "100vh", opacity: 0, ease: Power3 },
        "<.1"
      )
      .from(
        EducationDesc2.current,
        { y: "100vh", opacity: 0, ease: Power3 },
        "<.1"
      )
      .from(
        EducationDesc3.current,
        { y: "100vh", opacity: 0, ease: Power3 },
        "<.1"
      )
      .from(
        EducationDesc4.current,
        { y: "100vh", opacity: 0, ease: Power3 },
        "<.3"
      );
  }, []);

  return (
    <div className="education">
      <div className="education__header" ref={EducationHeader}>
        Current Education
      </div>

      <div className="education__description-1 mbs" ref={EducationDesc1}>
        Doing Software Engineering from Ned University
      </div>

      <div className="education__description-2 mbs" ref={EducationDesc2}>
        Has a current CGPA of 3.2
      </div>

      <div className="education__description-3 mbs" ref={EducationDesc3}>
        Have the experience of couple of Internships
      </div>

      <div className="education__description-4 mbs" ref={EducationDesc4}>
        Experience with Freelancing as worked on the Fiver
      </div>
    </div>
  );
};

export default Education;
