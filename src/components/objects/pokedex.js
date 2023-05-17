import { getPokemon, getPokedex } from "../../api/api";

export const setPokedex = async (start, filter) => {
  const pokedex = {
    infoPokemon: [],
    async setPokemonData(pokemonName, index, type) {
      const pokemon = await getPokemon(pokemonName, type);
      const name = pokemon.name
      const sprites = {
        simpleSprite: pokemon.sprites.other["official-artwork"].front_default,
        spriteAnimatedUrl: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default ? pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default : pokemon.sprites.other["official-artwork"].front_default,
        spriteVIIIGen: pokemon.sprites.versions["generation-vii"].icons.front_default
      }
      let id = '0000' + pokemon.id;
      while (id.length > 5) {
        id = id.substring(1)
      }
      const types = {
        1: pokemon.types[0].type.name,
        2: pokemon.types[1] ? pokemon.types[1].type.name : ""
      };
      this.infoPokemon[index] = { name, sprites, id, types };
    },
  };

  const responsePokedex = await getPokedex(start, filter);
  await Promise.all(filter === 0 ? responsePokedex.results.map(async (pokemonName, index) => {
    await pokedex.setPokemonData(pokemonName.name, index, filter);
  }) 
  :
  responsePokedex.pokemon.map(async (pokemonName, index) => {
    await pokedex.setPokemonData(pokemonName.pokemon.url, index, filter);
  })
  );

  return pokedex.infoPokemon;
};