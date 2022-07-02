import React from "react";

function Website(props) {
  return (
    <a
      href={props.link}
      className="container-website"
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure>
        <img
          src={props.image}
          alt={`${props.caption} website in ${props.link}`}
          className="website"
        />
        <figcaption className="caption">{props.caption}</figcaption>
      </figure>
    </a>
  );
}

export default Website;
