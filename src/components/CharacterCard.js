import React from "react";
import PropTypes from "prop-types";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
// import { faOctopusDeploy } from "@fortawesome/free-solid-svg-icons";

const CharacterCard = (props) => {
  return (
    <>
      <div className="character-container">
        <img className="character-img" src={props.image} alt="" title="" />
        <h2 className="character-name">{props.name}</h2>
        <h3 className="character-species">{props.species}</h3>
      </div>
    </>
  );
};
CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
