var dibujo;
var canvas;
var grilla, diagonal, circulos, clear;
var numero, n;
//funcion aleatorio obtenida de http://www.desarrolloweb.com/articulos/2005.php
function aleatorio(inferior,superior){ 
   numPosibilidades = superior - inferior 
   aleat = Math.random() * numPosibilidades 
   aleat = Math.floor(aleat) 
   return parseInt(inferior) + aleat 
}
function dibujarGrilla(canvas,width,height)
{
	numero = document.getElementById("lineas");
	var lineas = Number(numero.value);
	var linea;
	for (linea = 0; linea <= lineas; linea++)
	{
		var ancho = width/lineas;
		var largo = height/lineas;
		canvas.beginPath();
		canvas.strokeStyle = "#AAA";
		canvas.moveTo(ancho * linea , 0);
		canvas.lineTo(ancho * linea , height);
		canvas.stroke();
		canvas.closePath();
		canvas.beginPath();
		canvas.strokeStyle = "#AAA";
		canvas.moveTo(0 , largo * linea);
		canvas.lineTo(width , largo * linea);
		canvas.stroke();
	}
}
function dibujarDiagonal(canvas,width,height)
{
	numero = document.getElementById("lineas");
	var lineas = Number(numero.value);
	var linea;
	for (linea = 0; linea <= lineas; linea++)
	{
		var ancho = width/lineas;
		var largo = height/lineas;
		canvas.beginPath();
		canvas.strokeStyle = "#AAA";
		canvas.moveTo(ancho * linea * 2 , 300);
		canvas.lineTo(0 , height - ancho * linea * 2);
		canvas.stroke();
		canvas.closePath();
		canvas.beginPath();
		canvas.strokeStyle = "#AAA";
		canvas.moveTo(0 , largo * linea * 2);
		canvas.lineTo(largo * linea * 2 , 0);
		canvas.stroke();
	}
}
function dibujarCirculos(canvas,width,height)
{
	numero = document.getElementById("lineas");
	var cantidad = Number(numero.value);
	var linea;
	for (linea = cantidad; linea >= 0; linea--)
	{
		//obtener color RGB aleatorio, codigo obtenido de http://www.desarrolloweb.com/articulos/2005.php
		hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
		color_aleatorio = "#"; 
		for (i=0;i<6;i++){ 
		   posarray = aleatorio(0,hexadecimal.length) 
		   color_aleatorio += hexadecimal[posarray] 
		}
		var ancho = width/cantidad;
		var largo = height/cantidad;
		canvas.fillStyle = color_aleatorio;
		canvas.beginPath();
		canvas.strokeStyle = color_aleatorio;
		canvas.arc(width/2,height/2,linea*ancho/2,Math.PI*2,false);
		canvas.closePath();
		canvas.fill();
	}
}
//limpiar canvas
function limpiar(canvas, iniciox, inicioy, width, height)
{
	canvas.clearRect(iniciox, inicioy, width, height);
}
function inicio()
{
	grilla = document.getElementById("grilla");
	diagonal = document.getElementById("diagonal");
	circulos = document.getElementById("circulos");
	dibujo = document.getElementById("dibujo");
	clear = document.getElementById("clear");
	context = dibujo.getContext("2d");
	var height = context.canvas.height;
	var width = context.canvas.width;
	grilla.addEventListener("click", function(){
		dibujarGrilla(context,height,width);
		}, false);
	diagonal.addEventListener("click", function(){
		dibujarDiagonal(context,height,width);
		}, false);
	circulos.addEventListener("click", function(){
		dibujarCirculos(context,height,width);
		}, false);
	clear.addEventListener("click", function(){
		limpiar(context,0,0,height,width);
		}, false);
}