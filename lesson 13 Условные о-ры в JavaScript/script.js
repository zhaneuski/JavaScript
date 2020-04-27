//условие

// if (5 == "5")  {
//     let myNumber = 5;
//     alert(myNumber);
// }

// else {
//     alert("false");
// }


// 1 задание *******************************************

// let userNumber = +prompt("Enter your number", "");
// if (userNumber > 0) {
//     alert("positive");
// }

// else {
//     if (userNumber < 0) {
//         alert("negative");
//     }

//     else {
//         alert("zero");
//     }
// }

// 2 задание *********************************************

// let age = +prompt("Enter your age", "");
// if (age >= && age <= 120) {
//     alert("correct"):
// }
// else {
//     alert("incorrect");
// }


// задание 4 *******************************************

// let hours = +prompt("Enter hours", "");
// let minutes = +prompt("Enter minutes", "");
// let seconds = +prompt("Enter seconds", "");


// if (hours >= 0 && hours <= 23 && minutes >= 0 && hours <= 60 && seconds >= 0 && hours <= 60) {
//     alert("correct");
// }
// else {
//     alert("incorrect");
// }

// задание 5 *********************************************

// let coordX = +prompt("Enter coord x", "");
// let coordY = +prompt("Enter coord y", "");

// if (coordX > 0 && coordY > 0) {
//     alert("1 четверть");
// }
// else {
//     if(coordX < 0 && coordY > 0) {
//         alert("2 четверть");
//     }
//     else {
//         if(coordX < 0 && coordY < 0) {
//             alert ("3 четверть");
//         }
//         else {
//             if(coordX > 0 && coordY < 0) {
//             alert("4 четверть");
//             }
//             else {
//                 if(coordX !== 0 && coordY === 0) {
//                     alert("Ось Х");
//                 }
//                 else {
//                     if(coordX === 0 && coordY !== 0) {
//                         alert("Ось Y");
//                     }
//                     else {
//                         if(coordX === 0 && coordY === 0) {
//                             alert("Начало  координат");
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


//switch 1 задание

// let month = prompt("Enter the month", "");
// switch (month) {
//     case "1":
//         alert("Январь");
//         break;
//     case "2":
//         alert("Февраль");
//         break;
//     case "3":
//         alert("Март");
//         break;
//     case "4":
//         alert("Апрель");
//         break;
//     case "5":
//         alert("Май");
//         break;
//     case "6":
//         alert("Июнь");
//         break;
//     case "7":
//         alert("Июль");
//         break;
//     case "8":
//         alert("Август");
//         break;
//     case "9":
//         alert("Сентябрь");
//         break;
//     case "10":
//         alert("октябрь");
//         break;
//     case "11":
//         alert("Ноябрь");
//         break;
//     case "12":
//         alert("декабрь");
//         break;
//     default:
//         alert("такого месяца не существует");
//         break;
// }

//switch 2 задание

let numb1 = +prompt("Enter number 1", "");
let numb2 = +prompt("Enter number 2", "");
let a = prompt("Введите знак", "");

switch (a) {
    case "*":
        alert(numb1 * numb2);
        break;
    case "+":
        alert(numb1 + numb2);
        break;
    case "-":
        alert(numb1 - numb2);
        break;
    case "/":
        alert(numb1 / numb2);
        break;

    default:
        alert("ошибка");
        break;
}
