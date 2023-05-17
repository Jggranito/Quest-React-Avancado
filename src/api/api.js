const apiUrl = `https://pokeapi.co/api/v2/`;

const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const getPokedex = async (start, filter) => {
  let url
  filter === 0 ? url = `${apiUrl}pokemon/?offset=${start}&limit=${10}` : url = `${apiUrl}type/${filter}`
  return await fetchData(url);
};

export const getPokemon = async (name, type) => {
  let url
  !type ? url = `${apiUrl}pokemon/${name}/` : type === 0 ? url = `${apiUrl}pokemon/${name}/` : url = name;
  return await fetchData(url);
};