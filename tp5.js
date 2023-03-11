/* 1 - Dados 2 arrays ["Juan", "Dani"] y ["Leo", "Monica", "Juliana"], 
escribir una función que concatene "unifique" los dos array y devuelva un solo array 
["Juan", "Dani", "Leo", "Monica", "Juliana"]. */

let arr1 = ["Juan", "Dani"]
let arr2 = ["Leo", "Monica", "Juliana"]

const arrTotal = (a, b) =>  a.concat(b)

console.log(arrTotal(arr1, arr2));

/* 2 - Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal 
(no importa si es mayúscula o minúscula), y devuelva False en caso contrario.*/

function esVocal(letra) {
  return letra.match(/[aeiouAEIOU]/) ? true : false
}

console.log(esVocal('a')) //test vocal
console.log(esVocal('k')) //test consonante

/* 3 - Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) 
y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), 
debería retornar «xxxxx».*/

const generar_caracteres = (n, a) => a.repeat(n)

console.log(generar_caracteres(5, 'x'))

/* 4 - Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar 
la suma de todos los números del arreglo.*/

function sumaArreglo(arreglo){
  const suma = arreglo.reduce((acu, valAct) => {return acu + valAct}, 0)
  return suma
}

console.log(sumaArreglo([1, 2, 6, 9, 18]))

/* 5 - Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero 
mayor de ellos, si son iguales devolver un String «son iguales».*/

const numeroMayor = (x, y) => Math.max(x, y)

console.log(numeroMayor(17, 9))
