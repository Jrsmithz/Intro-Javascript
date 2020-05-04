// var firstName = 'John';
// console.log(firstName);

// var lastname = 'smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job);

// var $3years = 3;
// var johnMark 


// // Variable Mutation and type coercion 

// var firstName = 'John';
// var age = 28;


// // // Type Coercion 

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' Year old ' + job + ' Is he married? ' + isMarried);

// // // Variable Mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' Year old ' + job + ' Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log (firstName + ' ' + lastName);



// /* 
// // Basic Operators
// // */
// var year, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;

// // // Math operators

// yearJohn = now - 28;
// yeahMark = now - 33;

// // console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // // Logical operators

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);


// // // typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn)
// console.log(typeof "Mark is older than John")
// var x;
// console.log(typeof x);


// // Operator Precedence 

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge; // True
// console.log(isFullAge);


// // // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average); 

// // // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // // More operators

// x = x * 2;
// console.log(x); 
// x *= 2;
// console.log(x);
// x--;
// console.log(x);

// /* Coding Challenege 1 */

// var markHeight, markMass;
// markHeight = 1.9; // Height in Meters 
// markMass = 68; //Weight in KG

// var johnHeight, johnMass;
// johnHeight = 1.5; // Height in Meters
// johnMass = 55; //Weight in KG

// var markBMI;
// markBMI = markMass / (markHeight * markHeight);

// var johnBMI;
// johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(markBMI, johnBMI);

// var higherBMI;
// higherBMI = (markBMI > johnBMI);
// console.log ('Is Mark\'s BMI higher than than John\'s?' + higherBMI);


// // If /else statments //

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married!');
// }   else {
//     console.log (firstName + ' Will hopefully marry soon.')
//     }

// var isMarried = true;

// if (isMarried){
//     console.log(firstName + ' is married!');
// }   else {
//     console.log (firstName + ' Will hopefully marry soon.')
//     }

// var markHeight, markMass;
// markHeight = 1.9; // Height in Meters 
// markMass = 68; //Weight in KG

// var johnHeight, johnMass;
// johnHeight = 1.5; // Height in Meters
// johnMass = 55; //Weight in KG

// var markBMI;
// markBMI = markMass / (markHeight * markHeight);

// var johnBMI;
// johnBMI = johnMass / (johnHeight * johnHeight);


// if (markBMI > johnBMI){
//     console.log('Mark\'s BMI is higher than John\'s.')
// } else{
//     console.log('John\'s BMI is higher than Mark\'s.')
// }


// // Booooooolean Logic 

// var firstName = 'john';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { //Between 13 - 20
//     console.log(firstName + ' is a teenager.')
// }
// else if (age >= 20 && age < 30) { //Between 13 - 20
//     console.log(firstName + ' is a a young man.')
// }else{
//     console.log(firstName + ' is a man.')
// }

//  The Ternary Operator and Switch Statements - Ternary is Basically the 3 part method one line method. 

var firstName = 'John'
var age = 22; 

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';


// Switch Statements

var job = 'instructor';

switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a uber lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs becautiful clothes ');
        break;
    default:
        console.log(firstname + ' does something else.');            
}


age = 56;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <20:
        console.log(firstName + ' is a teenager.');
        break;
    case (age >= 20 && age < 30):
        console.log(firstName + ' is a a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');   
}

// Three ways to write conditional code: Ternary Operator, Switch Statements, if else statements. 


/**********************************************************
 * Truthy and Falsy values and Equality operators
 */

//  Falsy values: Undefined, null, 0, '', NaN.
//  Truthy values: NOT falsy values


// var Height;

// Height = '';

// if (Height || Height === 0){
//     console.log('variable is defined');
// }
// else {
//     console.log ('variable has not been defined');
// }



// Coding Challenge 2

// Part 1 - 

// var johnAVP, mikeAVP ;

// johnAVP = (89 + 120 + 103) / 3;
// console.log(johnAVP);

// mikeAVP = (116 + 94 + 123) / 3;
// console.log(mikeAVP);

// // Part 2 - 

// if (johnAVP > mikeAVP){
//     console.log('John has a higher score and is a winner. With a higher score of ' +johnAVP);
// }
// else if (mikeAVP > johnAVP) {
//     console.log('Mike has a higher score and is a winner. With a higher score of ' + mikeAVP);
// }
// else {
//     console.log('This game is a tie.')
// }

// // Part 3 -

// mikeAVP = 12;
// johnAVP = 13;

// if (johnAVP > mikeAVP){
//     console.log('John has a higher score and is a winner. With a higher score of ' +johnAVP);
// }
// else if (mikeAVP > johnAVP) {
//     console.log('Mike has a higher score and is a winner. With a higher score of ' + mikeAVP);
// }
// else{
//     console.log('This game is a tie.');
// }


