import React from "react";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
// import "../stylesheets/_CharacterDetail.scss";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
// // import { faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <>
        <Link to="/" className="linkDetail">
          <p>Go back</p>
        </Link>
        <NotFound />
      </>
    );
  } else
    return (
      <>
        <Link to="/" className="linkdetail">
          <p>Go back</p>
        </Link>
        <article className="detail">
          <img
            className="detail-image"
            src={props.character.img}
            alt={props.character.name}
          />
          <div className="detail-container">
            <h2 className="detail-name">{props.character.name}</h2>
            <h3 className="detail-species">{props.character.species}</h3>
            <h3 className="detail-origin">{props.character.origin}</h3>
            <h3 className="detail-status">{props.character.status}</h3>
          </div>
        </article>
      </>
    );
};

export default CharacterDetail;
