


//Задание 1 ===================================




// let age = +prompt("Введите ваш возраст", "");

// if (age >= 0 && age <= 12) {
//     alert("Вы ребенок");
// }
// else {
//     if (age > 12 && age <= 18) {
//         alert("Вы подросток");
//     }
//     else {
//         if (age > 18 && age <= 60) {
//             alert("Вы взрослый");
//         }
//         else {
//             alert("Вы пенсионер");
//         }
//     }
// }




//Задание 2 ===================================




// let num = +prompt("Введите число от 0 до 9", "");
// switch (num) {
//     case 1:
//         alert("Соответствующий знак" + "\n" + "!");
//         break;
//     case 2:
//         alert("Соответствующий знак" + "\n" + "@");
//         break;
//     case 3:
//         alert("Соответствующий знак" + "\n" + "#");
//         break;
//     case 4:
//         alert("Соответствующий знак" + "\n" + "$");
//         break;
//     case 5:
//         alert("Соответствующий знак" + "\n" + "%");
//         break;
//     case 6:
//         alert("Соответствующий знак" + "\n" + "^");
//         break;
//     case 7:
//         alert("Соответствующий знак" + "\n" + "&");
//         break;
//     case 8:
//         alert("Соответствующий знак" + "\n" + "*");
//         break;
//     case 9:
//         alert("Соответствующий знак" + "\n" + "(");
//         break;
//     case 0:
//         alert("Соответствующий знак" + "\n" + ")");
//         break;
//     default:
//     case 5:
//         alert("Введено неправильное число");
//         break;
// }




//Задание 3 ===================================




// let num123 = +prompt("Введите трехзначное число", "");

// let num3 = num123 % 10;
// let num12 = Math.floor(num123 / 10);
// let num2 = num12 % 10;
// let num1 = Math.floor(num12 / 10);

// if (num1 === num2 || num1 === num3 || num3 === num2) {
//     alert("В веднном числе есть одинаковые цифры");
// }
// else {
//     alert("В веденном числе нет одинаковых цифр");
// }




//Задание 4 ===================================




// let year = +prompt("Введите год", "");
// let num1 = year % 400;
// let num2 = year % 4;
// let num3 = year % 100;

// if (num1 === 0) {
//     alert("Год високосный");
// }

// else {
//     if (num3 === 0 && num1 !== 0) {
//         alert("Год невисокосный");
//     }

//     else {
//         if (num2 === 0) {
//             alert("Год високосный");
//         }

//         else {
//             alert("Год невисокосный");
//         }
//     }
// }




//Задание 5 ===================================




// let num12345 = +prompt("Введите пятиразрядное число", "");

// let num5 = num12345 % 10;
// let num1234 = Math.floor(num12345 / 10);
// let num4 = num1234 % 10;
// let num123 = Math.floor(num1234 / 10);
// let num3 = num123 % 10;
// let num12 = Math.floor(num123 / 10);
// let num2 = num12 % 10;
// let num1 = Math.floor(num12 / 10);

// if (num1 === num5 && num2 === num4) {
//     alert("Число палиндром");
// }

// else {
//     alert("Число не является палиндромом");
// }




//Задание 6 ===================================




// let usd = +prompt("Введите количество USD", "");
// let cur = prompt("Введите валюту", "");
// switch (cur) {
//     case "EURO":
//         curEuro = usd * 0.9;
//         alert("Количество Евро" + "\n" + curEuro);
//         break;

//     case "UAN":
//         curUan = usd * 7.01;
//         alert("Количество Юаней" + "\n" + curUan);
//         break;

//     case "AZN":
//         curAzn = usd * 1.7;
//         alert("Количество азербайджанских манатов" + "\n" + curAzn);
//         break;

//     default:
//         alert("Введена неверная валюта");
//         break;
// }



//Задание 7 ===================================




