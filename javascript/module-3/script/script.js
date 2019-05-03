"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let userLogin = prompt("Введите ваш логин");




const isLoginValid = login => login.length >= 4 && login.length <= 16;


const isLoginUnique = (logins, login) => logins.includes(login);

const addLogin = (logins, login) => {
    let userLoginValid = isLoginValid(login);
    let userLoginUnique = isLoginUnique(logins,login);

    if(!userLoginValid){
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
    }else if(userLoginUnique){
        alert('Такой логин уже используется!');
    }else{
        logins.push(login);
        alert('Логин успешно добавлен!');
    }
    return logins
}


// Вызовы функции для проверки
addLogin(logins, userLogin); // 'Логин успешно добавлен!'
// addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
// addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
