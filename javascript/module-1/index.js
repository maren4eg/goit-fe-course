"use strict";

//////// task 1 ///////
// alert("hello");
// let message;
// const ADMIN_PASSWORD = 'm4ng0h4ckz';

// let userPassword = prompt("Введите пароль");

// if (userPassword === null){
//     message = "Отменено пользователем";
// }else if(userPassword !== ADMIN_PASSWORD){
//     message = 'Доступ запрещен, неверный пароль!';
// }else{
//     message = 'Добро пожаловать!';
// }

// alert(message);

/////// task 2 ///////

// const credits = 23500;
// const pricePerDroid = 3000;
// let quantity = 4;

// let totalPrice = pricePerDroid * quantity;

// if (totalPrice > credits){
//     console.log('Недостаточно средств на счету!')
// }else{
//     let remainder = credits - totalPrice;
//     alert(`Вы купили ${quantity} дроидов, на счету осталось ${remainder} кредитов.`)
// }

/////// task 3 ////////

let userChange = prompt("Введите имя страны");

let loverCaseSelection = userChange.toLowerCase();
// console.log(loverCaseSelection);

const china = "китай";
const southAmerika = "южная америка";
const australia = "австралия";
const india = "индия";
const jamaika = "ямайка";

let price;
let message;

switch (loverCaseSelection) {
  case china:
    price = 100;
    message = `Доставка в ${china} будет стоить ${price} кредитов`;
    break;
  case southAmerika:
    price = 250;
    message = `Доставка в ${southAmerika} будет стоить ${price} кредитов`;
    break;
  case australia:
    price = 170;
    message = `Доставка в ${australia} будет стоить ${price} кредитов`;
    break;
  case india:
    price = 80;
    message = `Доставка в ${india} будет стоить ${price} кредитов`;
    break;
  case jamaika:
    price = 120;
    message = `Доставка в ${jamaika} будет стоить ${price} кредитов`;
    break;
  default:
    message = "В вашей стране доставка не доступна";
}

console.log(message);