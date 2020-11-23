import React from "react";

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

export default CharacterCard;
