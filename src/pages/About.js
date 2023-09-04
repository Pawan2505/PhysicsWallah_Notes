import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <div className="about-creator">
          <p>
            <span>Name : </span> Pawan Maurya
          </p>
          <p>
            <span>At : </span> Learning Full Stack Web Developement at PW Skills
            / iNeuron.ai
          </p>
          <p>
            <span>Contribution : </span> Contributed in styles, components and
            functionality in building the app.
          </p>
          <p className="social-accounts">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Pawan2505"
            >
              <FaGithub className="social-handle" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pawan2505/"
            >
              <FaLinkedin className="social-handle" />
            </a>
          </p>
        </div>
        <div className="avatar">
          <img
            src="https://avatars.githubusercontent.com/u/110979745?s=400&u=1f03c54635c29d74de941a84693acbf6e8b9cd1d&v=4"
            alt=""
            className="avatar-img"
          />

        </div>
      </div>
      </div>
  );
};

export default About;
