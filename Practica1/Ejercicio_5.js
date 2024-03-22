var Array = []
var Elementos = prompt("Ingrese la cantidad de elementos que tendra el array")
for(var i=0;i<Elementos;i++){
  var dato = prompt("ingresa el elemento "+(i+1)+"para el array:")
  Array.push(dato)
}
//Condicional de la pregunta
if(Array.length > 5){
    console.log("El array es grande")
}
else{
    console.log("El array no es grande")
}