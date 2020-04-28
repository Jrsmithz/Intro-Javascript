// Version 1 - Only responses with Yes on the proper word "yes" only.

// var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("are we there yet?");
// }

// alert("YAY, We Made It!!!!");


// Version 2 - Responds with the word "yes" and anything else added.

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1){
    var answer = prompt("are we there yet?");
}

alert("YAY, We Made It!!!!");