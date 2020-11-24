import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charactersItems = props.characters
    .filter((character) =>
      character.name.toUpperCase().includes(props.searchValue.toUpperCase())
    )
    .map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard
            image={character.image}
            name={character.name}
            species={character.species}
            id={character.id}
          />
        </li>
      );
    });

  return <ul className="character-list">{charactersItems}</ul>;
};
CharacterList.propTypes = {
  characters: PropTypes.array,
  searchValue: PropTypes.string,
};

export default CharacterList;
