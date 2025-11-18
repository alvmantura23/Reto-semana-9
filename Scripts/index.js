"use strict";

// NOTA: NO ES NECESARIO COMENTAR CADA EJERCICIO , PUEDE EJECUTARLOS EN CONJUNTO HACIENDO USO DE LOS BOTONES IMPLEMENTADOS EN EL HTML

//fuction clear()
function limpiar(){
    document.getElementById("resultado").innerText = " ";
    console.clear();
}


//Ejericio 1
function sumar(a){
    let p = 0; //acumulate
    for(let i=0; i<a.length; i++){
        p = p + a[i];
    }
    return p
}
function promediar(s, array){
    return s / array.length ;
}
const array = [2, 6, 1, 8]; //is static
let  sum, prom;

function ejercicio_1() {
    sum = sumar(array);
    prom = promediar(sum, array);
    document.getElementById("resultado").innerText = "Elementos del arreglo: " + array.join(", ") + "\nPromedio: " + prom; //innerText va a sobreescribir el contenido que se encuentra ubicado en la etiqueta div
}


//Ejercicio 2
function isPar(array){
    let pares = new Array(4);
    let j = 0;
    //recorremos todo el arreglo y buscamos los pares
    for(let i=0; i<array.length; i++){
        if((array[i]%2) === 0){
            pares[j] = array[i]; //asignamos el par al arreglo pares
            j++; //para pasar a la siguiente posicion de memoria
        }
    }
    return pares;
}
const array2 = [1, 2, 5, 8, 9, 12, 2, 3];
let arrayPares = new Array(4);
function ejercicio_2(){
    arrayPares = isPar(array2);
    sum = sumar(arrayPares); //chancamos la variable, ventajas de ser debilmente typado :v , deberia salir 42 :p
    document.getElementById("resultado").innerText = "Elementos del arreglo: "
        + array2.join(" , ") + "\nElementos pares: "
        + arrayPares.join(" , ") + "\nSuma: " + sum;
}

//Ejercicio 3
function searchBooks(library){
    let booksTruthy = [];
    for(let i=0; i<library.length; i++){
        if(library[i].readingStatus === true){
            let object = {
                //empiezo desde ahi porque ya se que los 2 primeros son true :v, sino crearia otra variable aparte para iterar en booksTruthy desde 0
                author : library[i].author,
                title : library[i].title,
                readingStatus : library[i].readingStatus
            };
            booksTruthy.push(object);
        }
    }
    return booksTruthy;
}
function showBooks(myBooks){
    let text = "";
    for(let i=0; i<myBooks.length; i++){
        text = text + "Título: " + myBooks[i].title + "\nAutor: " + myBooks[i].author + "\n"; //concatenamos las propiedades titulo y autor en una cadena para mostrarla en el elemento div
    }
    document.getElementById("resultado").innerText = text;
}
let myBooks = [];
const library = [
    {author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true}, //Object 1 
    {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true}, //Object 2
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false} //Object 3
];
function ejercicio_3(){
    myBooks = searchBooks(library); 
    showBooks(myBooks);
}


//Ejercicio 4
function juntar2Arrays(arreglo1, arreglo2){
    let tamanio, i;
    tamanio = arreglo1.length + arreglo2.length;
    let newArray = new Array(tamanio);
    for(i=0; i<arreglo1.length; i++){ /*Llenado de elementos del arreglo1*/
        newArray[i] = arreglo1[i];
    }
    i = 0;
    for(let j=arreglo1.length; j<tamanio; j++){ //[6] to [9]
        newArray[j] = arreglo2[i];
        i++;
    }
    return newArray;
}
function longitudArray(arr){
    if(arr.length >= 10)
        return true;
    else
        return false;
}
//arreglo 1 y 2 utilizados para ejercicio 4 y 5
let arreglo1; //no le pongo const porque voy a redefinir el valor de las variables, para ahorrar recursos :v
let arreglo2;

function ejercicio_4(){
    arreglo1 = [2, 5, 2, 3, 7, 2];
    arreglo2 = [1, 5, 3, 3];

    let arregloNuevo = new Array(arreglo1.length+arreglo2.length);

    arregloNuevo = juntar2Arrays(arreglo1, arreglo2);
    document.getElementById("resultado").innerText = longitudArray(arregloNuevo);
}


//Ejercicio 5
function duplicarContentArrays(arregloNuevo){
    for(let i=0; i<arregloNuevo.length; i++){
        arregloNuevo[i] = 2*arregloNuevo[i];
    }
}

function ejercicio_5(){
    arreglo1 = [2, 5, 2];
    arreglo2 = [1, 5, 3];

    let arregloNuevo = new Array(arreglo1.length + arreglo2.length);

    arregloNuevo = juntar2Arrays(arreglo1, arreglo2);
    duplicarContentArrays(arregloNuevo);
    document.getElementById("resultado").innerText = "Salida: " + arregloNuevo;
}


