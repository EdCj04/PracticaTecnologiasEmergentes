let str = "Hola Mundo";

console.log(str.length); // 10
console.log(str.toUpperCase()); // "HOLA MUNDO"
console.log(str.charAt(1)); // "o"
console.log(str.concat(", Bienvenido")); // "Hola Mundo, Bienvenido"
console.log(str.indexOf("Mundo")); // 5
console.log(str.startsWith("Hola")); // true
console.log(str.endsWith("do")); // true
console.log(str.slice(1, 4)); // "ola"
console.log(str.replace("Mundo", "Amigo")); // "Hola Amigo"
console.log(str.split(" ")); // ["Hola", "Mundo"]
console.log(str.trim()); // "Hola Mundo"
