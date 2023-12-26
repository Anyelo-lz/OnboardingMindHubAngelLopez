/*Usando un bucle "for", crea un programa que permita la entrada de un número entre 1 y 100 a través de un prompt, 
luego imprime a través de la consola todos los números que se encuentran entre el número ingresado y el 0 (es decir, en orden descendente).
Supongamos que el número introducido es 5. Este sería el resultado:

5
4
3
2
1
0 */

/*let numeroIngresado = Number(prompt("Ingrese un número entre 1 y 100:"));

if (numeroIngresado >= 1 && numeroIngresado <= 100) {
    for (let i = numeroIngresado; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("El número ingresado no está en el rango adecuado.");
}*/
//-----------------------------------------------------------

/*Usando un bucle "for", haz un programa que permita la entrada de un número a través de un 
prompt entre 1 y 10, y muestre a través de la consola la tabla de multiplicar (solo los primeros 10 múltiplos).
Supongamos que el número introducido es 5. Este sería el resultado: 
1x5=5
2x5=10
3x5=15
4x5=20
5x5=25
6x5=30
7x5=35
8x5=40
9x5=45
10x5=50*/

/*let numeroIngresado = Number(prompt("Ingrese un número entre 1 y 10:"))
if (numeroIngresado >= 1 && numeroIngresado <= 10) {
   for (let i = 1; i <= 10; i++) {
       let resultado = i * numeroIngresado;
       console.log(`${i}x${numeroIngresado}=${resultado}`)
   }
} else {
   console.log("El número ingresado no está en el rango adecuado.")
}*/

//------------------------------------------------------------------------
/*Usando un bucle "while", cree un programa que permita la entrada de números a través de un mensaje. 
Los números deben sumarse (acumularse) en una variable resultante. La entrada de números finalizará cuando el usuario introduzca un 0. 
Al final, muestre el valor de la variable de suma a través de la consola.
Supongamos que ingresó 1, luego 3 y luego 0. Este sería el resultado: 4. 
¡Propina! Tenga cuidado, recuerde que el promt devuelve una cadena. */

 
// Inicializar la variable de suma
/*
let suma = 0
let ingreseNumeros

while ((ingreseNumeros = Number(prompt("Ingrese un número (ingrese 0 para finalizar):"))) !== 0) {
  suma += ingreseNumeros;
}

console.log("El resultado de la suma es: " + suma)*/

//---------------------------------------------------------------
/*Utilizando ahora un bucle "do while" y siguiendo las mismas instrucciones que el ejercicio anterior, 
se muestra en la consola, el valor de la variable que acumula la suma de los números introducidos.
Supongamos que ingresó 1, luego 3 y luego 0. Este sería el resultado: 4
¡Propina! Usa comillas graves para esto. */
 

/*let suma = 0
let numeroIngresado

do {
    numeroIngresado = Number(prompt("Ingrese un número (ingrese 0 para finalizar):"))
    suma += numeroIngresado
} while (!numeroIngresado ==0 )

console.log(`El resultado es ${suma}`)
*/
//------------------------------------------------------------
/*Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un programa que recorra dicho objeto 
y solo muestre todas las claves de sus propiedades en la consola.
En la consola debería verse así:

nombre

apellido

origen

Estudios */

const objetoPersona={
    nombre:"Julian",
    apellido:"Velazquez",
    origen:"La Plata",
    Estudio:"informática"
}

for (const objetoPer in objetoPersona) {
    console.log(objetoPer)
}
//--------------------------------------------
/*Usando un bucle "for in", cree un programa que se ejecute a través del objeto creado en el 
ejercicio anterior y solo muestre los valores de cada una de las teclas en la consola.*/
for (const valor in objetoPersona) {
      console.log(objetoPersona[valor])
}

//---------------Difficulty Level: Medium-------------------------
/*Usando el bucle que consideres, vamos a usar la variable que almacenó la suma de los números en el 
ejercicio #3 como un "número secreto". El nuevo programa permitirá ingresar números a través de un prompt 
hasta que el número ingresado sea igual al guardado en la variable del ejercicio #3.

Si el valor introducido es mayor que el número "secreto", notifique al usuario a través de 
la consola ("el número introducido es mayor que el secreto", lo mismo si el valor es menor.
Y así sucesivamente hasta que el usuario adivine el número secreto. Por último, muestra un mensaje de 
felicitación en la pantalla y te dice cuántos intentos has hecho ("¡Lo has hecho bien! El número secreto 
era <number> e hiciste <x> intentos" */

/*let sumaSecreta = 5 // Supongamos que 5 es la suma secreta
let intentos = 0
let adivinado = false

while (!adivinado) {
  let numeroIngresado = parseInt(prompt("Ingresa un número:"))

  if (isNaN(numeroIngresado)) {
    console.log("Por favor, ingresa un número válido.")
    continue
  }

  intentos++

  if (numeroIngresado === sumaSecreta) {
    adivinado = true
    console.log(`¡Lo has hecho bien! El número secreto era ${sumaSecreta} e hiciste ${intentos} intentos.`)
  } else if (numeroIngresado > sumaSecreta) {
    console.log("El número introducido es mayor que el secreto.")
  } else {
    console.log("El número introducido es menor que el secreto.")
  }
}*/
//----------------------------------------------------------------------
/*Usando el bucle que considere correcto, cree un programa que reciba un número a través de un mensaje y muestre todos 
sus divisores (divisores) a través de la consola.

Consejo: DIVISORES/DIVISORES: son todos los números naturales que dividen exactamente a otro número 
natural. Ejemplo: "Los divisores de '15' son: 1, 3, 5 y 15. (La división de '15' entre cualquiera de estos números es exacta)

Supongamos que se ingresó 50. Este sería el resultado 50, 25, 10, 5, 2, 1
¡Propina! Recuerde o investigue al operador % */

