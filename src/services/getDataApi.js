const getDataApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getDataApi;