// // Part 4 - 

// var johnAVP, mikeAVP, maryAVP ;

// johnAVP = (89 + 120 + 103) / 3;
// console.log(johnAVP);

// mikeAVP = (116 + 94 + 123) / 3;
// console.log(mikeAVP);

// maryAVP = (97 + 134 + 105) / 3;
// console.log(maryAVP);

// if (johnAVP > mikeAVP && johnAVP > maryAVP){
//     console.log('John has a higher score and is a winner. With a higher score of ' +johnAVP);
// }
// else if (mikeAVP > johnAVP && mikeAVP > maryAVP) {
//     console.log('Mike has a higher score and is a winner. With a higher score of ' + mikeAVP);
// }
// else if (maryAVP > johnAVP && maryAVP > mikeAVP){
//     console.log ('Mary has a higher score and is a winner. With a higher score of ' + maryAVP);
// }
// else{
//     console.log('This game is a tie.');
// }


// //*********************
// //  Functions
// // 

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1943);
// var ageJane = calculateAge(1963);

// console.log(ageJohn, ageJane, ageMike);

// function yearsUntilRetirement(year, firstName)
// {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0){
//         console.log(firstName + ' retires in '+ retirement + ' years.');
//     }
//     else{
//         console.log(firstName + ' is already retired.')
//     }
// }

// yearsUntilRetirement(1992, 'Jon');
// yearsUntilRetirement(1995, 'James');
// yearsUntilRetirement(1922, 'Mike');


// //*************************
// // Function Statements and Expressions
// // ************************


// // Function declaration
// function whatDoYouDo(job, firstName){

// }


// Function Expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives people around';
//         case 'designer':
//             return firstName + ' designs nice clothes';
//         default:
//             return firstName + ' does something else';
//     }
// // }

// // console.log (whatDoYouDo('teacher', 'john'));
// // console.log (whatDoYouDo('designer', 'Jane'));
// // console.log (whatDoYouDo('retired', 'Ryan'));

// // Anything we do that triggers a response is an expression.

// // Statements they perform actions like "if else statements" "function declarations". They don't produce any immediate value. 

// // Examples if (true) { console.log(23);}


// // **********************
// // Arrays - A collection of variables with various data types. 
// // **********************


// // // Initialize new Array
// // var names = [ 'John', 'Mark', 'Jane'];
// // var years = new Array(1990, 1969, 1948);

// // console.log(names[2]);
// // console.log(names.length);


// // // Mutate array data
// // names[1] = 'ben';
// // names[names.length] = 'Mary';
// // console.log(names);

// // // Different data types

// // var john = ['John', 'Smith', 1990, 'designer', false];

// // john.push('blue');
// // john.unshift('Mr.');
// // console.log(john);

// // john.pop()
// // console.log(john);

// // john.pop()
// console.log(john);

// john.shift()
// console.log(john);

// console.log(john.indexOf(90));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John IS a designer';
// console.log(isDesigner);



// // Coding Challenge 3 


// //  First step was to create the calculator, which provided a tip amount based on the bill amount.
// //  Which is the tipcaulculator function below.
// function tipCalculator(bill){
//     var percentage;
//     if (bill < 50){
//         percentage = .2;
//     }
//     else if (bill >= 50 && bill <= 200 ){
//         percentage = .15;
//     }
//     else{
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// // Now we have the tip calculator, we can add the bill amounts in the array, which we already know. 
// var bills = [124, 48, 268];

// // Now we are looking for the tip amount, so we run the tipCalculator and use the bills array to solve that.
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// // Now we have a tips array of the amounts per place above, and the array of bills. Now we simply need to add them together. 

// var finalvalues=[bills[0] + tips[0],
//                 bills[1] + tips[1],
//                 bills[2] + tips[2]];

// // Now we just print the results. Wala. 

// console.log(tips, finalvalues);      


// // ***********************
// // Ojects and Properties
// // ***********************

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthyear: '1990',
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthyear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);


// // New object syntax

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthyear = 1969;
// jane['lastname'] = 'smith';
// console.log(jane);


// Objects and Methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthyear: '1992',
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2018 - this.birthyear;
//     }
// };

// john.calcAge();
// console.log(john);


// Coding Challenge 4

var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    height: 1.9,
    bodyMass: 68,
    calcBMI: function(){
        this.bmi = this.bodyMass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
console.log(mark);


// var markHeight, markMass;
// markHeight = 1.9; // Height in Meters 
// markMass = 68; //Weight in KG

// var johnHeight, johnMass;
// johnHeight = 1.5; // Height in Meters
// johnMass = 55; //Weight in KG
// 