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

// let a = 10;
// let b = 20;
// console.log("The Value Of A = ", a, "The Value Of B is = ", b);
// console.log("Addition Of A & B Is = ", a + b);
// console.log("Subtraction Of A & B Is = ", a - b);
// console.log("Multiplication Of A & B Is = ", a * b);
// console.log("Division Of A & B Is = ", a / b);
// console.log("Modulus Of A & B Is = ", a % b);
// console.log("Exponentiation Of A & B Is = ", a ** b);
// // Uniary Operator Increment And Decrement ( Post And Pre Increment And Decrement)
// // Pre Inncrement change Value First than Print See Example
// console.log(
//   "The Actual Value Of A Is 10 but according to Pre Increment The Value Will be 11 ",
//   ++a
// );
// // as it is Decrement
// console.log(
//   "The Actual Value Of A Is 10 but according to Pre Decrement The Value Will be 9 ",
//   --a
// );
// //  As it is Post Increment ( The Value Will Change After Implimenting For Example it print first the actual
// // value and then do increment or decrement )
// console.log(
//   "The Actual Value of B Is 20 And it print 20 because it is post increment So The Answer Will Be 20 ",
//   b++
// );
// // As It Is Decrement
// console.log(
//   "The Actual Value of B Is 20 And it print 20 because it is post Decrement So the Answer Will be 20 ",
//   b--
// );

// // Assignment Operator
// a += 4;
// console.log("Now The Value Will be 10 but the answer will 14 ", a);
// a -= 4;
// console.log("Now The Value Will be 10 but the answer will 6 ", a);

// //  Comparison Operator
// //  Equal To ==
// //  Not Equal To !=
// //  Equal To Operator Example
// console.log("IS a Is Equal To b", a == b);
// // console.log("Is a Is Not Equal To B ", a != b);
// let w = 9;
// let z = 10;
// console.log("Is W Is Equal To Z ", w == z);
// // >, <, >=, <=
// console.log("Is 10 > 20", a > b);
// console.log("Is 10 < 20", a < b);
// console.log("Is 10 >= 20", a >= b);
// console.log("Is 10 <= 20", a <= b);

// Logical Operators
// Logical And (&&) both true hona zaroori heyn ( 1 b false to sari false )
// Logical Not (!) Koi B Expression agr true dey raha ho ga to usko False bana dey ga or agr false dey raha ho to true kar dey ga
// Logical Or (||) 2 conditions mey say koi 1 b true hoa to true

// // ----------------------------
// // Example Of// Logical And (&&) both true hona zaroori heyn
// let cond1 = w == z;
// let cond2 = w < z;
// console.log("Cond 1 && Cond 2 ", cond1 && cond2);

// // Example Of Logical Or// Logical Or (||) 2 conditions mey say koi 1 b true hoa to true

// console.log("Cond 1 || Cond 2 ", cond1 || cond2);

// // Example of Logical Not (!) Koi B Expression agr true dey raha ho ga to usko False bana dey ga or agr false dey raha ho to true kar dey ga
// console.log(
//   "9 > 10 Actual Answer Is False But due to NOt operator it show true ",
//   !(w > z)
// );
// console.log(
//   "9 < 10 Actual Answer Is True But due to NOt operator it show False",
//   !(w < z)
// );

// --------------------------------------------------------------------------------------------------------------
// Conditional Statement
// If Statement
// ELSE IF STATEMENT
// --------------------------------------------------------------------------------------------------------------

// // If Statement
// if (w > z) {
//   console.log(z, "Z Is Greater Than w");
// }

// Example Of // If Else Statement  2 Best Example
// Vote Example
// let age = 13;
// if (age >= 18) {
//   console.log("You Can Vote");
// } else {
//   console.log("You Can Not Vote Because You Are Under Age And Your Age Is ",age);
// }
//  Next Example Of IS STATEMENT IS ODD AND EVEN NUMBER
// let num = 26
// if (num % 2 == 0) {
//   console.log(num, "This Number Is Even");
// } else {
//   console.log(num,"This Number Is Odd")
// }

// EXAMPLE OF ELSE IF STATEMENT
// let coinName = "Bit Coin";
// let coin = 70;
// if (coin == 200) {
//   console.log("Purchase This coin", coinName);
// } else if (coin <= 250) {
//   console.log(
//     "Not Best Time to Purchase Coin Wait for It Because Price Is Higher Than 250",
//     coin
//   );
// } else if (coin > 300) {
//   console.log("Don't Buy This Coin Price Is Too Higher Than 280 ", coin);
// } else {
//   console.log("Purchase Right Now Because Price is Too Low To Buy", coin);
// }

// // Another Example Of Color
// mode = "silver";
// let color;
// if (mode === "Dark") {
//   color: "blue";
//   console.log("blue");
// } else if (mode === "pink") {
//   color: "pink";
//   console.log("Pink");
// } else if (mode === "brown") {
//   color: "brown";
//   console.log("Brown");
// } else {
//   color: "White";
//   console.log("White");
// }