//Ejericicio 6
function solicitar(){ //solicita por un cuadro de dialogo, prompt
    let value;
    value = prompt("Ingrese el valor u opción elegída: ");
    return value;
}
function verificador(value, estado){
    let number;
    do{
        alert("Preparece a ingresar un numero (1-50) para participar en la Lotería!");
        number = Number(solicitar());
        if(number<1 || number>50 || number===null){
            alert(`El numero ${number} no esta en el rango indicado!`);
            estado  = true;
        }
        else{
            alert(`Número ${number} registrado`)
            estado = false;
            value = number;
            return value;//considerar esto si no esta definido
        }
    }while(estado);
}
function jugando(value1, value2){

    console.log(`Primer número: ${value1}`);
    console.log(`Segundo número: ${value2}`);

    for(let i = 1; i <= 50; i++){
        setTimeout(() => {
            if(i === value1 || i === value2){
                console.log("¡Lotería!");
            } else {
                console.log(i);
            }
        }, i * 200); // cada *200ms se muestra un valor
    }
}
let value1, value2, estado;
function ejercicio_6(){
    do{
        value1 = verificador(value1, estado);
        value2 = verificador(value2, estado);
    }while(estado);
    document.getElementById("resultado").innerText = "Entra a la consola! \n Press F12 to open the console";
    jugando(value1, value2);
}


//EJERCICIO 7
function isMultiplo(n){
    if((n%15) === 0)
        return "FizzBuzz"//Truco: Empezamos de 15 porque va a ir verificando primero si es divisible por 15 pasara a verificar si es de 3 y luego de 5 para evitar que primero verifique que es multiplo de 3 y muestre Fizz o si es de 5 muestre Buzz
    if((n%3) === 0)
        return "Fizz";
    if((n%5) === 0)
        return "Buzz";
    else
        return n;
}
function iterator(limitInf, limitSup){
    do{
        console.log(isMultiplo(limitInf)); //cada 1000 milisegundos
        limitInf++;
    }while(limitInf<=limitSup);
}
const limitInf = 1, limitSup= 100;
function ejercicio_7(){
    iterator(limitInf, limitSup);
}


