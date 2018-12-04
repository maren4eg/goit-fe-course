'use strict'

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let userLogin = prompt ("Введите имя пользователя");

if (userLogin === null) {
    alert ("Отменено пользователем!");
}

else if (userLogin !== adminLogin) {
    alert ("Доступ запрещен, неверный логин!");
}

else {
    let userPassword = prompt ("Введите пароль");

    if (userPassword === null ){
        alert ("Отменено пользователем!")
    }
    else if (userPassword !== adminPassword) {
        alert ("Доступ запрещен, неверный пароль!")
    }
    else {
        alert ("Добро пожаловать!")
    }
}