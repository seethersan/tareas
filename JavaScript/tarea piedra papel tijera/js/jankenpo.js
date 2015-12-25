function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);
var resultado;

var i = 0;
var n = 0;
while(i == 0){
	opcionUsuario = prompt("¿Que eliges? \n Piedra: 0 \n Papel: 1 \n Tijera: 2 \n Lagarto: 3 \n Spock: 4", "0");
	if(opcionUsuario == piedra)
	{
		i = 1
		if(opcionMaquina == piedra)
		{
			resultado = "Empate!!";
		}
		else if(opcionMaquina == papel)
		{
			resultado = "Perdiste!!"
		}
		else if(opcionMaquina = tijera)
		{
			resultado = "Ganaste!!";
		}
		else if(opcionMaquina = lagarto)
		{
			resultado = "Ganaste!!"
		}
		else if(opcionMaquina = spock)
		{
			resultado = "Perdiste!!"
		}
	}
	else if(opcionUsuario == papel)
	{
		i = 1
		if(opcionMaquina == piedra)
		{
			resultado = "Ganaste!!";
		}
		else if(opcionMaquina == papel)
		{
			resultado = "Empate!!";
		}
		else if(opcionMaquina = tijera)
		{
			resultado = "Perdiste!!";
		}
		else if(opcionMaquina = lagarto)
		{
			resultado = "Perdiste!!"
		}
		else if(opcionMaquina = spock)
		{
			resultado = "Ganaste!!"
		}
	}
	else if(opcionUsuario == tijera)
	{
		i = 1
		if(opcionMaquina == piedra)
		{
			resultado = "Perdiste!!";
		}
		else if(opcionMaquina == papel)
		{
			resultado = "Ganaste!!";
		}
		else if(opcionMaquina = tijera)
		{
			resultado = "Empate!!";
		}
		else if(opcionMaquina = lagarto)
		{
			resultado = "Ganaste!!"
		}
		else if(opcionMaquina = spock)
		{
			resultado = "Perdiste!!"
		}
	}
	else if(opcionUsuario == lagarto)
	{
		i = 1
		if(opcionMaquina == piedra)
		{
			resultado = "Perdiste!!";
		}
		else if(opcionMaquina == papel)
		{
			resultado = "Ganaste!!";
		}
		else if(opcionMaquina = tijera)
		{
			resultado = "Perdiste!!";
		}
		else if(opcionMaquina = lagarto)
		{
			resultado = "Empate!!"
		}
		else if(opcionMaquina = spock)
		{
			resultado = "Ganaste!!"
		}
	}
	else if(opcionUsuario == spock)
	{
		i = 1
		if(opcionMaquina == piedra)
		{
			resultado = "Ganaste!!";
		}
		else if(opcionMaquina == papel)
		{
			resultado = "Perdiste!!";
		}
		else if(opcionMaquina = tijera)
		{
			resultado = "Ganaste!!";
		}
		else if(opcionMaquina = lagarto)
		{
			resultado = "Perdiste!!"
		}
		else if(opcionMaquina = spock)
		{
			resultado = "Enmpate!!"
		}
	}
	else
	{
		n++
		alert("Escoja una opcion valida!!!");
	}
}
alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript eligio " + opciones[opcionMaquina]);
alert(resultado);

