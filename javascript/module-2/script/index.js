"use strict";
// task 1

// let input;
// const numbers = [];
// let total = 0;
// do{
//     input = prompt ("Введите число");
//     numbers.push(Number(input));
// }while(input !== null);

// console.log(numbers);

// for(let i of numbers){
//     total = total + i;
// }

// console.log(total);

// task 2

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;

let userInput;

let passwordCheck;

do {
  userInput = prompt("Введите пароль");
  for (let item of passwords) {
    if (item === userInput) {
      passwordCheck = true;
      break;
    } else {
      passwordCheck = false;
    }
  }




  if (userInput === null) {
    alert("Отменено пользователем");
    passwordCheck = true;
  } else {
    if (passwordCheck === true) {
      alert("Добро пожаловать");
    } else {
      attemptsLeft -= 1;
      alert(`У вас осталось ${attemptsLeft} попыток`);
    }
  }



  if (attemptsLeft === 0) {
    passwordCheck = true;
    alert("У вас закончлись попытки");
  }
} while (!passwordCheck);
