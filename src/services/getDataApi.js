const getDataApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  ).then((response) => {
    return response.json();
  });
};

export default getDataApi;
