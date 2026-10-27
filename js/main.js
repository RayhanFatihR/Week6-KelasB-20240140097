
const pokemonList = document.getElementById("pokemonList");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const searchInput = document.getElementById("searchInput");
const reloadButton = document.getElementById("reloadButton");

async function getPokemon() {
    loadingMessage.textContent = "Memuat data Pokémon...";
    errorMessage.textContent = "";
    pokemonList.innerHTML = "";

    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data Pokémon.");
        }

        const data = await response.json();

        data.results.forEach((pokemon, index) => {
            const card = document.createElement("div");
            card.classList.add("pokemon-card");

            const image = document.createElement("img");
            image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
            image.alt = pokemon.name;

            const name = document.createElement("h3");
            name.textContent = pokemon.name;

            card.appendChild(image);
            card.appendChild(name);
            pokemonList.appendChild(card);
        });

        loadingMessage.textContent = "";
    } catch (error) {
        loadingMessage.textContent = "";
        errorMessage.textContent =
            "Terjadi kesalahan saat mengambil data Pokémon.";
        console.error(error);
    }
}

reloadButton.addEventListener("click", getPokemon);

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".pokemon-card");

    cards.forEach((card) => {
        const name = card.textContent.toLowerCase();

        if (name.includes(keyword)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});

getPokemon();
