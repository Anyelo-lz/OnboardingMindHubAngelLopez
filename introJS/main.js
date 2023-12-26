let myFirstName= "Angel William Leonel"
let myLastName ="Lopez"
let myAge=28
let petAge=3
let fullName= `${myFirstName} ${myLastName}`
let Presentationtext =` My nombre es ${myFirstName} ${myLastName} y tengo ${myAge} años y mi mascota tiene ${petAge} años` 
console.log(Presentationtext)

/*----------------Nivel:Medio--------------*/

let sumAges= myAge + petAge
let subrestAges= myAge - petAge
let productAges=myAge * petAge
let divisionAges= myAge / petAge

const student={
  nombreCompleto: "Juan Sanchez",
  edad:"26 años",
  estudia:"Medicina",
  Grado:"3 año",
  Domicilio:"Corrientes Capital",
} 

console.log(student.nombreCompleto)
console.log(student.edad)
console.log(student.estudia)
console.log(student.Grado)
console.log(student.Domicilio)

const pet={
    tipoDeAnimal:"Gato",
    Color:"Naranja",
    nombre: "Ronny",
    edad:"3 años",
    rutinaDiaria:"Salir a jugar a las 00 hs",
    comidaFavorita:"Purina one",
  } 

  console.table(pet)

  console.log(pet.tipoDeAnimal)
  console.log(pet.Color)
  console.log(pet.nombre)
  console.log(pet.edad)
  console.log(pet.rutinaDiaria)
  console.log(pet.comidaFavorita)

  const fruits =["Naranja", "Fresa", "Pera", "Uva", "Manzana"]
  console.log(fruits)
  
  console.log(fruits[0])
  console.log(fruits[1])
  console.log(fruits[2])
  console.log(fruits[3])
  console.log(fruits[4])

  /*-------------Nivel:Alto-------------*/


  /*let edad= prompt()

  if(edad>18){
    console.log("Eres mayor de edad")
  }else{
    console.log("No eres mayor de edad")
  }*/

const numero=[12,41,51,80,59]
console.log(numero)
console.log(numero[0])
console.log(numero[1])
console.log(numero[2])
console.log(numero[3])
console.log(numero[4])

const familia=[ {
  nombre:"Graciela",
  edad:"40 años",
},
{
  nombre:"Miguel",
  edad:"56 años"
},
{
  nombre:"Evelyn",
  edad:"27 años"
},
{
  nombre:"Emily",
  edad:"18 años"
},
{
  nombre:"Wily",
  edad:"28 años"
}
]

console.log(familia)
 


let randomText= `hoy comi ${fruits[1]}  y me calmo mi estres y fui al super y solo tenia en mi billetera ${numero[3]} pesos y fui a la casa de ${familia[4].nombre} para pedirle mas plata`
console.log(randomText)
 