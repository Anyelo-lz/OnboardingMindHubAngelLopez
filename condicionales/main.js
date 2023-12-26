/*A partir del siguiente ejemplo, cree un bloque condicional que evalúe si la variable num1 es mayor que num2, si es así, imprima el valor de num1 a través de la consola, de lo contrario imprima num2.
sea num1 = 4
Sea num2 = 5 */

let num1 = 11
let num2 = 10

if (num1 > num2) {
  console.log(`el numero mayor es ${num1}`)
} else {
  console.log(`el numero mayor es ${num2}`)
}

/*Basado en el ejercicio 1, ahora modifique el bloque de la siguiente manera:

Si num1 es mayor que num2, imprima num1 a través de la consola,

Si num2 es mayor, imprime num2 y finalmente

si son iguales, imprime una cadena que diga "Los números son iguales"*/

if (num1 > num2) {
  console.log(`el numero mayor es ${num1}`)
} else if (num2 > num1) {
  console.log(`el numero mayor es ${num2}`)
} else if (num1 = num2) {
  console.log("los numeros son iguales")
}

/*Con base en el ejercicio 1, crea un bloque condicional que evalúe si estas variables son iguales o no, 
si es así, imprime una cadena a través de la consola "Los números son iguales", de lo contrario "Los números son diferentes"*/
if (num1 == num2) {
  console.log(`Los números son iguales`)
} else if (num2 != num1) {
  console.log(`Los números son diferentes`)
} else {

}

/* A partir del siguiente ejemplo, cree un bloque condicional que evalúe si una de estas variables es mayor que la otra; 
si es así, muestre "La fecha [variable 1] es mayor que [variable 2]" en la consola y, si son iguales, imprima "Las fechas son las mismas"
¡Consejo! Utilice los acentos graves para imprimir a través de la consola.

                    let date1 = "2018-9-2"
                    let date2 = "2023-7-5"
                                 La fecha 2023-7-5 es mayor que la fecha 2018-9-2*/
let date1 = "2018-6-2";
let date2 = "2022-2-5";

if (date1 > date2) {
  console.log(`La fecha ${date1} es mayor que la fecha ${date2}`);
} else if (date1 < date2) {
  console.log(`La fecha ${date2} es mayor que la fecha ${date1}`);
} else {
  console.log("Las fechas son las mismas");
}

/*Ahora intente cambiar el valor de las variables. Al igual que en los ejercicios anteriores, 
se debe imprimir una cadena a través de la consola que diga si la fecha 1 es mayor que la fecha 2 o lo contrario.
¡Propina! Investigue cómo se comparan las cadenas. 
datos agregados para este punto 
   "2018-6-2";
   "2022-2-5";*/

if (date1 > date2) {
  console.log(`La fecha ${date1} es mayor que la fecha ${date2}`)
} else if (date1 < date2) {
  console.log(`La fecha ${date2} es mayor que la fecha ${date1}`)
} else {
  console.log("Las fechas son las mismas");
}
/*En este caso, cree un bloque condicional que evalúe cuál de los tres números almacenados en las variables es el más grande. 
Imprime una cadena a través de la consola que diga "El número [ ] es el más grande".
   
let número1 = 5

sea número2 = 7

Sea el número 3 = 9*/

let numero1 = 5;
let numero2 = 7;
let numero3 = 9;


if (numero1 > numero2 && numero1 > numero3) {
  console.log(`El numero ${numero1} es el mas grande`)
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(`El numero ${numero2} es el mas grande`)
} else {
  console.log(`El numero ${numero3} es el mas grande`)
}

/*----------------nivel:Medio-------------*/
/*Usando un "interruptor", cree un programa que le permita ingresar estos nombres de color en la pantalla: rojo, azul o verde. E imprime en la pantalla en cada caso:
rojo: "El color de la pasión"
azul: "El color del mar".
verde: "El color de la naturaleza"
¡Propina! No olvides la declaración break*/

/*let interructor= prompt("ingrese uno de estos colores rojo, azul, verde ")

switch (interructor) {
  case "rojo":
    console.log("El color de la pasión");
    break;
  case "azul":
    console.log("El color del mar");
    break;
  case "verde":
    console.log("El color de la naturaleza");
  default:
    console.log("ninguno de eso colores esta en la lista");
    break;
}*/
//------------------------------------------------------------------------
/*Usando un interruptor, crea un programa que te permita ingresar en la pantalla:
dos valores numéricos (número del 1 al 100)
una operación (suma, resta, multiplicación, división)
e imprimir en pantalla en cada caso:
suma: primer valor + el segundo
resta: primer valor - el segundo
Multiplicación: primer valor * segundo
División: Primer valor / Segundo
Con el literal correspondiente ("la suma de <num1> y <num2> es...", etc.)
¡Propina! No olvides la declaración break*/


/*let interructor = prompt("Que operecion quieres hacer?")
let numeroOne =  Number(prompt("ingrese uno numero"))
let numeroTwo = Number(prompt("ingrese otro numero"))

if ((numeroOne>=1 && numeroOne<=100) && (numeroTwo>=1 && numeroTwo <=100)) {
  switch (interructor) {
    case "suma":
      console.log(`El resultado es ${numeroOne + numeroTwo}`);
      break;
    case "resta":
      console.log(`El resultado es ${numeroOne - numeroTwo}`);
      break;
    case "multiplicacion":
      console.log(`El resultado es ${numeroOne * numeroTwo}`);
      break;
    case "divicion":
        console.log(`El resultado es ${numeroOne / numeroTwo}`);
      default:
      console.log("ninguno de eso esta en la lista");
      break;
  }
 } */
