// let userInput = +prompt("Count", "");
// let x = 0;
// while (x < userInput) {
//     alert("#");
//     x++;
// }


// let userInput = +prompt("Count", "");
// x = 0;
// while (userInput >= 0) {
//     console.log(userInput);
//     userInput--;
// }




// *************************************************
// let n1 = +prompt("Число", "");
// let n2 = +prompt("Степень", "");
// let result;
// if (n2 === 0) {
//      result = 1;
// } 

// else {
//     if (n2 === 1) {
//         result = n1;
//     }
//     else {
//         let i = 1;
//         result = n1;
//         while (i < n2) {
//             result = result * n1;
//             i++
//         }
//     }
// }

// alert(result);

// **************************************задача с факт.

let n1 = +prompt("Число  ", "");
let result;
x = 1;

if (n1 <= 1 && n1 >= 0) {
    result = 1;
}

else {
    result = n1;
    while ( n1 > x) {
        result = result * x;
        x++
    }
}
alert(result);

