const apiUrl = `https://pokeapi.co/api/v2/`;

const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const getPokedex = async (start, filter) => {
  const url = filter === 0 ? `${apiUrl}pokemon/?offset=${start}&limit=${11}` : `${apiUrl}type/${filter}`
  return await fetchData(url);
};

export const getPokemon = async (name, type) => {
  const url = !type ?  `${apiUrl}pokemon/${name}/` : type === 0 ? `${apiUrl}pokemon/${name}/` : name;
  return await fetchData(url);
};