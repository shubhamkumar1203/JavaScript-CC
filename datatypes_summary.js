// Return type of variables in JavaScript

// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

const score = 100
const scoreValue = 100.33

let userEmail;

const isLoggedIn = false

const id = Symbol('123')
const otherid = Symbol('123')

console.log (id === otherid)



// 2) Non-primitive Datatypes

// Arrays  =>  object
// Function  =>  function
// // Object  =>  object

const heroes = ["Shaktimaan", "Doga", "Nagaraaj"];

let myObj = {
    name: "Shubham"
    age: 22
};

const MyFunction = function(){
    console.log("Shubham");
}

