// Write a JS function which accepts an array of 10 numbers. 
// The function must return another array which contains only the odd numbers in the source array.

var array=[];
var i;

for(i=0;i<10;i++){
    array[i]=prompt(`Enter ${i} number: `);
}

let oddNumber = (arr)=>{
    return array.filter(a=>a%2==1);
}

document.write("The odd numbers from given array are:\n"+oddNumber(array));