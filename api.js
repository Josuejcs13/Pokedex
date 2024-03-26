export const fetchPokemon = async (nameId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameId}`)
    const data = await response.json()

    const returnInfos = {
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      id: data.id,
      idDisplay: `#0${data.id}`,
      imageApi: data.sprites.front_default,
      types: data.types,
      weight: `${data.weight}kg`,
      height: `${data.height}cm`,
      stats: data.stats,
      image: function returnImage() {
        const imagePoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
        return imagePoke
      },
    }
    return returnInfos
  } catch (error) {}
}
