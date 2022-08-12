// // Refactor the JS function created in assignment 2 so that the user can pass the filter condition also to the function. 
// // For example, only even numbers, only prime numbers, etc. 
// // The condition must NOT be passed as a string.

let arr = [1,2,3,4,5,6,7,8,9];
let flag = true;

function printNumber(arr, func) {
    for (let i of arr) {
        if (func(i)) {
            document.write(i + ",");
        }
    }
}
document.write("Odd numbers are \n:");
printNumber(arr, (val) => val % 2 != 0)
document.write("<br>");

document.write("Even numbers are \n:");
printNumber(arr, (val) => val % 2 == 0)
document.write("<br>");

document.write("prime numbers are \n:");
printNumber(arr, val => {
    for (let i = 2; i < val / 2; i++) {
        if (val % i == 0) {
            flag = false;
            break;
        }
        if (flag == true)
            document.write(i + ",");
        else
            document.write(i + ",");
    }
}
)