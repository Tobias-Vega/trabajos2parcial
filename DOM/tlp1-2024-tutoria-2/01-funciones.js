// Implementción de función declarativa
function sumar( sumando1 , sumando2 = 5 ){
    resultado = sumando1 + sumando2
    return resultado;
}
// Invocación de la función
// console.log(sumar(10, 10))

// Función anónima - la misma debe ejecutarse siempre dentro de otra función
// console.log( function (){  return true }()  )

// Función autoinvocada - ()() - Ejecuta todas las instrucciones que hay dentro;
// (
//     function () { // función anónima
//         console.log(true);
//     }
// )();

// Función de expresión
let nombre = "Zeus";

// Función declarativa con parámetros con valores por defecto
function sumar( sumando1 = 4, sumando2 = 5 ){
    resultado = sumando1 + sumando2
    return resultado;
}

// Función expresiva
const restar = function (num1, num2) {
    const resultado = num1 - num2;
    return resultado; 
}
// console.log(restar(5, 1))

// Función flecha
const multiplicar = (num1, num2) => num1 * num2; // retorno implícito
// console.log(multiplicar(4,5))

// Para que una función flecha pueda retornar implícitamente objetos y arreglos, se debe añadir paréntesis
const funcionFlecha = () => ( { name: "Luna" } )
// console.log( funcionFlecha() );


// Hoisting - se puede invocar una función declarada más abajo siempre y cuando no sea una función expresiva
// saludo("Zeus")
// saludo2("Zeus")
function saludo(nombre){
    console.log("Hola " + nombre)
}
const saludo2 = (nombre) => {
    console.log("Hola " + nombre)
}






