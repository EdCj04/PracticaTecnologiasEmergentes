var a = "Varibles externa"
function miFuncion(){
    var b ="varable interna"
    console.log("Desde dentro de la funcion:")
    console.log("Variable externa:",a)
    console.log("Variable interna",b)
}
//Acceder a la variable externa desde fuera de la funcion 
console.log(a)
//Acceder a la variable interna desde fuera de la funcion
//Lanzara un error console.log(b)

//Llamamos a la funcion
miFuncion()