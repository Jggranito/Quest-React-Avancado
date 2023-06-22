import { fetchPokemon } from "../../api/api";

export const getInfo = async (pokemon) => {
    const moreInfo = {
        moreInfoPokemon: {},
        async setPokemonData(pokemonName) {
            try {
                const pokemon = await fetchPokemon(pokemonName);
                const stats = {
                    hp: pokemon.stats[0].base_stat,
                    attack: pokemon.stats[1].base_stat,
                    defence: pokemon.stats[2].base_stat,
                    specialAttack: pokemon.stats[3].base_stat,
                    specialDefense: pokemon.stats[4].base_stat,
                    speed: pokemon.stats[5].base_stat,
                    exp: pokemon.base_experience,
                    weight: pokemon.weight,
                    nextLevel: parseInt(pokemon.base_experience) + parseInt(pokemon.base_experience) * 0.11
                };

                const abilities = await Promise.all(pokemon.abilities.map(async (ability) => {
                    const responseAbility = await fetch(ability.ability.url);
                    const responseJson = await responseAbility.json();
                    const description = responseJson.effect_entries.find(entry => entry.language.name === 'en');
                    return {
                        name: ability.ability.name,
                        description: description ? description.short_effect : 'No description'
                    };
                }));

                const moves = {
                    levelUp: [],
                    tm: [],
                    egg: [],
                    tutor: []
                };

                await Promise.all(pokemon.moves.map(async (move) => {
                    const responseMoves = await fetch(move.move.url);
                    const responseJson = await responseMoves.json();

                    const moveData = {
                        name: responseJson.name,
                        type: responseJson.type.name,
                        pp: responseJson.pp,
                        power: responseJson.power,
                        accuracy: responseJson.accuracy,
                        category: responseJson.damage_class.name,
                        description: responseJson.effect_entries.length ? responseJson.effect_entries[0].effect : 'No description'
                    };

                    switch (move.version_group_details[0].move_learn_method.name) {
                        case 'level-up':
                            moves.levelUp.push({
                                levelLearned: move.version_group_details[0].level_learned_at,
                                ...moveData
                            });
                            break;
                        case 'machine':
                            moves.tm.push(moveData);
                            break;
                        case 'egg':
                            moves.egg.push(moveData);
                            break;
                        case 'tutor':
                            moves.tutor.push(moveData);
                            break;
                        default:
                            break;
                    }
                }));

                this.moreInfoPokemon = { stats, abilities, moves };
            } catch (error) {
                console.error('Erro ao obter informações do Pokémon:', error);
            }
        },
    };

    await moreInfo.setPokemonData(pokemon);

    return moreInfo.moreInfoPokemon;
};