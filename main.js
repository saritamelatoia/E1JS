/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const numero = prompt('Ingresar número');

if (numero % 2 == 0){
    console.log(" El número " + numero + " es par ");
}else{
    console.log(" El número " + numero + " es impar ");
}
*/

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const numero1 = prompt("Ingresar número");
const numero2 = prompt("Ingresar otro número");

if (numero1 > numero2){
    console.log(" El número " + numero1 + " es mayor a " + numero2);
}else{
    console.log(" El número " + numero2 + " es mayor a " + numero1);


if (numero1 === numero2){
console.log(" El número " + numero1 + " es igual a " + numero2);
}
*/

/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const numero = prompt("Ingresar número");

if (numero % 5 === 0){
    console.log(" El número " + numero + " es múltiplo de 5 ");
}else {
    console.log(" El número " + numero + " no es múltiplo de 5 ");
}

*/

/*
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const numero = prompt("Ingresar número");

for (let i = 1; i <= numero; i++) {
    console.log(i);
} 
*/

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
//NOMESALE

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let arrayConValores = [3, 5, 'ciruela', false, 'avion', 2, 5, true]

function imprimirArray(array) {
    for (let i = 0; i < array.length; i ++)
{
    console.log(array[i]);
}
}

imprimirArray(arrayConValores);