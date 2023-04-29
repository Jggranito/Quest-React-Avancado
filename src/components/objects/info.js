import { getPokemon } from "../../api/api";

export const getInfo = async (pokemon) => {
    const moreInfo = {
        moreInfoPokemon: [],
        async setPokemonData(pokemonName) {
            const pokemon = await getPokemon(pokemonName);
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
            }
            const abilities = pokemon.abilities
            abilities.map(async (ability) => {
                const responseAbility = await fetch(ability.ability.url)
                const responseJson = await responseAbility.json()
                let descript
                responseJson.effect_entries.map(e => {
                    if (e.language.name === 'en') descript = e.short_effect
                    return undefined;
                })

                ability.ability = {
                    name: ability.ability.name,
                    description: descript
                }
            })
            const moves = {
                levelUp: [],
                tm: [],
                egg: [],
                tutor: []
            }

            pokemon.moves.map(async (move, index) => {
                const responseMoves = await fetch(move.move.url)
                const responseJson = await responseMoves.json()

                switch (move.version_group_details[0].move_learn_method.name) {
                    case 'level-up':
                        moves.levelUp.push({
                            levelLearned: move.version_group_details[0].level_learned_at,
                            name: responseJson.name,
                            type: responseJson.type.name,
                            pp: responseJson.pp,
                            power: responseJson.power,
                            accuracy: responseJson.accuracy,
                            category: responseJson.damage_class.name,
                            description: responseJson.effect_entries[0] ? responseJson.effect_entries[0].effect : 'no description'
                        })
                        break;
                    case 'machine':
                        moves.tm.push({
                            name: responseJson.name,
                            type: responseJson.type.name,
                            pp: responseJson.pp,
                            power: responseJson.power,
                            accuracy: responseJson.accuracy,
                            category: responseJson.damage_class.name,
                            description: responseJson.effect_entries[0] ? responseJson.effect_entries[0].effect : 'no description'
                        })
                        break;
                    case 'egg':
                        moves.egg.push({
                            name: responseJson.name,
                            type: responseJson.type.name,
                            pp: responseJson.pp,
                            power: responseJson.power,
                            accuracy: responseJson.accuracy,
                            category: responseJson.damage_class.name,
                            description: responseJson.effect_entries[0] ? responseJson.effect_entries[0].effect : 'no description'
                        })
                        break;
                    case 'tutor':
                        moves.tutor.push({
                            name: responseJson.name,
                            type: responseJson.type.name,
                            pp: responseJson.pp,
                            power: responseJson.power,
                            accuracy: responseJson.accuracy,
                            category: responseJson.damage_class.name,
                            description: responseJson.effect_entries[0] ? responseJson.effect_entries[0].effect : 'no description'
                        })
                        break;
                    default: break;
                }
                delete move.version_group_details
                delete move.move
            })
            this.moreInfoPokemon = { stats, abilities, moves };
        },
    };
    await moreInfo.setPokemonData(pokemon)

    return moreInfo.moreInfoPokemon;
}