"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object










// Detailed Notes

/*
JavaScript is a dynamically typed language, meaning variables can hold values of any type without explicit declaration. There are two main categories of data types:

1. Primitive (Value) Types
2. Non-Primitive (Reference) Types


1. Primitive Data Types (Immutable)
These are the most basic data types in JavaScript. They are stored directly in memory and are immutable (cannot be modified after creation).

Type	      Description	                           Example

string	      Textual data (in quotes)	               "Hello", 'World'
number	      Numeric values (integers & floats)	    42, 3.14, NaN
boolean	      true or false	                            true, false
undefined	  A variable declared but not assigned	    let x; → x is undefined
null	      Explicitly represents "no value"	        let y = null;
symbol	      Unique and immutable identifier (ES6)	    const sym = Symbol('id');
bigint	      Arbitrary-precision integers (ES11)	    9007199254740991n
*/


let name = "Avinash";     // string
let age = 19;           // number
let isStudent = true;   // boolean
let job;                // undefined
let car = null;         // null
const id = Symbol("id"); // symbol
const bigNum = 12345678901234567890n; // bigint



console.log(typeof undefined); // undefined
console.log(typeof null); // object


/*
2. Non-Primitive Data Types (Mutable)
These are reference types (stored as references in memory) and can hold collections of data or complex structures.

Type	     Description	                    Example

object	     Key-value pairs (unordered)	    { name: "Avinash", age: 19 }
array	     Ordered lists (special object)	    [1, 2, 3]
function	 Callable objects (also objects)	function msg() { ... }
*/

const person = { name: "Avinash", age: 19 }; // object
const numbers = [1, 2, 3];               // array
function msg() {                       // function
  console.log("Hello!");
}




console.log(typeof "Avinash");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (⚠️ historical bug!)
console.log(typeof Symbol());  // "symbol"
console.log(typeof 10n);       // "bigint"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object" (use Array.isArray())
console.log(typeof function(){}); // "function"