/*let numeros = parseInt(prompt("Ingrese un número: "))
let divisores = []

for (let i = 1; i <= numeros; i++) {
    if (numero % i === 0) {
        divisores.push(i)
    }
}

console.log(`Los divisores de ${numeros} son: ${divisores.join(', ')}`)*/

//-------------------------------------------------------------------
/*Teniendo en cuenta la función Bell sonando, crea un bucle (el que consideres) que muestre una cadena 
a través de la consola que a su vez concatene la cadena que devuelve la función tantas veces como el número
 que el usuario introduzca en el teclado.

Por ejemplo, si el usuario ingresa el número 5, el resultado debería ser:
Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

function RingBell() {

     console.log("Ding Dong")

     return "Ding Dong,"

{ */
/*
function RingBell() {
    console.log("Ding Dong")
    return "Ding Dong, "
}

let numero = parseInt(prompt("Ingrese un número: "))
let resultado = ""

for (let i = 0; i < numero; i++) {
    resultado += RingBell()
}*/

//-------------------------------------------
/*Partiendo de las constantes dateLimit y dates, haz un bucle 
(el que consideres) que muestre en la consola las fechas del array que son mayores 
o iguales a la fecha almacenada en la constante dateLimite.

const dateLimit = "1997-8-3"

const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"] */

const dateLimit = new Date("1997-8-3")
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for (let i = 0; i < dates.length; i++) {
    const currentDate = new Date(dates[i])
    if (currentDate >= dateLimit) {
        console.log(currentDate.toISOString().split('T')[0])
    }
}
//----------------------------------------
/*Usando un bucle "for of", cree una matriz de cadenas con colores e imprima 
cada uno de los colores incluidos en la matriz a través de la consola.

En la consola debería verse así (por ejemplo):

Rojo

Verde

Azul

Violeta

Marrón

Negro

Blanco */

/*const colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];

for (const color of colores) {
    console.log(color);
}*/
//----------------------------------------------------
/*Ahora toma el bucle del ejercicio anterior como referencia y colócalo dentro de una 
función para que realice la misma tarea pero se pueda reutilizar tantas veces como sea necesario 
sin tener que reescribir el código del bucle. */
function imprimirColores(colores) {
    const coloresTwo = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]

    for (const color of coloresTwo) {
        console.log(color)
    }
}

imprimirColores()
//----------------------------------------------------

/*Usando un bucle "for of", crea una matriz con 5 números y crea un programa que se 
ejecute a través de esa matriz y muestre el doble de cada uno de los elementos, en la consola.

En la consola debería verse así:

El número es el 5 y su doble es el 10
El número es el 7 y su doble es el 14
El número es 1 y su doble es 2
El número es el 3 y su doble es el 6
El número es 50 y su doble es 100 */

const numeros = [5, 7, 1, 3, 50]

for (const numero of numeros) {
    const doble = numero * 2
    console.log(`El número es ${numero} y su doble es ${doble}`)
}
//-------------------------------------------------------------
/*Usando el bucle que creas correcto, crea una matriz con al menos 4 objetos con 4 
propiedades, cada uno de esos objetos creados debe representar un miembro de un grupo familiar
(pueden ser personas ficticias).

A continuación, crea un programa (al decir programa la intención es que no sea solo el 
bucle, sino una función que contenga el bucle) que muestre un mensaje de presentación para cada elemento de la matriz a través de la consola.

En la consola debería parecerse al ejemplo.
Hola, soy María López (madre) y tengo 40 años.
Hola, soy Juan Pérez (padre) y tengo 38 años.
Hola, soy Romina Pérez (hija) y tengo 13 años.
Hola, soy Tomás Perez (hijo) y tengo 10 años.

Modelo de objetos

{nombre: 'Juan', apellido: 'Pérez', edad: 38 años, miembro: 'padre'}

¡Propina! Usa comillas graves para esto. */

const familia = [
    { nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
    { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
    { nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija' },
    { nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo' }
]

function presentarFamilia(miembros) {
    for (const miembro of miembros) {
        console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`)
    }
}

presentarFamilia(familia)

/*Usando el bucle que considere, cree un programa que permita la entrada de
 números en la pantalla a través de un mensaje y

calcula la suma de los números pares por un lado y

los números impares en el otro.

La entrada de datos finaliza cuando el usuario introduce un 0. 

En la consola debería verse así (por ejemplo):

Número par: 38

Números impares 30 */

/*let numero
let sumaPares = 0
let sumaImpares = 0

do {
    numero = Number(prompt("Ingrese un número (0 para salir):"))
    if (numero !== 0) {
        if (numero % 2 === 0) {
            sumaPares += numero
        } else {
            sumaImpares += numero
        }
    }
} while (numero !== 0)

console.log(`Suma de números pares: ${sumaPares}`)
console.log(`Suma de números impares: ${sumaImpares}`)*/
//-----------------------------------------------
/*Usando el bucle que creas que es correcto, crea una matriz de 10 números y crea un programa 
que imprima el número más grande de la matriz, en la pantalla. */
const numerosOrdem = [15, 7, 23, 45, 8, 37, 12, 50, 3, 19];
let numeroMasGrande = numeros[0];

for (const numero of numerosOrdem) {
    if (numero > numeroMasGrande) {
        numeroMasGrande = numero;
    }
}

console.log(`El número más grande en la matriz es: ${numeroMasGrande}`)

