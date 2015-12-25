var tablero;
var movimiento;
var dianaDibujo;
var teclas = {
	arriba: 38,
	abajo: 40,
	derecha: 39,
	izquierda: 37
}
var fondo = {
	imageURL: "images/fondo.png",
	imageOK: false
};
var diana = {
	x: 0,
	y: 0,
	frenteURL: "images/diana-frente.png",
	frenteOK: false,
	derURL: "images/diana-der.png",
	derOK: false,
	izURL: "images/diana-izq.png",
	izOK: false,
	atrasURL: "images/diana-atras.png",
	atrasOK: false,
	velocidad: 50
};
var liz = {
	x: 400,
	y: 200,
	imageURL: "images/liz.png",
	imageOK: false	
};

function dibujar(codigo)
{
	if (fondo.imageOK)
	{
		tablero.drawImage(fondo.image, 0, 0);
	}
	if (liz.imageOK)
	{
		tablero.drawImage(liz.image,liz.x,liz.y);
	}
	if (diana.frenteOK && diana.derOK && diana.izOK && diana.atrasOK)
	{
		var dianaDibujo = diana.frente;
		if (codigo == teclas.arriba)
		{
			dianaDibujo = diana.atras;
		}	
		if (codigo == teclas.abajo)
		{
			dianaDibujo = diana.frente;
		}
		if (codigo == teclas.izquierda)
		{
			dianaDibujo = diana.iz;
		}
		if (codigo == teclas.derecha)
		{
			dianaDibujo = diana.der;
		}
		tablero.drawImage(dianaDibujo,diana.x,diana.y);
	}	
}
function confirmarFondo()
{
	fondo.imageOK = true;
	dibujar();
}
function confirmarFrente()
{
	diana.frenteOK = true;
	dibujar();
}
function confirmarDer()
{
	diana.derOK = true;
	dibujar();
}
function confirmarIz()
{
	diana.izOK = true;
	dibujar();
}
function confirmarAtras()
{
	diana.atrasOK = true;
	dibujar();
}
function confirmarLiz()
{
	liz.imageOK = true;
	dibujar();
}
function limites(codigo)
{
	if (diana.x  >= 0 && diana.x < 500 && diana.y >= 0 && diana.y < 500)
	{
		if (codigo == teclas.derecha)
		{
			if (diana.x < 150)
			{
				if (diana.x < 100)
				{
					moverDerecha(codigo);
				}
				else if (diana.y <= 300)
				{
					moverDerecha(codigo);
				}
				else if (diana.y >= 400)
				{
					moverDerecha(codigo);
				}				
			}
			else if (diana.x >= 200)
			{
				moverDerecha(codigo);
			}
			else if (diana.y >= 250)
			{
				moverDerecha(codigo);
			}						
		}
		if (codigo == teclas.arriba)
		{
			if (diana.y < 250)
			{
				moverArriba(codigo);		
			}
			else if (diana.y >= 300)
			{
				if (diana.y <= 350)
				{
					moverArriba(codigo);
				}
				else if (diana.y >= 450)
				{
					moverArriba(codigo);
				}
				else if (diana.x < 150)
				{
					moverArriba(codigo);					
				}				
			}
			else if (diana.x >= 150)
			{
				if (diana.x < 200)
				{
					moverArriba(codigo);
				}
				else if (diana.x >= 250)
				{
					moverArriba(codigo);
				}
			}						
		}
		if (codigo == teclas.abajo)
		{
			if (diana.y < 150)
			{
				moverAbajo(codigo);
			}
			else if (diana.y >= 250)
			{
				if (diana.y < 300)
				{
					moverAbajo(codigo);
				}
				else if (diana.y >= 400)
				{
					moverAbajo(codigo);
				}
				else if (diana.x <= 100)
				{
					moverAbajo(codigo);
				}				
			}
			else if (diana.x >= 150)
			{
				moverAbajo(codigo);
			}					
		}
		if (codigo == teclas.izquierda)
		{
			if (diana.x > 250)
			{			
				moverIzquierda(codigo);
			}
			if (diana.x == 250)
			{
				if (diana.y >= 250)
				{
					moverIzquierda(codigo);
				}
			}
			else if (diana.x <= 200)	
			{
				if (diana.y <= 150)
				{
					moverIzquierda(codigo);
				}
				else if (diana.y >= 250)
				{
					moverIzquierda(codigo);
				}
			}		
		}
	}
	else if (diana.x < 0)
	{
		if (diana.y != 350)
		{
			diana.x = 500 - diana.velocidad;
			dibujar(codigo);
		}
		else
		{
			diana.x = 0;
			dibujar(codigo)
		}		
	}
	else if (diana.x >= 500)
	{
		if (diana.y != 200)
		{
			diana.x = 0;
			dibujar(codigo);
		}
		else
		{
			diana.x = 450;
			dibujar(codigo);
		}
	}
	else if (diana.y < 0)
	{
		diana.y = 500 -diana.velocidad;
		dibujar(codigo);
	}
	else if (diana.y >= 500)
	{
		if (diana.x != 200)
		{
			diana.y = 0;
			dibujar(codigo);
		}
		else
		{
			diana.y = 450;
			dibujar(codigo);
		}
	}
}
function moverDerecha(codigo){
	diana.x += diana.velocidad;
	dibujar(codigo);	
}
function moverIzquierda(codigo){
	diana.x -= diana.velocidad;
	dibujar(codigo);
}
function moverAbajo(codigo){
	diana.y += diana.velocidad;
	dibujar(codigo);
}
function moverArriba(codigo){
	diana.y -= diana.velocidad;
	dibujar(codigo);
}
function teclado(datos)
{
	var codigo = datos.keyCode
	limites(codigo);
}
function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	fondo.image = new Image();
	fondo.image.src = fondo.imageURL;
	fondo.image.onload = confirmarFondo;
	liz.image = new Image();
	liz.image.src = liz.imageURL;
	liz.image.onload = confirmarLiz;
	diana.frente = new Image();
	diana.frente.src = diana.frenteURL;
	diana.frente.onload = confirmarFrente;
	diana.der = new Image();
	diana.der.src = diana.derURL;
	diana.der.onload = confirmarDer;
	diana.iz = new Image();
	diana.iz.src = diana.izURL;
	diana.iz.onload = confirmarIz;
	diana.atras = new Image();
	diana.atras.src = diana.atrasURL;
	diana.atras.onload = confirmarAtras;
	document.addEventListener("keydown", teclado);
}