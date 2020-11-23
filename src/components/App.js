import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import getDataApi from "../services/getDataApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  return (
    <>
      <div>
        <CharacterList className="character-list" characters={characters} />
      </div>
    </>
  );
};

export default App;
