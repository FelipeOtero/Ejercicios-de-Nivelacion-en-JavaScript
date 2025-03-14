// ej 1
function saludo() {
    let nombre = document.getElementById('nombre').value;
    console.log(`bienvenido ${nombre}`);
} 


// ej 2
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
    let num = document.getElementById('numeroParOimpar').value

    if (num % 2 === 0) {
        console.log("Es par")
    }
    else
    if (num % 2 !==0)
    {
        console.log("Es impar")
    }
  
  



}