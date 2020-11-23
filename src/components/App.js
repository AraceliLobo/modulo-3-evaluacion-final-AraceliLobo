import React, { useState, useEffect } from "react";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import "../stylesheets/App.scss";
import getDataApi from "../services/getDataApi";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const dataApi = () => {
    getDataApi().then((data) => {
      setCharacters(data.results);
    });
  };
  const handleInputChange = (inputValue) => {
    setSearchValue(inputValue);
  };

  useEffect(() => {
    dataApi();
  }, []);
  return (
    <>
      <body className="body">
        <div className="container">
          <Header></Header>
          <main>
            <Filters
              searchValue={searchValue}
              handleInputChange={handleInputChange}
            />
            <CharacterList searchValue={searchValue} characters={characters} />
          </main>
        </div>
      </body>
    </>
  );
}

export default App;