//------------Nivel de dificultad: Bajo-------------
/*Este
primer ejercicio es para aprender a declarar una función. En este caso se debe declarar 
una función nombrada llamada "add" que dentro de su cuerpo, debe ejecutar una instrucción que muestre 
el resultado de 100 x 20 en la consola.*/

function add ( ){
    console.log( 100*20)
}
add()

//---------------------------------------------
/*Llamada/ejecución de funciones.
Ya tenemos la declaración, el siguiente paso es llamar/ejecutar la función "add". Ejecútelo y compruebe 
que el resultado se muestra en la consola. */
add()
//--------------------------------------------
/*Adición de parámetros.
Ahora es el momento de agregar parámetros a nuestra función. Añade dos parámetros y llámalos como quieras.
Recuerde indicar dentro del cuerpo de la función dónde irán esos parámetros. */
function addTwo(numerOne, numberTwo){
    console.log(numerOne * numberTwo)
}
addTwo(2000,150)
//--------------------------------------------
/*Uso de argumentos.
Ya hemos añadido parámetros a la declaración de nuestra función, el siguiente paso es "pasarle argumentos". 
Para ello, cree dos variables como las siguientes en el ejemplo:
*/
let numero1 = 100;
let numero2 = 20; 
/*
function pasarArgumentos (numero1, numero2){
      console.log( numero1 + numero2)
}
pasarArgumentos(100,20)
*/
//--------------------------------------------
/*Añadiendo el <return>.
Con nuestra función nombrada configurada correctamente, es hora de cambiar el .log de la consola del cuerpo de
la función. Cree una variable de resultado dentro del cuerpo de la función que almacenará el resultado de 100 x 20 y 
haga que la función devuelva esa variable. */

function pasarArgumentos (numero1, numero2){
    return numero1 + numero2
}
console.log(pasarArgumentos(100,30))
//--------------------------------------------
/*Convierta la función nombrada del ejercicio anterior en una función anónima y llámela o ejecútela.*/


const anonimasfuncion = function (numero1, numero2){
    return numero1 + numero2
}
console.log(anonimasfuncion(350,50))

//--------------------Nivel de dificultad: Medio------------------------
/*Cree una función con nombre llamada "greet" que
recibe un parámetro de cadena que representa un nombre, y
Muestra un saludo personalizado con el nombre proporcionado en la consola.
Llame/ejecute la función con su propio nombre para comprobar que funciona correctamente.
*/
function greet(nombre,saludo){
    console.log(`My nombre es ${nombre} y ${saludo}`)
}

greet("Angel","bienvenido")
//-------------------------------------------------------
/*Cree una función anónima que
recibe dos parámetros numéricos y
Devuelve el resultado de la multiplicación de ambos.
Llama/ejecuta la función con dos valores diferentes y muestra el resultado a través de la consola.*/

function recibirParametrosNumericos(primerNumero,segundoNumero){
    return primerNumero*segundoNumero
}
console.log(recibirParametrosNumericos(2,5))
console.log(recibirParametrosNumericos(3,3))

//-------------------------------------------------------
/*Cree una función con nombre llamada "área" que
recibe dos parámetros numéricos, uno que representa la base y el otro la altura de un triángulo.
devuelve su área.*/

function area (base, altura){
     return base *altura / 2
}
console.log(area(6,10))

//----------------------------------------------------
/*Cree otra función con nombre llamada "perímetro" que
recibe tres parámetros numéricos que representan cada uno de los lados de un triángulo, y
Devuelve el perímetro del triángulo.
¡Propina! Recuerda las fórmulas para el área y el perímetro de los triángulos.*/

function perimetro(primerLado, SegundoLado, TercerLado){
return primerLado + SegundoLado + TercerLado
}

console.log(perimetro(6,8,4))
//--------------------------------------------------
/*Cree una función que
toma dos parámetros numéricos que representan el precio y la cantidad de un producto,
y devuelve el precio total de la compra.
Si el número de productos es mayor o igual a 10, ==> se aplica un descuento del 10% sobre el precio total.
Si el número de productos es mayor o igual a 20, ==> se aplica un descuento del 20% sobre el precio total.
Llame/ejecute la función con diferentes valores de precio y cantidad para verificar que funciona correctamente*/

function  calculoDeDescuentos(precioProducto, cantidadProducto){
    if(cantidadProducto<=10){
        return precioProducto * 0.1

    }else if (cantidadProducto<=20 || cantidadProducto>20){
        return precioProducto * 0.2

    }
}
console.log(calculoDeDescuentos(2000,2))
//--------------------------------------------------
/*Cree una función con nombre llamada isAnAdult que
recibe un parámetro numérico que representa la edad de una persona, y
devuelve un mensaje que indica si la persona es un adulto o no.
Si la edad es mayor o igual a 18 años "Eres mayor de edad"
Si la edad es menor de 18 años "No es un adulto"
Llame a la función con diferentes valores de edad para comprobar que funciona correctamente.
Llame a la función con diferentes valores de edad para comprobar que funciona correctamente. */

