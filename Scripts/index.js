"use strict";

// NOTA: NO ES NECESARIO COMENTAR CADA EJERCICIO , PUEDE EJECUTARLOS EN CONJUNTO

//fuction clear()
function limpiar(){
    document.getElementById("resultado").innerText = " ";
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
    let numero;
    numero = Number(prompt("Ingrese un valor (1-50) para participar en la Loteria!!"));
    return numero;
}
function verificador(value, estado){
    let number;
    do{
        number = solicitar();
        if(number<1 || number>50){
            alert(`El numero ${number} no esta en el rango indicado!`);
            estado  = true;
        }else{
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
    jugando(value1, value2)
}