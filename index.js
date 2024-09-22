const pokemonName = document.querySelector("#pokemonName");


async function searchPokemon() {
    const name = pokemonName.value;
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok){
            throw Error("Pokemon not found");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        document.querySelector("#pokemonSprite").style.display = "block";
        document.querySelector("#pokemonSprite").src = pokemonSprite;
    }
    catch(err){
        console.log(err);
    }
}