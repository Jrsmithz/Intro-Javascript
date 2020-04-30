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


// Variable Mutation and type coercion 

// var firstName = 'John';
// var age = 28;


// // Type Coercion 

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' Year old ' + job + ' Is he married? ' + isMarried);

// // Variable Mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' Year old ' + job + ' Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log (firstName + ' ' + lastName);



/* 
// Basic Operators
// */
// var year, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;

// // Math operators

// yearJohn = now - 28;
// yeahMark = now - 33;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical operators

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);


// // typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn)
// console.log(typeof "Mark is older than John")
// var x;
// console.log(typeof x);


// Operator Precedence 

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge; // True
// console.log(isFullAge);


// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average); 

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators

// x = x * 2;
// console.log(x); 
// x *= 2;
// console.log(x);
// x--;
// console.log(x);

/* Coding Challenege 1 */

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


// If /else statments //

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


// Booooooolean Logic 

var firstName = 'john';
var age = 19;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age ) { //Between 13 - 20
    console.log(firstName + ' is a man.')
} else{
    console.log(firstName + ' is a man.')
}

