//Create secret number
var secretNumber = 4;


//Ask user for guess
var guess = Number(prompt ("guess a number"));
alert(guess);

//check if guess is right

if (guess === secretNumber){
    alert("You got it right")
}

//Otherwise, you got it wrong
else if
    (guess > secretNumber){
     alert("Too high. Guess again.")   
    }

//Otherwise, check if lower
else {
    alert ("Too low. Guess again!")
}

