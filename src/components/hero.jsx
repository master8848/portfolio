import React from "react";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";
import resume from "../images/resume.pdf";

function hero() {
  return (
    <div className="hero-container">
      <img src={profile} alt="profile of saurav sanjel" className="hero-img" />
      <div className="hero-text">
        <p>I am</p>
        <h1>Saurav Sanjel</h1>
        <h3>Fullstack Developer | MERN</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla
          aperiam voluptas quidem eligendi quod nisi voluptatibus sed sequi
          laborum velit aspernatur molestias quia, temporibus blanditiis minus
          quos accusantium suscipit vel quibusdam doloremque. Deserunt?
        </p>
        <div className="grid">
          <Link to="/contact">
            <div className="btn btn-primary">Contact Me</div>
          </Link>
          <a className="btn-primary btn" href="#portfolio">
            Portfolio
          </a>
          <a
            className="btn-primary btn"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default hero;
