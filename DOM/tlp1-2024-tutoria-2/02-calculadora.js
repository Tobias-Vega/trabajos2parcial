/* 
** El operador spread convierte
*/
const sumar = (...numeros) => {
    let resultado = 0;
    numeros.forEach( num => resultado += num )
    return resultado;
};
const restar = (...numeros) => {
    let resultado = 0;
    numeros.forEach( num => resultado -= num )
    return resultado;
};
const multiplicar = (...numeros) => {
    let resultado = 1; 
    numeros.forEach( num => resultado *= num )
    return resultado;
};
const dividir = (...numeros) => {
    // TODO Validar los números recibidos y reglas para poder realizar una división
    let resultado = 0;
    numeros.forEach( num => resultado /= num )
    return resultado;
};

// console.log(sumar(5,5,5,5,30,50));
// console.log(sumar(10,40,50));

function calcular(tipoOperacion, values){
    console.log({ tipoOperacion, values });

    switch (tipoOperacion) {
        case 'suma':
            console.log(sumar(...values));        
            break;
    
        default:
            return 'Operacion no admitida'
            break;
    };
}
const valores = [2,2,2]
const tipoOperacion = 'suma';

calcular(tipoOperacion, valores);