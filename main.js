function fetchPokemon(number) {
    fetch(`https://storage.googleapis.com/${number}/`)
      .then((res) => res.json())
      .then((data) => {
        createPokemon(data);
        spinner.style.display = "none";
      });
  }

  function fetchPokemons(offset, limit) {
    spinner.style.display = "block";
    for (let i = offset; i <= offset + limit; i++) {
      fetchPokemon(i);
    }
  }

const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner-border");

let limit = 10;
let offset = 1;

previous.addEventListener("click", () => {
    if (offset != 1) {
      offset -= 9;
      removeChildNodes(pokemonContainer);
      fetchPokemons(offset, limit);
    }
  });

