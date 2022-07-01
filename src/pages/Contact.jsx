import React from "react";
import github from "../images/logo-github.png";
import linkedin from "../images/logo-linkedin.png";

function contact() {
  return (
    <div className="container-contact">
      <h1>Saurav Sanjel - Contact info</h1>
      <div className="container-table">
        <div className="table">
          <p>Contact number : </p>
          <p>+977-9863992717</p>
        </div>
        <div className="table">
          <p>Gmail : </p>
          <p>sauravsanjelgg@gmail.com</p>
        </div>
      </div>
      <div className="logo-media">
        <a
          href="http://github.com/master8848"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github-logo" className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/saurav-sanjel-master"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="github-logo" className="logo" />
        </a>
      </div>
    </div>
  );
}

export default contact;
