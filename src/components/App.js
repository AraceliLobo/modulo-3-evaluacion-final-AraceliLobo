import React, { useState, useEffect } from "react";
import Header from "./Header";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Filters from "./Filters";
import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import getDataApi from "../services/getDataApi";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Api
  const dataApi = () => {
    getDataApi().then((data) => {
      setCharacters(data.results);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    dataApi();
  }, []);

  // Evento
  const handleInputChange = (inputValue) => {
    setSearchValue(inputValue);
  };
  // Link al detalle del personaje
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === character.id;
    });

    if (foundCharacter) {
      return (
        <CharacterDetail
          image={foundCharacter.image}
          name={foundCharacter.name}
          species={foundCharacter.species}
          origin={foundCharacter.origin.name}
          episodes={foundCharacter.episode}
          status={foundCharacter.status}
        />
      );
    }
    return <NotFound />;
  };
  //Mostrar gif de loading cuando la página está cargando
  return (
    <>
      {isLoading === true ? <Loading /> : null}
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              searchValue={searchValue}
              handleInputChange={handleInputChange}
            />
            <CharacterList searchValue={searchValue} characters={characters} />
          </Route>
          <Route path="/character-detail/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </>
  );
}

export default App;
