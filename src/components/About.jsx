import React, { useEffect } from "react";
import Typed from "typed.js";
import "../styles/about.css";

function About() {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Omar Shalaby, <br>a <strong>Software Engineer</strong>"],
      typeSpeed: 40,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="">
      <div className="container">
        <h1>
          <span ref={el}></span>
        </h1>
      </div>
    </div>
  );
}

export default About;
