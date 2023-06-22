const apiUrl = `https://pokeapi.co/api/v2/`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API.'); // Tratamento de erro para respostas não bem-sucedidas
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Erro na solicitação da API: ${error.message}`); // Tratamento de exceções
  }
};

export const fetchPokedex = async (start, filter) => {
  const url = filter === 0 ? `${apiUrl}pokemon/?offset=${start}&limit=${11}` : `${apiUrl}type/${filter}`;
  return await fetchData(url);
};

export const fetchPokemon = async (name, type) => {
  const url = !type ?  `${apiUrl}pokemon/${name}/` : type === 0 ? `${apiUrl}pokemon/${name}/` : name;
  return await fetchData(url);
};