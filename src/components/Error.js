import React from "react";

import { Fade } from "react-reveal";

const Error = ({ close }) => {
  return (
    <Fade duration={350}>
      <div className="error">
        <Fade delay={350} duration={700}>
          <div className="error-modal">
            <i className="fas fa-exclamation error-logo"></i>
            <p className="error-text">search box empty</p>{" "}
            <button className="error-button" onClick={close}>
              try-again
            </button>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Error;
