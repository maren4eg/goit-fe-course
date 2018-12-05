'use strict'




//////////ЗАДАНИЕ 1//////////////






// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';

// let userLogin = prompt ("Введите имя пользователя");

// if (userLogin === null) {
//     alert ("Отменено пользователем!");
// }

// else if (userLogin !== adminLogin) {
//     alert ("Доступ запрещен, неверный логин!");
// }

// else {
//     let userPassword = prompt ("Введите пароль");

//     if (userPassword === null ){
//         alert ("Отменено пользователем!")
//     }
//     else if (userPassword !== adminPassword) {
//         alert ("Доступ запрещен, неверный пароль!")
//     }
//     else {
//         alert ("Добро пожаловать!")
//     }
// } 





///////////ЗАДАНИЕ 2////////////






// let sharm = 15;
// let hurgada = 25;
// let taba = 6;

// let userRequest = prompt("Введите число мест");

// if (userRequest === null) {
//     alert ("Нам очень жаль, приходите еще");
// }
// else if (parseInt(userRequest) != userRequest || userRequest < 0){
//     alert("Ошибка ввода");
// }

// else if (userRequest > 25) {
//     alert ("Извините, столько мест нет ни в одной группе!");
// }

// else {
    
//     if (taba >= userRequest) {
//         let userChange = confirm ("Есть местa в группе taba, согласен ли пользователь?")
//         if (userChange == true) {
//             alert ("Приятного путешествия в группе taba");
//         }
//         else if (userChange == false) {
//             alert ("Нам очень жаль, приходите еще!");
//         }
//     }
//     else if (sharm >= userRequest) {
//         let userChange = confirm ("Есть местa в группе sharm, согласен ли пользователь?")
//         if (userChange == true) {
//             alert ("Приятного путешествия в группе sharm")
//         }
//         else if (userChange == false) {
//             alert ("Нам очень жаль, приходите еще!");
//         }
//     }
//     else if (hurgada >= userRequest) {
//         let userChange = confirm ("Есть местa в группе hungara, согласен ли пользователь?")
//         if (userChange == true) {
//             alert ("Приятного путешествия в группе hungara")
//         }
//         else if (userChange == false) {
//             alert ("Нам очень жаль, приходите еще!");
//         }
//     }
// }
