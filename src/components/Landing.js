import React from "react";

import { Fade } from "react-reveal";

const Landing = () => {
  return (
    <div className="landing">
      <Fade duration={1400} up>
        <i className="fas fa-arrow-up landing-arrow"></i>
      </Fade>
      <Fade delay={700} duration={1400} up>
        <p className="landing-subtitle">
          search for <span>GitHub</span> users above
        </p>
      </Fade>
    </div>
  );
};

export default Landing;
