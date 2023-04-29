const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;

const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const getPokedex = async (start) => {
  const url = `${apiUrl}?offset=${start}&limit=${10}`;
  return await fetchData(url);
};

export const getPokemon = async (name) => {
  const url = `${apiUrl}${name}/`;
  return await fetchData(url);
};