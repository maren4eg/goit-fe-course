///////task 1//////

// let checkNumberType = function (num){
//    let check;
//     if(num % 2 == 0){
//         check  = "Even"
//     }
//     else {
//         check = "Odd"
//     }
//     return check;
// }
// console.log(checkNumberType(2));
// console.log( checkNumberType(46) );
// console.log( checkNumberType(3) )
// console.log( checkNumberType(17) );

/////task 2////////

// let formatString = function(str){
//     let arr = str.split();
//     if (arr.length <= 40){
//         arr.join();
//     }else if (arr.length > 40){
//         arr.splice(37,3,".",".",".");
//     }
//     return arr.join();
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));



// const isLoginValid = function(login) {
//   let arrLogin = login.split("");
//   if (arrLogin.length >= 4 && arrLogin.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <=16){
    return true;
  }else{
    return false;
  }
}

const isLoginUnique = function(allLogins, login) {
  if(allLogins.includes(login)){
    return true;
  }else{
    return false;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)==true){
    if (isLoginUnique(login)==false){
      allLogins.push(login);
      return ("Логин успешно добавлен!");
    }else{
      return ("Такой логин уже используется!");
    }
  }else{
    return("'Ошибка! Логин должен быть от 4 до 16 символов'");
  }
};

console.log(addLogin(logins,'Poly')); // 'Логин успешно добавлен!'
console.log(addLogin(logins,'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins,'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins,'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'