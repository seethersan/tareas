var palabra = "tamarindo";
var letrita, res;
var hombre;
var resultado;
var posicion = [];
var resul = [];
var palabraarray = [];
var fondo = {
	imageURL: "images/fondo.png",
	imageOK: false,
};
var horca = {
	imageURL: "images/horca.png",
	imageOK: false,
};
var simpsom = {
	cabezaURL: "images/cabeza.png",
	cabezaOK: false,
	torzoURL: "images/torzo.png",
	torzoOK: false,
	brazosURL: "images/brazos.png",
	brazosOK: false,
	piernasURL: "images/piernas.png",
	piernasOK: false,
}
var Ahorcado = function(contexto){
	this.context = contexto;
	this.maximo = 5;
	this.intentos = 0;
	this.dibujar();
	this.vivo = true;
	this.fallo = true;
}
Ahorcado.prototype.dibujar = function() {
	var dibujo = this.context;
	if (this.vivo == false)
	{
		var solucion = document.getElementById("palabra");
		solucion.innerText = palabra;
	}
	if (fondo.imageOK)
	{
		dibujo.drawImage(fondo.image, 0, 0);
	}
	if (horca.imageOK)
	{
		dibujo.drawImage(horca.image, 150, 50);
	}
	if (this.intentos > 0)
	{
		if (simpsom.cabezaOK)
		{
			dibujo.drawImage(simpsom.cabeza, 270, 90);
		}
		if (this.intentos > 1)
		{
			if (simpsom.torzoOK)
			{
				dibujo.drawImage(simpsom.torzo, 283, 142);
			}
			if (this.intentos > 2)
			{
				if (simpsom.brazosOK)
				{
					dibujo.drawImage(simpsom.brazos, 270, 140);
				}
				if (this.intentos > 3)
				{
					if (simpsom.piernasOK)
					{
						dibujo.drawImage(simpsom.piernas, 275, 173);
					}
					if (this.intentos > 4)
					{
						dibujo.beginPath();
						//ojo izquierdo
						dibujo.moveTo(292,114);
						dibujo.lineTo(302,124);
						dibujo.moveTo(302,114);
						dibujo.lineTo(292,124);
						//ojo derecho
						dibujo.moveTo(307,114);
						dibujo.lineTo(317,124);
						dibujo.moveTo(317,114);
						dibujo.lineTo(307,124);
						dibujo.lineWidth = 5;
						dibujo.strokeStyle = "#0000000";
						dibujo.stroke();
					}
				}
			}
		}
	} 
};
function confirmarFondo() {
	fondo.imageOK = true;
	hombre.dibujar();
};
function confirmarHorca(){
	horca.imageOK = true;
	hombre.dibujar();
};
function confirmarCabeza() {
	simpsom.cabezaOK = true;
	hombre.dibujar();
};
function confirmarTorzo() {
	simpsom.torzoOK = true;
	hombre.dibujar();
};
function confirmarBrazos() {
	simpsom.brazosOK = true;
	hombre.dibujar();
};
function confirmarPiernas() {
	simpsom.piernasOK = true;
	hombre.dibujar();
};
Ahorcado.prototype.trazar = function(){
	this.intentos++;
	if (this.intentos == this.maximo)
	{
		this.vivo = false;
		alert("Estás muerto muajajajaja!");
		letra.disabled = !hombre.vivo;
	}
	this.dibujar();
}
function mandarLetra()
{
	hombre.fallo = true;
	letra = document.getElementById("letra");
	
	if (letra.value.length == 0)
	{
		alert("ingrese una letra!")
		letra.focus();
	}
	else
	{
		letrita = letra.value
		if (letrita.match(/[a-z]/) != "")
		{
			palabraarray = palabra.split("");
			resul = resultado.innerText.split("");
			for (i = 0; i < palabraarray.length; i++)
			{
				if (palabraarray[i] == letrita)
				{
					hombre.fallo = false;
					var resulstr = "";
					resul[i*2] = letrita;
					for (n = 0; n < resul.length; n++)
					{
						resulstr += resul[n];
					}
					resultado.innerText = resulstr;
				}
			}
			letra.value = "";
		}
		if (hombre.fallo)
		{
			hombre.trazar();
		}
	}
}
function guiones(word)
{
	var palastr = "";
	var array = [];
	array = word.split("");
	for (f = 0; f < (array.length * 2 - 1); f++)
	{
		if ((f % 2) == 0)
		{
			palastr = palastr + "_";
		}
		else
		{
			palastr = palastr + " ";
		}
	}
	resultado.innerText = palastr;
}
function inicio()
{
	canvas = document.getElementById("campo");
	canvas.width = 500;
	canvas.height = 400;
	contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	resultado = document.getElementById("resultado");
	letra.maxLength = 1;
	boton = document.getElementById("boton");
	boton.addEventListener("click",mandarLetra);	
	fondo.image = new Image();
	fondo.image.src = fondo.imageURL;
	fondo.image.onload = confirmarFondo;
	horca.image = new Image();
	horca.image.src = horca.imageURL;
	horca.image.onload = confirmarHorca;
	simpsom.cabeza = new Image();
	simpsom.cabeza.src = simpsom.cabezaURL;
	simpsom.cabeza.onload = confirmarCabeza;
	simpsom.torzo = new Image();
	simpsom.torzo.src = simpsom.torzoURL;
	simpsom.torzo.onload = confirmarTorzo;
	simpsom.brazos = new Image();
	simpsom.brazos.src = simpsom.brazosURL;
	simpsom.brazos.onload = confirmarBrazos;
	simpsom.piernas = new Image();
	simpsom.piernas.src = simpsom.piernasURL;
	simpsom.piernas.onload = confirmarPiernas;
	guiones(palabra);
}
