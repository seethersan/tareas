var dibujo;
var canvas;
var grilla, diagonal, circulos, clear;
var numero, n;
function dibujarGrilla(canvas,width,height)
{
	numero = document.getElementById("lineas");
	var lineas = Number(numero.value);
	var linea;
	for (linea = 0; linea <= lineas; linea++)
	{
		var ancho = width/lineas
		var largo = height/lineas
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
		var ancho = width/lineas
		var largo = height/lineas
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
	for (linea = 0; linea <= cantidad; linea++)
	{
		var ancho = width/cantidad
		var largo = height/cantidad
		canvas.beginPath();
		context.strokeStyle = "#00f";
		context.arc(width/2,height/2,linea*ancho/2,Math.PI*2,false);
		context.closePath();
		context.stroke();
	}
}
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