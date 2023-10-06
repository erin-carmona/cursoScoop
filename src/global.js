var a; // declarando
var b = "b" // declaramos / asignamos
b = "bb"; // reasignaciom
var a = "aa"; // redeclaracion

// Global Scope
var fruit = "Apple"; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = "Colombia"; //
    console.log(country);
}

countries();
console.log(country);