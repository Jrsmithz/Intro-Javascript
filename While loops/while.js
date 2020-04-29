// Print all numbers between -10 and 19.

var num = -10;

while (num < 20) {
    console.log(num);
    num++; 
}

//Print all even numbers between 10 and 40.

var num2 = 10;

while(num2 <= 40){
    console.log(num2);
    num2 += 2;
}


// Print all odd numbers between 300 and 333.

var numb3 = 301;

while(numb3 <= 333){
    console.log(numb3);
    numb3 += 2;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50.

var num4 = 5;

while (num4 <= 50){
    if(num4 % 5 === 0 && num4 % 3 === 0){
        console.log(num4);
    }
   num4++; 
}