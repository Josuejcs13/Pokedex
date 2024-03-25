export const fetchPokemon = async (nameId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameId}`)
    const data = await response.json()

    const returnInfos = {
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      id: data.id,
      idDisplay: `#0${data.id}`,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${nameId}.png`,
      imageApi: data.sprites.front_default,
      types: data.types,
      // type: data.types[0].type.name,
      weight: `${data.weight}g`,
      height: `${data.height}m`,

      stat: {
        stats: data.stats,
        hp: data.stats.base_stat,
        atk: data.stats.base_stat,
        def: data.stats.base_stat,
        sAtk: data.stats.base_stat,
        sDef: data.stats.base_stat,
        spd: data.stats.base_stat,
      },
    }

    return returnInfos
  } catch (error) {}
}
