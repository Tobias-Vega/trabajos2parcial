
const fecha = new Date();

console.log('============ Tiempo en seg, min, hs ================')

// Hora Actual
console.log(fecha.toLocaleTimeString());

// Se restan 10 segundos a la hora actual          1 segundo
const fecha10seg = new Date(fecha.getTime() - (10 * (1000)));
console.log(fecha10seg.toLocaleTimeString());

// Se restan 10 minutos a la hora actual              1 minuto  
const fecha10min = new Date(fecha.getTime() - (10 * (60 * 1000)));
console.log(fecha10min.toLocaleTimeString());

// Se restan 1 hora a la hora actual              1 hora
const fecha1hora = new Date(fecha.getTime() - (60 * 60 * 1000));
console.log(fecha1hora.toLocaleTimeString());

console.log('============ Tiempo en días y semana ================')
// Se restan 1 día al día actual                     1 día
const fecha1dia = new Date(fecha.getTime() - (24 * 60 * 60 * 1000));
console.log(fecha1dia.toLocaleDateString());

// Se restan 1 semana al día actual                     1 semana
const fecha1semana = new Date(fecha.getTime() - (7 * 24 * 60 * 60 * 1000));
console.log(fecha1semana.toLocaleDateString());

// Combinando el manejo de fechas con funciones
const addHour = (cant) => {
    return new Date() + (cant * 60 * 60 * 1000);
}

const addMinute = (cant) => {
    return new Date() + (cant * 60 * 1000);
}

const addDay = (cant) => {
    return new Date() + (cant * 24 * 60 * 60 * 1000);
}

const addWeek = (cant) => {
    return new Date().getTime() + (cant * 7 * 24 * 60 * 60 * 1000);
}

console.log('==================== Otro ejemplo ====================')
let fechaActual = new Date().toLocaleDateString();
let semanaQueViene = addWeek(1);

console.log(fechaActual);
console.log(new Date(semanaQueViene).toLocaleDateString());