// console.log(color);

// --------------------------------------------------------------------------------------------------------------
// Turnary Operator ( Is mey [a?b:c ] a k pas koi condition hay for example 10>5 ab jab ye true
// ho gi to (b) return ho ga nhe to (C))
//  Example Of Turnary Operator
//  2 methods to write turnary operator and get value via console
// 1st Turnary operator ko 1 variable mey store karwana
// let age = 25;
// let result = age >= 18 ? "Adult" : "Not Adult ";
// console.log(result);

// // 2nd way to write Turnary Operator Via using console.log without saving in a variable
// let age1 = 17;
// age1 >= 18 ? console.log("Adult") : console.log("Not Adult ");

// ***************
// ***************
// PRACTICE 1 For Getting a number to user via prompt and check its multiple of 5 ?
// let numb = prompt("Enter A Number");
// console.log("You Enter A Number ", numb);
// if (numb % 5 === 0) {
//   console.log("Yes Given Number Is The Multiple Of 5");
// } else {
//   console.log("Sorry Given Number is Not Multiple Of 5");
// }

// ***************
// ***************
// PRACTICE 2 For Grading System Of Student Passing Marks And Grade

// let numb = prompt("Enter Your Marks");
// console.log("Lets Check Your Grade Here");
// if (numb >= 80 && numb <= 100) {
//   console.log("Congratulation Your Pass Your Exam With Grade A ");
// } else if (numb >= 70 && numb <= 89) {
//   console.log("Congratulation Your Pass Your Exam With Grade B ");
// } else if (numb >= 60 && numb <= 69) {
//   console.log("Congratulation Your Pass Your Exam With Grade C");
// } else if (numb >= 50 && numb <= 59) {
//   console.log("Congratulation Your Pass Your Exam With Grade D");
// } else if (numb >= 40 && numb <= 49) {
//   console.log("Congratulation Your Pass Your Exam With Grade F");
// } else {
//   console.log("Sorry You Failed Try Again Later");
// }

// --------------------------------------------------------------------------------------------------------------
// Loops and Strings Chapter 3
// Loop :- To execute again and again
// For Loop
// Infinite Loop
// While Loop ( loop can check the condition in start)
// do while loop ( at least run once either condition is true or false )
// For of Loop
//  For in Loop

// --------------------------------------------------------------------------------------------------------------

// For Loop
// let title = "Rahman";
// for (i = 1; i <= 5; i++) {
//   console.log(title);
// }

// let sum = 0;
// for (i = 0; i <= 100; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(sum);

// While Loop

// let i = 0;
// while (i <= 5) {
//   console.log("The Value Of I Is = ", i);
//   i++;
// }

// // Do While Loop

// let i = 25;
// do {
//   console.log(i);
//   i--;
// } while (i >= 20);

// For-of Loop

// let names = "Java Script";
// let length = 0;
// for (i of names) {
//   console.log(i);
//   length++;
// }
// console.log("Lenght Of String Is = ", length);

// For In loop to find out the key and the key value
// let student = {
//   name: "Rahman" ,
//   age: 26,
//   salary: 500000,
//   hours: 9,

// }
// for (let key in student) {
//   console.log("Key And Its Value Are = ", key," ", "-->>", student[key] )
// }

// ****************************
// Practice Question 1 TO PRINT 0 TO 100 EVEN NUMBER
// ****************************
// let numb = 100;
// for (i = 0; i <= numb; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // odd Number

// let numbe = 100;
// for (i = 0; i <= numbe; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// ****************************
// Practice Question 2 ITS A GAME To Ask A RANDOM NUMBER TO USER AND CHECK USER ENTER WRITE NUMBER OR NOT ?
// ****************************
// let randomnumber = 99;
// let number = prompt(" Enter A Number 0 to 99 ");
// console.log("You Entered A Number", number);
// while (number != randomnumber) {
//   number = prompt("Your Entered Wrong Number");
// }
// console.log("Congratulation You Won The Prize");

// --------------------------------------------------------------------------------------------------------------

//  STRINGS

// --------------------------------------------------------------------------------------------------------------

// let str = "Rahman ";
// let len = str[0];
// console.log(str);
// console.log(len);
// for (i = 0; i <= str.length; i++) {
//   console.log(str);
// }

// Template Literals ( Using Back Ticks)

// let str = `Rahman`;
// console.log(str);

//  String Interpolation (adding place holder/ expression in string via ${})
// Escape Character \n (new line ) , \t (tab like spaces)
//  Example Of String Interpolation + Escape Character ;

// let stud = {
//   name: `Rahman `,
//   salary: 50000,
//   age: 25,
//   duty_hours: 8,
// };
// console.log(
//   `My Name Is ${stud.name} \n And My Age is ${stud.age}\n And My Salary Is ${
//     stud.salary * 2
//   } \n And My Duty Hour Is ${stud.duty_hours - 4}`
// );

// STRING METHODS
// UPPER CASE / LOWER CASE / TRIM

