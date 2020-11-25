import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import NotExist from "./NotExist";

const CharacterList = (props) => {
  const charactersItems = props.characters
    .filter((character) =>
      // Filtrar independientemente de si es mayúscula o minúscula
      character.name.toUpperCase().includes(props.searchValue.toUpperCase())
    )
    // Filtras nombres por orden alfabético
    .sort((aName, bName) => {
      if (aName.name < bName.name) {
        return -1;
      } else if (aName.name > bName.name) {
        return 1;
      }
      return 0;
    })
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
  // Mostrar componente cuando no hay coincidencia de personaje
  if (charactersItems.length !== 0) {
    return <ul className="character-list">{charactersItems}</ul>;
  } else {
    return <NotExist />;
  }
};

CharacterList.propTypes = {
  characters: PropTypes.array,
  searchValue: PropTypes.string,
};

export default CharacterList;
