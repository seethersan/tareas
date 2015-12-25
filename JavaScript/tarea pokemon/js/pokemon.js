function Pokemon(gritoPoke,nombrePoke,tipoPoke,vidaPoke,ataPoke, imaPoke)
{
	this.grito = gritoPoke
	this.nombre = nombrePoke,
	this.tipo = tipoPoke,
	this.vida = vidaPoke,
	this.ataque = ataPoke,
	this.imagen = imaPoke,

	this.gritar = function()
	{
		alert(this.grito)
	}
}
function MostrarPokemon(pokemon)
{
	nombrePokemon.innerText = pokemon.nombre;
	datosPokemon.innerText = "El pokemon se llama " + pokemon.nombre + ", es de tipo " + pokemon.tipo + ", tiene una vida " + pokemon.vida + " un ataque de " + pokemon.ataque + " y su grito es " + pokemon.grito
	pokemon.gritar();
	var imagen = document.createElement("IMG");
	imagen.setAttribute("src", pokemon.imagen);
	document.body.appendChild(imagen);
}
function inicio()
{
	var pikachu = new Pokemon("Pika!","Pikachu","Eléctrico",100,55, "images/pikachu.png");
	var bulbasaur = new Pokemon("Bulba!","Bulbasaur","Planta",90,50, "images/bulbasaur.jpg");
	seleccion = prompt("Pokemon!!! Escoja un pokemon: \n 1: Pikachu \n 2: Bulbasaur")
	if (seleccion == 1)
	{
		MostrarPokemon(pikachu);
	}
	else if(seleccion == 2)
	{
		MostrarPokemon(bulbasaur);
	}
	else
	{
		alert("Seleccione una opción válida!!!!")
	}
}