// let sum = +prompt("Введите сумму", "");
// let total
// if (sum >= 200 && sum < 300) {
//     total = sum - (sum * 0.03);
//     alert("Итого к оплате" + "\n" + total);
// }
// else {
//     if (sum >= 300 && sum < 500) {
//         total = sum - (sum * 0.05);
//         alert("Итого к оплате" + "\n" + total);
//     }
//     else {
//         if (sum >= 500) {
//             total = sum - (sum * 0.07);
//             alert("Итого к оплате" + "\n" + total);
//         }

//         else {
//             alert("Итого к оплате" + "\n" + sum);
//         }
//     }
// }




//Задание 8 ===================================




// let circle = +prompt("Введите длину окружности", "");
// let square = +prompt("Введите периметр квадрата", "");

// let dCircle = circle / 3.14;
// let lSquare = square / 4;

// if (lSquare > dCircle) {
//     alert("Окружность может быть вписана в квадрат");
// }

// else {
//     alert("Окружность не может быть вписана в квадрат");
// }




//Задание 9 ===================================




// let total
// let total1
// let total2
// let total3

// alert("Столица Беларуси?" + "\n" + "\n" + "1. Вашингтон" + "\n" + "2. Минск" + "\n" + "3. Рим");
// let first = +prompt("Номер правильного ответа: ", "");

// if (first === 2) {
//     total1 = 2;
// }

// else {
//     total1 = 0;
// }

// alert("Столица США?" + "\n" + "\n" + "1. Вашингтон" + "\n" + "2. Минск" + "\n" + "3. Рим");
// let second = +prompt("Номер правильного ответа: ", "");

// if (second === 1) {
//     total2 = 2;
// }

// else {
//     total2 = 0;
// }

// alert("Столица Италии?" + "\n" + "\n" + "1. Вашингтон" + "\n" + "2. Минск" + "\n" + "3. Рим");
// let third = +prompt("Номер правильного ответа: ", "");

// if (third === 3) {
//     total3 = 2;
// }

// else {
//     total3 = 0;
// }

// total = total1 + total2 + total3;

// alert("Вы набрали баллов: " + "\n" + total);






//Задание 10 ================================================================





let day = +prompt("Введите день", "");
let month = +prompt("Введите месяц", "");
let year = +prompt("Введите год", "");
let year1 = year % 400; //високосный
let year2 = year % 4; //високосный
let year3 = year % 100; //невисокосный

// проверка правильности введенных данных

if ((day > 31 && month === 1 ||
    day > 31 && month === 3 ||
    day > 31 && month === 5 ||
    day > 31 && month === 7 ||
    day > 31 && month === 8 ||
    day > 31 && month === 10 ||
    day > 31 && month === 12) ||

    (day > 30 && month === 4 ||
        day > 30 && month === 6 ||
        day > 30 && month === 9 ||
        day > 30 && month === 11 ||
        day > 29 && month === 2 && year1 === 0 ||
        day > 29 && month === 2 && year2 === 0 && year3 !== 0 ||
        day > 28 && month === 2 && year2 !== 0
    ) ||

    (month > 12) ||

    (year < 1)) {
    alert("Неверная дата");
}

// перенос даты на следующий месяц

else {
    if ((day === 31 && month === 1 ||
        day === 31 && month === 3 ||
        day === 31 && month === 5 ||
        day === 31 && month === 7 ||
        day === 31 && month === 8 ||
        day === 31 && month === 10) ||

        (day === 30 && month === 4 ||
            day === 30 && month === 6 ||
            day === 30 && month === 9 ||
            day === 30 && month === 11 ||
            day === 29 && month === 2 && year1 === 0 ||
            day === 29 && month === 2 && year2 === 0 && year3 !== 0 ||
            day === 28 && month === 2 && year3 === 0 && year1 !== 0 ||
            day === 28 && month === 2 && year2 !== 0
        )) {

        day = 1;
        month++;
        alert("Cследующая дата: " + day + "." + month + "." + year);
    }

    //перенос даты на следующий год

    else {
        if (day === 31 && month === 12) {
            day = 1;
            month = 1;
            year++;
            alert("Cследующая дата: " + day + "." + month + "." + year);
        }

        else {
           day++
           alert("Cследующая дата: " + day + "." + month + "." + year);
        }
    }
}














