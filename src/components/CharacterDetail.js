import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/CharacterDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faOctopusDeploy } from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
// He tenido que instalar con npm la biblioteca de iconos específica para React de Font Awesome para pintar los iconos.

const CharacterDetail = (props) => {
  const status =
    props.status === "Dead" ? (
      <FontAwesomeIcon icon={faSkullCrossbones} />
    ) : props.status === "Alive" ? (
      <FontAwesomeIcon icon={faHeartbeat} />
    ) : props.status === "unknown" ? (
      <FontAwesomeIcon icon={faQuestion} />
    ) : (
      props.status
    );
  const species =
    props.species === "Alien" ? (
      <FontAwesomeIcon icon={faOctopusDeploy} />
    ) : props.species === "Human" ? (
      <FontAwesomeIcon icon={faUserAlt} />
    ) : (
      props.species
    );
  return (
    <div className="container-detail">
      <Link className="goback-link" to="/">
        <button className="back-btn">Go back</button>
      </Link>
      <article className="detail-character">
        <img className="image-detail" src={props.image} alt={props.name} />
        <h2 className="name-detail">{props.name}</h2>
        <ul className="detail-list">
          <li className="species li">
            Species: <span className="info">{species}</span>
          </li>
          <li className="origin li">
            Planet of origin: <span className="info">{props.origin}</span>
          </li>
          <li className="episodes li">
            Appears in:{" "}
            <span className="info">
              {props.episodes.length}
              episodes
            </span>
          </li>
          <li className="status li">
            Status: <span className="info">{status}</span>
          </li>
        </ul>
      </article>
    </div>
  );
};
export default CharacterDetail;
