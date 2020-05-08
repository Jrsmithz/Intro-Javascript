// This is the file that includes all the notes and practice work of the 2nd time taking this second.

console.log('Connected');

//************************************ */
// Video 8 - Variables and Data Types
//************************************ */

// // 5 Types of Variables (Boolean, Number, String, Null and Undefined)

// // String
// var firstname = 'John';
// console.log(firstname);

// // Number
// var age = 28;

// // Boolean
// var fullAge = true;
// console.log(fullAge);

// // Undefined
// var job;
// console.log(job);

// // Now defining job.
// job = 'teacher';

// // Rules when naming variables

// // 1) You can't start a variable name with a number. Unless you start with an _ or $ followed by the number.
// // 2) You can't use reserved Javascript keywords as variable names. (function, delete, if, else etc).


//************************************************* */
// Video 9 - Variables Mutation and Type Coercion
//************************************************* */

// /* 
// This is how to make multi-line comments
// /*/

// // This is how to make single line comments


// // Javascript takes two different types of variables and converts them into one. This is type coercion.

// var firstname = 'John';
// var age = 28; 

// console.log(firstname + ' ' + age);



// // Another example of Javascript converting a bunch of data types into a string.
// var job, isMarried;
// job = 'teacher';
// isMarried = false;


// console.log(firstname + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);


// // Variable mutation - Changed the value of the data types we already have.
// age = 'twenty eight';
// job = 'driver';


// // Showed the new display type - Alert and showed new data how we changed it.
// alert(firstname + ' is a ' + age + ' year old ' + job + ' is he married? ' + isMarried);


// // New way to request information, which is called prompt, which you can use and save as a varialbe as well.
// var lastname = prompt('What is his last name?');
// console.log(firstname + ' ' + lastname);


//************************************************* */
// Video 10 - Basic Operators
//************************************************* */


// // Long form version
// var year= 2018;
// var yearJohn = year - 28;
// var yearMark = year - 33;

// // Short form version
// var year, yearJohn, yearMark;

// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);


// //typeof Operator - Will return the type of data type.

// console.log (typeof johnOlder);
// console.log (typeof ageJohn);
// console.log (typeof 'Mark is older than John');
// console.log (typeof x);

//************************************************* */
// Video 11 - Operator Precedence.
//************************************************* */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple Operators -  Base on the precdence - The - operator is higher than the >= which means the - will happen before the >=. 
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);


// // Grouping -  Below we use the ( ) to group the +, which puts it to the higest presidence to make sure it happens before the / 2. 

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// // Multiple assignments

// // Because the least highest precdence is the =, you can also pass down the same equation to two variables as shown below.
// var x, y;

// x = y = (3 + 5) * 4 - 6; 
// //  8 * 4 - 6 // 32 - 6 // 26

// console.log(x, y);


// // More operators.

// x = x*2;
// console.log(x);

// // Above is the same equation as below.

// x *= 2;
// console.log(x);

// // Same as the example above, but with addition.
// x += 10;
// console.log(x);


//************************************************* */
// Video 12 - Coing Challenege 1
//************************************************* */

// Mark Information


// Basic Information
var markHeight, markMass;
markHeight = 78;
markMass = 1.69;


// Calcuation for BMI
var markBMI = markMass / (markHeight*markHeight);
console.log(markBMI);


// John information

// Basic Information
var johnHeight, johnMass;
johnHeight = 92;
johnMass = 1.95;

// Calcuation for BMI
var johnBMI = johnMass / (johnHeight*johnHeight);
console.log(johnBMI);

// BMI Comparrison calculator.
var best = johnBMI > markBMI

console.log('Does John have a higher BMI than Mark? ' + best);