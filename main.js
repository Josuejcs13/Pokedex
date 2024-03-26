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
const baseStatsDisplay = document.querySelector("#stats h3")
const statsType = document.querySelector("#stats-type")
const containerStat = document.querySelector("#result")

let pokemonId

const body = document.body

const printInfoPokemon = async (nameId) => {
  const pokemon = await fetchPokemon(nameId)

  containerStat.innerHTML = ""
  containerTypes.innerHTML = ""
  pokemonId = pokemon.id

  const firstType = pokemon.types[0].type.name

  body.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--${firstType}-color`)
  aboutColor.style.color = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--${firstType}-color`)
  baseStatsDisplay.style.color = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--${firstType}-color`)
  statsType.style.color = getComputedStyle(
    document.documentElement
  ).getPropertyValue(`--${firstType}-color`)

  imagePokemon.src = pokemon.image()
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
  pokemon.stats.forEach((stat) => {
    const statValue = document.createElement("p")
    statValue.textContent = stat.base_stat
    containerStat.appendChild(statValue)
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

const pressKey = (event) => {
  if (event.key === "ArrowRight") {
    proximo()
  }
  if (event.key === "ArrowLeft") {
    anterior()
  }
}
window.addEventListener("keydown", pressKey)

printInfoPokemon("1")
