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

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);
  
const addLogin = (allLogins, login) => {

  let validity = isLoginValid(login);

    if(validity == false)
      return 'Ошибка! Логин должен быть от 4 до 16 символов';

  let adding = isLoginUnique(allLogins,login);

    if(adding == false){
      logins.push(login);
      return 'Логин успешно добавлен!';
    }else{
      return 'Такой логин уже используется!';
    }

};

console.log(isLoginUnique(logins,"Ajax"))

console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'