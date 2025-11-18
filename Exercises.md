## Ejercicio 1
Haya el promedio de todos los elementos del arreglo.
Ejm:
    Entrada: [2, 6, 1, 8]
    Salida:
    Promedio: 4.25

## Ejercicio 2
De un arreglo de números, retornar la suma de todos los números pares.
Ejm:
    Entrada: [1, 2, 5, 8, 9, 12, 2, 3]
    Salida: 2+8+12+2 = 24

## Ejercicio 3
Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre
del autor de los libros que tengan el estado de lectura “true”.
    const library = [{author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
                     {author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
                     {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}];

## Ejercicio 4
Crear un programa que tome dos arreglos de números y que retorne un booleano,
unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual
a 10 que retorne true si es menor a 10 que retorne false.
Ejm:
Entrada:
Arreglo1: [2, 5, 2, 3, 7, 2]
Arreglo2: [1, 5, 3, 3]
Salida:
ArregloNuevo: [2, 5, 2, 3, 7, 2, 1, 5, 3, 3]
True

## Ejercicio 5
Crear una función con el nombre de funcionArray() que tome dos arreglos de
números enteros como parámetro y retornar un único arreglo, cada elemento del
arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].
Ejm:
    Entrada:
    Arreglo1: [2, 5, 2]
    Arreglo2: [1, 5, 3]
    Salida:
    ArregloNuevo: [4, 10, 4, 2, 10, 6]

## Ejercicio 6
Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta al 50, pero añadir el mensaje “¡Lotería!”.
Solo al mostrar los números indicados por el usuario.
Ejm:
Primer número: 2
Segundo número: 5
Salida de muestra:
1
Lotería!
3
4
Lotería!
6
.
.
.
50
7. Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para
múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco
imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".
Salida de muestra:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
.
.
.
14
FizzBuzz
16
.
.
8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el
número efectivamente esté en ese rango, si no lo está imprima un mensaje de
error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si
está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
9. Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en
metros).
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para
un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe
mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se
cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla
el mensaje “La rueda es para un vehículo pequeño”.
b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
Ejm:
Entrada:
Ingrese el diámetro de una rueda = 1.1
Ingrese el grosor de la rueda = 0.24
Salida:
La rueda es para un vehículo mediano.
Su grosor es inferior al recomendado.
10. Escribe un programa que responda a un usuario que quiere comprar un helado en
una conocida marca de comida rápida cuánto le costará en función del topping
que elija.
• El helado sin topping cuesta 50 MXN.
• El topping de oreo cuesta 10 MXN.
• El topping de KitKat cuesta 15 MXN.
• El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le
indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
precio del helado sin ningún topping.
11. Un conocido portal de educación en tecnología está ofreciendo programas para
aprender a desarrollar aplicaciones. Escribe un programa que le indique a la
persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción
elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo
mensual:
• Course: $4999 MXN
• Carrera $3999 MXN
• Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
correspondiente al precio final.
• Beca Facebook: 20% de descuento.
• Beca Google: 15% de descuento.
• Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto
gastaría en total por el curso elegido, tomando en cuenta las siguientes
duraciones:
• Course: 2 meses
• Carrera 6 meses
• Master: 12 meses
12. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros consumidos,
tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser
0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es
mayor la cantidad de litros consumidos se ha de añadir 10 al total.
Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos.