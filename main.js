import { fetchPokemon } from "./api"

const inputSearch = document.querySelector("#search")
const buttonSearch = document.querySelector("#button-search")
const aboutColor = document.querySelector("#color-about")
const namePokemon = document.querySelector("#name-Pokemon")
const idPokemonDisplay = document.querySelector("#pokemonId")
const weightPokemon = document.querySelector("#weight p")
const heightPokemon = document.querySelector("#height p")
const containerTypes = document.querySelector("#types")
const imagePokemon = document.querySelector("#image-Pokemon")
const buttonAnterior = document.querySelector("#anterior")
const buttonProximo = document.querySelector("#proximo")

let pokemonId

const body = document.body

const printInfoPokemon = async (nameId) => {
  const pokemon = await fetchPokemon(nameId)

  containerTypes.innerHTML = ""
  pokemonId = pokemon.id

  console.log(pokemonId)
  const firstType = pokemon.types[0].type.name

  body.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--${firstType}-color`)
  aboutColor.style.color = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--${firstType}-color`)

  imagePokemon.src = pokemon.image

  namePokemon.textContent = pokemon.name
  idPokemonDisplay.textContent = pokemon.idDisplay
  weightPokemon.textContent = pokemon.weight
  heightPokemon.textContent = pokemon.height

  pokemon.types.forEach((type) => {
    const typeElement = document.createElement("div")
    typeElement.textContent = type.type.name
    typeElement.classList.add("type1")
    typeElement.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--${type.type.name}-color`)
    containerTypes.appendChild(typeElement)
  })
}

const proximo = () => {
  printInfoPokemon(pokemonId + 1)
  inputSearch.innerText = ""
}

buttonProximo.addEventListener("click", proximo)

const anterior = () => {
  if (pokemonId > 1) {
    printInfoPokemon(pokemonId - 1)
  }
}

buttonAnterior.addEventListener("click", anterior)

const pesquisarPokemon = () => {
  const pokemon = inputSearch.value
  printInfoPokemon(pokemon)
  inputSearch.value = ""
}

buttonSearch.addEventListener("click", pesquisarPokemon)

printInfoPokemon("1")