//--------------------------------------------------------------------
/*A partir de la siguiente estructura, cree un bloque condicional que
recibe 2 objetos que representan a las personas con las propiedades: nombre, edad, altura
e imprimir por consola en el mismo console.log:
¿Cuál de las dos personas es la más alta?
¿Cuál es el más antiguo?
¡Propina! Puede utilizar operadores if o lógicos anidados.
let person = {
      name = Juan,
      age = 39,
      height = 1.69
}*/
/*
let persona ={
  nombre:"Juan",
  edad:26,
  altura: 170
}
let peronsaTwo ={
  nombre:"Lisa",
  edad:24,
  altura:160
}

if(persona.altura>peronsaTwo.altura && persona.edad > peronsaTwo.edad){
  console.log(`la persona mas alta es ${persona.nombre} con una altura de ${persona.altura} y la mas antigua con ${persona.edad} años`)
}else{
  console.log(`la persona mas alta es ${personaTwo.nombre} con una altura de ${personaTwo.altura} y la mas antigua con ${personaTwo.edad} años`) 
  }
 */
//-------------------------------------------------------
/*Crea un programa que te permita ingresar en pantalla: tu nombre, edad, altura y visión. e imprimir a través de la consola una cadena
 “Estás capacitado para conducir”, para ello la persona debe: Tener al menos 18 años. Mide más de 110 cm. 
 Tener una visión de al menos 8 sobre 10. ¡Consejo! Recuerde el mensaje ( ) para ingresar datos en la pantalla.*/

/*let edad=prompt("ingrese su edad")
let altura= prompt("ingrese su altura")
let vision= prompt("ingrese su estado de visión")
 if(edad>=18 && altura>110 && vision>=8){
  console.log("Estás capacitado para conducir")
 }else{
  console.log("No Estás capacitado para conducir")
 }*/
//---------------------------------------------------

/*Crea un programa que te permita ingresar tu edad en la pantalla e imprimirla en la pantalla si eres:
infantil (0 a 12 años)
adolescente (de 13 a 18 años)
joven mayor (19 a 45 años)
personas mayores (mayores de 45 años)
¿Es realmente tan viejo? (más de 100 espectáculos)
¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla. */

/*let edad=prompt("ingrese su edad")

if(edad<=12 && edad>=0){
  console.log(" Eres infantil")

}else if(edad>12 && edad<=18) {
  console.log(" Eres Adolecente")
} else if (edad>=19 && edad<=45){
  console.log(" Eres Joven Mayor")
}else{
  console.log("eres un anciano ")
}*/

/* Crea un programa que te permita ingresar solo números del 1 al 3 en la pantalla y luego cualquier otro dato numérico. Imprimir en pantalla:
1: “El número ingresado es [ ]”
2: “El doble del número ingresado es [ ]”
3: “Tres veces el número ingresado es [ ]”
otro: “Ese valor no está permitido”
¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.Crea un programa que te permita ingresar solo números del 1 al 3 en la pantalla y luego cualquier otro dato numérico. Imprimir en pantalla:
1: “El número ingresado es [ ]”
2: “El doble del número ingresado es [ ]”
3: “Tres veces el número ingresado es [ ]”
otro: “Ese valor no está permitido”
¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.*/

/*let numeroPantalla = Number(prompt("ingrese un numero del 1 al 3"))

switch (numeroPantalla) {
  case 1:
    console.log(`El numero ingresado es ${numeroPantalla}`)
    break;
  case 2:
    console.log(`el doble del numero ingresado es ${numeroPantalla * 2}`)
    break;
  case 3:
    console.log(`el triple del numero ingresado es ${numeroPantalla * 3}`)
    break;
  default:
    console.log("el numero ingresado es incorrecto")
    break; 
} */
//------------------------------------Difficulty Level: High------------------------------------------------
/*Cree un programa que permita ingresar los siguientes datos en pantalla:

Nombre del cliente, 
Pase (vip o normal), 
Personas que tienen tu nombre ==> muestran un mensaje de bienvenida
o pase VIP ==> mostrar un mensaje de bienvenida

Entrada (sí o no).
Si tienes entrada pregunta si quieres utilizarla
Si es afirmativo ==> mostrar un mensaje de bienvenida
Si es negativo ==> mostrar mensaje de despedida

Y por último en caso de no tener el mismo nombre o pase o entrada VIP preguntar "¿quieres comprar?". Y en caso:
negativo ==> mostrar mensaje de despedida
afirmativo ==> solicitar dinero disponible, en caso:
Más de 1000 ==> muestra una venta exitosa y un mensaje de bienvenida
Menos de 1000 ==> mostrar mensaje de rechazo de ventas */

let nombreCliente = prompt("ingrese nombre de clientes")
let tipoPase = prompt("ingrese pase vip o normal")

if (tipoPase === "vip" || tipoPase === "normal") {
  console.log("¡Bienvenido!")
} else if (nombreCliente) {
  switch (nombreCliente) {
    case "juan":
      console.log("¡Bienvenido!");
      break;
    case "nico":
      console.log("¡Bienvenido!");
      break;
    case "guille":
      console.log("¡Bienvenido!");
      break;
    case "lucio":
      console.log("¡Bienvenido!");
      break;
    default:
      break;
  }
}
let entrada = prompt("tiene entrada si o no ?")
if (entrada == "si") {
  console.log("¡Bienvenido!")
}
let comprarEntrada = prompt("Quieres comprar entradas")
if (comprarEntrada == "si") {
  let dineroDisponible = prompt("ingrese dinero disponible")
  if (dineroDisponible >= 1000) {
    console.log(" venta exitosa, Bienvendio")
  } else {
    console.log("venta rechazada")
  }
}




