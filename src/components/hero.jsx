import React from "react";
import profile from "../images/profile.jpg";
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
          Web developer who can work in a team. Help out on skill development
          for team members.Fast learner and can grasp new things quickly
          including complicated concepts and problem solving techniques.
        </p>
        <p>
          Willing to take challenges and help others out while being in the
          process of learning.
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
