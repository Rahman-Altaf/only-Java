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

const student = {
  name: "Rahman",
  age: 24,
  salary: 35000,
  hours: 8,
};
// how to add value in key pair out of block scope 
// see example 

student["age"] = student["age"] + 1;
student["name"]= "Rahman Altaf"
// example of accessing key values 
console.log(student.age);
console.log(student["name"]);
// student();
