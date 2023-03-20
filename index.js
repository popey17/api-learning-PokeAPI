$(document).ready(function () {
  $(".search").click(function () {
    let name = $(".pokemonName").val().toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((Response) => Response.json())
      .then((data) => {
        $(".pokemonBox").html(`
            <div>
                <img 
                src="${data.sprites.other["official-artwork"].front_default}" 
                alt="${data.name}" />
            </div>
            <div class="pokemonInfo">
                <h1>${data.name}</h1>
                <p> Type : ${data.types[0].type.name} </p>
                <p>Weight : ${data.weight}</p>
            </div>
            `);
      })
      .catch((err) => {
        console.log("pokemon not found");
      });
  });
});
