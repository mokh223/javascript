//comment is not count as statement
"use strict";
//must define its as first statement in the code or first in scope
let x = 3.14;
console.log(x);
// y = 3.14;    This will cause an error because x is not declared



let z = 3.14;
console.log(z);

myFunction();  //This will not caused an error because js hoisting
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

function myFunction() {
  //y = 3.14;   // This will also cause an error because y is not declared
  //let public = 3.14; //this will cause an error because public is reserve keyword
  let publ = 3.14;
  console.log(publ);
}