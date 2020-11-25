import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <>
      <Link className="link-detail" to={`/character-detail/${props.id}`}>
        <div className="character-container">
          <img className="character-img" src={props.image} alt="" title="" />
          <h2 className="character-name">{props.name}</h2>
          <h3 className="character-species">{props.species}</h3>
        </div>
      </Link>
    </>
  );
};
CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
