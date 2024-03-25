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
      weight: `${data.weight}g`,
      height: `${data.height}m`,
      stats: data.stats,
    }

    return returnInfos
  } catch (error) {}
}
