let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion




// Detailed Notes
/*
Type Conversion in JavaScript

JavaScript performs implicit (automatic) and explicit (manual) type conversion. Understanding these is crucial to avoid bugs.

1. Implicit Conversion (Type Coercion)

JavaScript automatically converts types when operators or functions expect a different type.
*/

// String + Number → String
console.log("5" + 1);        // "51" (concatenation)

// Number + Boolean → Number (true=1, false=0)
console.log(10 + true);      // 11

// Comparison (==) does coercion
console.log("5" == 5);       // true (string → number)
console.log("" == false);    // true (both falsy)

console.log([] + []);        // "" (arrays → strings)
console.log([] + {});        // "[object Object]"
console.log({} + []);        // 0 (in some environments)

/*
2. Explicit Conversion (Manual)
You can force type conversion using built-in functions.
*/

// A. Convert to String (String() or .toString())
let num = 42;
console.log(String(num));    // "42"
console.log(num.toString()); // "42" (fails on null/undefined)

let arr = [1, 2];
console.log(String(arr));    // "1,2"

// B. Convert to Number (Number(), parseInt(), parseFloat())
console.log(Number("42"));    // 42
console.log(Number("42px"));  // NaN (Not a Number)
console.log(parseInt("42px")); // 42 (ignores non-numeric suffix)
console.log(parseFloat("3.14")); // 3.14

// Boolean → Number
console.log(Number(true));    // 1
console.log(Number(false));   // 0


// C. Convert to Boolean (Boolean() or !!)
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean("Hi"));   // true
console.log(Boolean([]));     // true (empty array is truthy!)
console.log(Boolean({}));     // true (empty object is truthy!)

// Shortcut using !!
console.log(!!"Hello");       // true

// 3. Special Cases

// NaN (Not a Number)
console.log(Number("Hello")); // NaN
console.log(isNaN("Hello"));  // true (but be careful!)
console.log(Number.isNaN("Hello")); // false (safer)

// null and undefined
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

// Objects → Primitives
console.log(String({}));        // "[object Object]"
console.log(Number({}));        // NaN
console.log(String([1, 2]));    // "1,2"
console.log(Number([10]));      // 10 (single-element array)
console.log(Number([1, 2]));    // NaN (multi-element array)