//EJERCICIO 8
function ejercicio_8(){
alert("Preparece a ingresar una calificacion entre 1 y 10")
const calificacionStr = solicitar();
const calificacion = Number(calificacionStr);
let mensaje = "";

// 1. Comprobar que esté en el rango
    if (isNaN(calificacion) || calificacion < 1 || calificacion > 10) {
        mensaje = `Error: La calificación ${calificacionStr} debe ser un número entre 1 y 10.`;
    }
    // 2. Comprobar la categoría
    else if (calificacion < 6) {
        mensaje = `Calificación: ${calificacion}. Resultado: Reprobado.`;
    } else if (calificacion >= 6 && calificacion <= 8) {
        mensaje = `Calificación: ${calificacion}. Resultado: Regular.`;
    } else if (calificacion === 9) {
    mensaje = `Calificación: ${calificacion}. Resultado: Bien.`;
    } else if (calificacion === 10) {
        mensaje = `Calificación: ${calificacion}. Resultado: Excelente.`;
    }

    document.getElementById("resultado").innerText = mensaje;
}
//EJERCICIO 9
function ejercicio_9(){
const diametroStr = solicitar("Ingrese el diámetro de una rueda (en metros):");
const grosorStr = solicitar("Ingrese el grosor de la rueda (en metros):");

const diametro = Number(diametroStr);
const grosor = Number(grosorStr);

let mensajeSalida = "";
let mensajeGrosor = "";

// a, b, c) Determinar el tamaño del vehículo
    if (diametro > 1.4) {
        mensajeSalida += "La rueda es para un vehículo grande.\n";
    } else if (diametro > 0.8 && diametro <= 1.4) {
        mensajeSalida += "La rueda es para un vehículo mediano.\n";
    } else {
        mensajeSalida += "La rueda es para un vehículo pequeño.\n";
    }

    // d) Comprobar el grosor recomendado
    const condicionGrosorGrande = (diametro > 1.4 && grosor < 0.4);
    const condicionGrosorMediano = (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25);

    if (condicionGrosorGrande || condicionGrosorMediano) {
    mensajeGrosor = "El grosor para esta rueda es inferior al recomendado.";
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerText = mensajeSalida + mensajeGrosor;
}
//EJERCICIO 10
function ejercicio_10(){
const topping = solicitar("¿Qué topping desea? (Oreo, KitKat, Brownie) o 'sin topping'").toLowerCase();
const precioBase = 50; // MXN
let precioTopping = 0;
let mensaje = "";

    switch(topping) {
        case 'oreo':
            precioTopping = 10;
            mensaje = `Topping elegido: Oreo. Precio total: ${precioBase + precioTopping} MXN.`;
            break;
        case 'kitkat':
            precioTopping = 15;
            mensaje = `Topping elegido: KitKat. Precio total: ${precioBase + precioTopping} MXN.`;
            break;
        case 'brownie':
            precioTopping = 20;
            mensaje = `Topping elegido: Brownie. Precio total: ${precioBase + precioTopping} MXN.`;
            break;
        case 'sin topping':
            precioTopping = 0;
            mensaje = `Ha elegido sin topping. Precio total: ${precioBase} MXN.`;
            break;
        default:
            mensaje = `No tenemos el topping "${topping}", lo sentimos.`;
            mensaje += `\nEl precio del helado sin ningún topping es de ${precioBase} MXN.`;
            break;
    }

    document.getElementById("resultado").innerText = mensaje;
}

//EJERCICIO 11
function ejercicio_11(){
    const nivel = solicitar("Ingrese el nivel del programa (Course, Carrera o Master):").toLowerCase();
    const becaNombre = solicitar("¿Cuenta con alguna beca? (Facebook, Google, Jesua) o 'ninguna':").toLowerCase();

    let costoMensualBase = 0;
    let duracionMeses = 0;
    let becaDescuento = 0; // Porcentaje de descuento (0.0 a 1.0)
    let nombrePrograma = "";
    let mensaje = "";

    // Definir costos y duración
    switch(nivel) {
        case 'course':
            costoMensualBase = 4999;
            duracionMeses = 2;
            nombrePrograma = "Course";
            break;
        case 'carrera':
            costoMensualBase = 3999;
            duracionMeses = 6;
            nombrePrograma = "Carrera";
            break;
        case 'master':
            costoMensualBase = 2999;
            duracionMeses = 12;
            nombrePrograma = "Master";
            break;
        default:
            mensaje = `Error: El programa "${nivel}" no es una opción válida.`;
            document.getElementById("resultado").innerText = mensaje;
            return;
    }

    // Definir descuento de beca
    let nombreBeca = "Ninguna";
    switch(becaNombre) {
        case 'facebook':
            becaDescuento = 0.20; // 20%
            nombreBeca = "Facebook (20%)";
            break;
        case 'google':
            becaDescuento = 0.15; // 15%
            nombreBeca = "Google (15%)";
            break;
        case 'jesua':
            becaDescuento = 0.50; // 50%
            nombreBeca = "Jesua (50%)";
            break;
        case 'ninguna':
            becaDescuento = 0;
            nombreBeca = "Ninguna (0%)";
            break;
        default:
            // Si ingresa una beca no válida, la tratamos como "ninguna" y advertimos.
            mensaje += `\nAdvertencia: La beca "${becaNombre}" no se reconoce. No se aplicará descuento.`;
            nombreBeca = "No Reconocida (0%)";
            break;
    }

    // Cálculos
    const descuentoAplicado = costoMensualBase * becaDescuento;
    const costoMensualFinal = costoMensualBase - descuentoAplicado;
    const costoTotal = costoMensualFinal * duracionMeses;

    // Formateo de salida
    mensaje = `Programa Seleccionado: ${nombrePrograma} (${duracionMeses} meses)\n`;
    mensaje += `Costo Mensual Base: ${costoMensualBase.toFixed(2)} MXN\n`;
    mensaje += `Beca Aplicada: ${nombreBeca}\n`;
    mensaje += `-------------------------------------------------\n`;
    mensaje += `Costo Mensual con Descuento: ${costoMensualFinal.toFixed(2)} MXN\n`;
    mensaje += `Gasto Total por el Curso: ${costoTotal.toFixed(2)} MXN`;

    document.getElementById("resultado").innerText = mensaje;
}

//EJERCICIO 12
function identifyVehicle(){
    let vehicle;
    alert("Ingrese el tipo de vehiculo (coche, moto o autobus) ? Elige");
    do{
        vehicle = solicitar();
    }while(!(vehicle === "coche" || vehicle === "moto" || vehicle === "autobus"));
    return vehicle;
}
function definePrecio(typeVehicle){
    let precioLitro;
    switch(typeVehicle){
        case "coche":{
            precioLitro = 0.2;
        } break;
        case "moto":{
            precioLitro = 0.1;
        } break;
        case "autobus":{
            precioLitro = 0.5;
        } break;
    }
    return precioLitro;
}
function solicitarLitros(){
    let cantLitros;
    do{
    alert("Ingrese la cantidad de litros >= 0");
    cantLitros = solicitar();
    }while(cantLitros < 0); //La cantidad de litros no puede ser menor que cero
    return cantLitros;
}
function calculator(cantLitros, priceXLitro){
    let extra, totalPagar;
    if(cantLitros>=0 && cantLitros<=100)
        extra = 5;
    else
        extra = 10;
    totalPagar = priceXLitro * cantLitros + extra

    return totalPagar;
    
}
let typeVehicle, priceXLitro, cantLitros, precioFinal;
function ejercicio_12(){
    typeVehicle = identifyVehicle();
    priceXLitro = definePrecio(typeVehicle);
    cantLitros = solicitarLitros()
    precioFinal = calculator(cantLitros, priceXLitro);
    document.getElementById("resultado").innerText = `El total a pagar es : ${precioFinal}`;
}
