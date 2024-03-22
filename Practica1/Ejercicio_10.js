function suma(Array){
    let suma = 0
    for(let numero of Array){
        suma += numero
    }
    return suma
}
var numeros = [1,2,3,4]
var resultado = suma(numeros)
console.log("La suma del array es:",resultado)