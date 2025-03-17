
function saludo() {
    let nombre = document.getElementById('nombre').value;
    console.log(`bienvenido ${nombre}`);
} 

function pedirdosnumeros() 
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let sumaTotal = parseInt(num1) + parseInt(num2);
    let restaTotal = num1 - num2;
    let divisionTotal = num1 / num2;
    let multiplicacionTotal = num1 * num2;

    console.log(`
        Suma es ${sumaTotal} 
        Resta es ${restaTotal}
        Division es ${divisionTotal} 
        Multiplicacion es ${multiplicacionTotal}
    `);
}

function parOimpar()
{
    let num = document.getElementById('numeroParOimpar').value;

    if (num % 2 === 0) {
        console.log("Es par")
    }
    else
    if (num % 2 !==0)
    {
        console.log("Es impar")
    }
}

function contarCaracteres()
{  
    let palabra;
    do 
    {   palabra = document.getElementById('palabra').value;

        if(palabra === "")
        {   
            console.log("Ingrese, una palabra");       
            return;
        }

    }
    while(palabra === "");

    let cantidadCaracteres = palabra.length;
    console.log(`La Palabra ${palabra} tiene ${cantidadCaracteres} caracteres`);
}


function repetirFrase()
{  let palabra = document.getElementById('frase').value;
    let numero = document.getElementById('numero').value;

    for (let i = 0; i < numero; i++) 
        {
         console.log(palabra);
        
        }
}   

function tablaMultiplicar()
{   let numero = document.getElementById("numeroMultiplicar").value;
    console.log("Tabla de multiplicar del numero " + numero);
    for (let i = 1; i <=10; i++) 
    { 
        let numeroMultiplicado = i*numero;
       console.log(`${i}*${numero}= ${numeroMultiplicado}`)        
    }
}

let numeroRandom;

function iniciarJuego() {
    numeroRandom = Math.floor(Math.random() * 10) + 1;
}

function adivinarNumero() {
    let numeroIngresado = parseInt(document.getElementById('numeroAdivinar').value);

    if (!numeroRandom) {
        iniciarJuego();
    }

    if (numeroIngresado > numeroRandom) {
        console.log("Está mal, el numero random es uno mas bajo");
    } else if (numeroIngresado < numeroRandom) {
        console.log("Está mal, el numero random es uno mas alto");
    } else {
        console.log("¡Felicidades! Has adivinado el número secreto: " + numeroRandom);
        iniciarJuego();
    }
}

function contarVocales() 
{
    let palabraIng = document.getElementById('palabraIngresada').value;

    let cantVocales = 0;

    palabraIng.split("").forEach(caracter => {

        if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
            cantVocales++;
        }

    });

    console.log(cantVocales);
}

function invertirCadena() {

    let cadena = document.getElementById('palabraAInvertir').value;

    let inversion = cadena.split("").reverse().join(""); 

    console.log(inversion);
}

function verificarPalindromo() {
    let palabra = document.getElementById("palabraPalindromo").value;

    let alReves = palabra.split("").reverse().join("");

    if (palabra === alReves) {
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}