function isAnAdult(edad){
if(edad>=18){
    console.log(` Eres una persona mayor con ${edad} de edad`)
}else{
    console.log("No eres mayor de edd")
}
}

isAnAdult(18)
//-------------------Nivel de dificultad: Alto-------------------------------

/*Cree una función (declárela como desee) que
toma un parámetro numérico que representa el ingreso anual de una persona, y
devuelve el impuesto que deben pagar.
Si Ingresos menores o iguales a $10,000, ==> impuesto del 10% de los ingresos.
Si los ingresos son mayores a $10,000 y menores o iguales a $20,000, ==> impuesto del 15% de los ingresos.
Si los ingresos son superiores a $20,000, ==> impuesto del 20% de los ingresos.
Utilice condicionales anidados para implementar esta función.
Llame/ejecute la función con diferentes valores de entrada para verificar que funciona correctamente.*/

function formulaInpuestoPagar(ingresoAnual, inpuesto){
if(ingresoAnual<=10000){
    console.log(`El impuesto a pagar es ${ingresoAnual*0.1}`)

}else if(ingresoAnual>10000 && ingresoAnual<= 20000){
    console.log(`El impuesto a pagar es ${ingresoAnual*0.15}`)
}else if(ingresoAnual>20000){
    console.log(`El impuesto a pagar es ${ingresoAnual*0.2}`)
}
}

formulaInpuestoPagar(21000)

//----------------------------------------------------
/*Cree una función (declárela como desee) para comprobar si hay un día que
recibe un parámetro numérico y
Devuelve un mensaje que indica si es un día hábil o no.
Si el número es 1, 2, 3, 4, 5, mensaje: "Es un día hábil".
Si el número es 6 o 7, envía: "Es fin de semana".
Utilice la estructura de control de conmutador anidada para implementar esta función.
Llame a la función con diferentes valores de día para comprobar que funciona correctamente. */

function accionDiasHabiles(dia){
    if(dia === 1 || dia === 2 || dia === 3 || dia === 4 || dia === 5 ){
        console.log(`el día ${dia} es un día HABIL`)
    }else if(dia===6 || dia===7){
        console.log(`el día ${dia} es un día NO HABIL`)
    }else{
        console.log("ese número de días no se encuantra registrado áca solo del 1 al 7")
    }

}
accionDiasHabiles(2)
//---------------------------------------------------
/*Cree un programa utilizando una función (declárela como desee) que tome un parámetro que represente Información personal (ingrese con el teclado). 
-Primero se debe ingresar el Nombre, y
si viene vacío ==> el programa debe detenerse y mostrar un console.error con un mensaje "El nombre no puede estar vacío"

-A continuación, se debe pedir al usuario que introduzca el Apellido y debe validarlo como el Nombre en el paso anterior. 

-Por último, se debe pedir al usuario que introduzca la edad y también debe validarla.
Una vez verificados todos los datos, 

-la función debe guardar todos esos datos en un objeto con 3 propiedades: nombre, apellidos y edad y mostrarlos a través de la consola.
Para finalizar, la función debe ser llamada/ejecutada y probada con diferentes valores.*/

function programaDeDatos(nombre, apellido, edad){  
if (nombre){

}else{
    console.error("El nombre no puede estar vacío")
}
if (apellido){

}else{
    console.error("El apellido no puede estar vacío")
}
if (edad) {

}else{
    console.error("La edad debe ser un número positivo")
}
// Crear objeto  
const informacionPersonal = {
  nombre:nombre,
  apellidos:apellido,
  edad:edad,
}
// Mostrar información 
console.log("Información Personal:")
console.log(informacionPersonal)

}
programaDeDatos("Lisa","Sanchez",22)
//---------------------------------------------------
/*Crea un programa que se compone de 3 funciones (decláralas como quieras):
1ª función greet: que toma un parámetro que representa un nombre y devuelve una cadena "Hola, mi nombre es [ parámetro ]"
2ª función: calculateAge: que toma dos parámetros que representan el año de nacimiento y el año actual. 
Esta función devolverá el resultado del año en curso menos el año de nacimiento.

3ª función: present: llamar/ejecutar las otras dos funciones y ejecutar una alerta con la presentación del usuario
Los datos del usuario deben ser introducidos en la pantalla y el resultado final también se muestra en la pantalla*/
function Presente(){

function saludarTwo(name =prompt(`ingrese su nombre`)) {
    return`Hola, mi nombre es ${name}`
}

function calculaAnio(anioDeCumple= Number(prompt(`ingrese el Año de su cumpleaños`)),anioActual= Number(prompt(`ingrese el Año actual en que estamos`))) {
    return anioActual - anioDeCumple;
}
console.log(saludarTwo())
console.log(calculaAnio())
}

Presente()



 




 