var age= prompt("What is your current age");

if(age < 0){
    console.log("This isn't a valid birthday");
}

if(age === "21"){
    console.log("Happy 21st birthday");
}

if(age % 2 !== 0){
    console.log("Your age is odd");
}