// EXAMPLE
// let str = "JaVA Scrip     t ";
// let numb = "123456789"
// let str1 = str.toUpperCase();
// let str2 = str.toLowerCase();
// let str3 = str.trim()
// let str4 = str.trimStart();
// let str5 = str.trimEnd();
// let str6 = numb.slice(2, 6)
// let str7 = str.concat(numb)
// let str8 = str.replace("Ja", "12")
// let str9 = str.charAt(2)
// console.log(
//   `${str1}\n ${str1}\n ${str2}\n ${str3}\n ${str4}\n ${str5}\n ${str6} \n ${str7} \n ${str8} \n ${str9}`
// );

// *********************
// PRACTICE QUESTION OF USER NAME FROM PROMP AND CONCATINATE @ AND STRING FULL LENGTH
// *********************

// let fullname = prompt("Enter Your Full Name ");
// console.log(`Your fullname Is ${fullname}`);
// let str = "@";
// // let len = str.length
// let username = console.log(
//   str.concat(fullname + fullname.length)
// );
// console.log(username);

// **************
// ARRAYS
// **************
// arr = [53, 63, 24, 45, 65, 34];
// length = arr.length;
// index0 = arr[0];
// arr[2] = 66;
// for (i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }
// // console.log(arr);
// // console.log(length);
// console.log(index0);

// if (index0 % 2 === 0) {
//   console.log("Index Of Arr 0 Is modulus Of 2");
// } else {
//   console.log("Index Of Arr 0 Is Not modulus Of 2");
// }

// TO ACCESSING THE ARRAY OF INDIVIDUAL VALUE IN ARRAY USING FOR OF LOOP
// arr2 = [53, 63, 24, 45, 65, 34];
// for (let element of arr2) {
//   console.log(element);
// }
// // ANOTHER EXAMPLE OF FOR OF LOOP AND ARRAY
// cities = ["Sgd", "Isb", "Lhr", "KCH", "PESR"];
// for (let city of cities) {
//   const upper = city.toUpperCase();
//   console.log(upper);
// }

// PRACTICE QUESTION TO FIND OUT AVERAGE MARKS OF A CLASS IN A ARRAY
//  FORMULA SUM OF TOTAL MARKS / NUMBER OF STUDENTS = AVG

// arr3 = [55, 42, 43, 54, 65, 63];
// let sum = 0
// for (let val of arr3) {
//       sum += val
// }
// let avg = sum / arr3.length
//   console.log(`Avg Marks Of Class Is ${avg}`)

// // PRACTICE QUESTION 2 FOR 10% OFF ON EACH PRICE OF ITEMS
// let items = [100, 200, 300, 400, 500];
// let i = 0;

// for (let val of items) {
//   console.log(`Value of Items At Index ${i} = ${val}  `);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`Value Of Items After Offer = ${items[i]}`);
//   i++;
// }
// ---------------------------------------------------------------
// Arryays Chapter Starting ************
// Push Method To add something at the end of an array

// let arr = [1, 2, 3, 4, 5,];
// console.log(arr);
// arr[2] = arr.push(10)
// console.log(arr.push(7));

// POP METHOD TO DELTE SOMETHING FROM ARRAY
// let array = [1, 2, 3, 4, 5];
// console.log(array)
// console.log(array.pop());
// console.log(array);

// TO STRING METHOD TO CHANGE ARRAY IN A STRING
// let marks = [34, 21, 43, 42, 64]
// console.log(marks)

// console.log(marks.toString());
// console.log(marks);

// CONCAT METHOD TO JOIN A COMMON HERO OF 2 ARRAYS
// let names = ["Ali", "Subhan"]
// let marks = [2, 3]
// let con = names.concat(marks )
// console.log(con)

// UNSHIFT METHOD IS TOTALLLY WORK LIKE PUSH (WORK IN THE START OF THE ARRAY )
// let array = [2, 4, 5, 6, 7, 89];
// console.log(`Array Before Addition ${array}`);
// let add = (array.unshift(99999));
// console.log(`Array After Addition ${add}`);
// //  SHIFT METHOD IS TOTALLLY WORK LIKE POP [WORK IN THE START OF THE ARRAY ]
// console.log(`Array Before Addition ${array}`);
// console.log(array.shift());
// console.log(`Array Before After ${array}`);

// Slice (the methodolgy of slice is same as it is in string to bring a piece of Array with start and end point )
// let array = [1, 2, 3, 4, 5]
// let arr = array.slice(0, 3)
// console.log(arr)

// SPLICE MEHTOD
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(3, 1, 88));
// console.log(arr)
// let array = arr.splice(1, 2, 99, 89);
// console.log(array);

// Practice QUESTION 1 
// Add Companies Name 
//  Remove First company name 
// Remove Uber and Add Ola
// Add Amazon at the end 
// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// let deleted = arr.shift()
// console.log(arr)
// let removed = arr.splice(1, 1, "Ola")
// console.log(arr)
// let addition = arr.pop()
// console.log(arr)