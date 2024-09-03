// alert("Rahman");
// console.log("Rahman Altaf");
// console.log("First Javascript Code");

// fullname = "Rahman";

// age = 25;
// price = 342;
// x = null;
// y = true;
// z = false;
// a = undefined;
// console.log(a, z, y, x, price, age, fullname);

// Java Script is DYNAMICALLY TYPED LANGUAGE MEAN WE CAN CHANGE THE VALUE OF VARIABLE AT ANY TIME LIKE IN START
//  X=23 AND LATE ON AFTER FEW LINES WE CAN SAY X = "RAHMAN"

//  7 types of Data Type
// primitive data types are - number, string , null ,undefined , boolean ,symbol , bigint
// non-primitive data types - objects
// object is a collection of data  ( or objects mey key value store hota hay like age : 24 or ye curly braces mey hota hay)
// key value ko access karny k 2 tareeqay heyn obj.key value name // OR // obj["key value name "] see example
//  See Example

// const student = {
//   name: "Rahman",
//   age: 24,
//   salary: 35000,
//   hours: 8,
// };
// // how to add value in key pair out of block scope
// // see example

// student["age"] = student["age"] + 1;
// student["name"]= "Rahman Altaf"
// // example of accessing key values
// console.log(student.age);
// console.log(student["name"]);
// // student();

let a = 10;
let b = 20;
console.log("The Value Of A = ", a, "The Value Of B is = ", b);
console.log("Addition Of A & B Is = ", a + b);
console.log("Subtraction Of A & B Is = ", a - b);
console.log("Multiplication Of A & B Is = ", a * b);
console.log("Division Of A & B Is = ", a / b);
console.log("Modulus Of A & B Is = ", a % b);
console.log("Exponentiation Of A & B Is = ", a ** b);
// Uniary Operator Increment And Decrement ( Post And Pre Increment And Decrement)
// Pre Inncrement change Value First than Print See Example
console.log(
  "The Actual Value Of A Is 10 but according to Pre Increment The Value Will be 11 ",
  ++a
);
// as it is Decrement
console.log(
  "The Actual Value Of A Is 10 but according to Pre Decrement The Value Will be 9 ",
  --a
);
//  As it is Post Increment ( The Value Will Change After Implimenting For Example it print first the actual
// value and then do increment or decrement )
console.log(
  "The Actual Value of B Is 20 And it print 20 because it is post increment So The Answer Will Be 20 ",
  b++
);
// As It Is Decrement
console.log(
  "The Actual Value of B Is 20 And it print 20 because it is post Decrement So the Answer Will be 20 ",
  b--
);

// Assignment Operator
a += 4;
console.log("Now The Value Will be 10 but the answer will 14 ", a);
a -= 4;
console.log("Now The Value Will be 10 but the answer will 6 ", a);

//  Comparison Operator
//  Equal To ==
//  Not Equal To !=
//  Equal To Operator Example
console.log("IS a Is Equal To b", a == b);
console.log("Is a Is Not Equal To B ", a != b);
let w = 9;
let z = 10;
console.log("Is W Is Equal To Z ", w == z);
// >, <, >=, <=
console.log("Is 10 > 20", a > b);
console.log("Is 10 < 20", a < b);
console.log("Is 10 >= 20", a >= b);
console.log("Is 10 <= 20", a <= b);

// Logical Operators
// Logical And (&&) both true hona zaroori heyn ( 1 b false to sari false )
// Logical Not (!) 
// Logical Or (||) 1 ka true hona zaroori hay

// ----------------------------
// Example Of// Logical And (&&) both true hona zaroori heyn
let cond1 = w == z;
let cond2 = w < z;
console.log("Cond 1 && Cond 2 ", cond1 && cond2);
