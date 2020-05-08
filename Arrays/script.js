prompt('connected');

var numbers = [1,2,3,4];
numbers.forEach(printReverse);

function printReverse(arr){
    for(var i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
    
}

printReverse([3,6,2,5,])