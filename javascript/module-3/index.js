"use strict"

// const checkNumberType = function(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// console.log(checkNumberType(2)); // 'Even'

// console.log(checkNumberType(46)); // 'Even'

// console.log(checkNumberType(3)); // 'Odd'

// console.log(checkNumberType(17)); // 'Odd'

/////////////////////

// const formatString = function(str){
//     if(str.length < 40){
//         return str;
//     };
//     if (str.length > 40){
//         const symbol = str.split("");
//         symbol.length = 40;
//         symbol.splice(38 , 3 ,".",".",".");
//         str = symbol.join("");
//         return str;
//     }
// }

// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка

//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка

//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка

//////////////////////

// const checkForSpam = function(str){
//   str = str.toUpperCase();
//   console.log(str);
//   if(str.includes("SPAM") || str.includes("SALE")){
//     return true;
//   }
//   return false;
// };

// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

////////////////////////

// const getPx = function(str){
//   let res;
//   if (typeof str == 'string'){
//     res = parseFloat(str);
//   }else{
//     res = null;
//   }
//   return res;
// };

// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null

//////////////////////////

// const findLongestWord = function(str){
//   const words = str.split(" ");
//   let longestWord = words[0];

//   for (let word of words){
//     if(longestWord.length < word.length){
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // 'force'

/////////////////

// const findLargestNumber = function(numbers) {
//   let findNumber = numbers[0];

//   for (let number of numbers) {
//     if (findNumber <= number) {
//       findNumber = number;
//     }
//   }
//   return findNumber;
// };

// // Вызовы функции для проверки
// console.log(findLargestNumber([1, 2, 3])); // 3

// console.log(findLargestNumber([27, 12, 18, 5])); // 27

// console.log(findLargestNumber([31, 128, 14, 74])); // 128


//////////////////


// const uniqueNumbers  = [2, 1, 4, 9];

// const addUniqueNumbers = function(...userArr){
//   console.log(userArr);
//   for (let idx of userArr){
//     if (!uniqueNumbers.includes(idx)){
//       uniqueNumbers.push(idx)
//     }
//   }
//   return uniqueNumbers;
// }


// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


//////////////////////


// const filterFromArray = function(arr,...arg){
//   // console.log(arr);
//   // console.log(arg);

//   const newArr = [];

//   for(let idx of arg){
//     if(arr.includes(idx)){
//       newArr.push(idx)
//     }
//   }
//   return newArr;
// }


// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



///////////////////



// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];



// const isLoginValid = function(login) {
//   if (login.length >= 4 && login.length <= 16){
//     return true;
//   }else{
//     return false;
//   }
// };


// console.log(isLoginValid("weszdgf"));
// console.log(isLoginValid("wef"));


// const isLoginUnique = function(allLogins, login) {
//   for (let i of allLogins){
//     if(allLogins.includes(login)){
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isLoginUnique( logins, 'robotGoogles'));
// console.log(isLoginUnique( logins, 'Ajax'));
// console.log(isLoginUnique( logins, 'Mango'));



// const addLogin = function(allLogins, login) {
//   if (!isLoginValid(login))  return 'Ошибка! Логин должен быть от 4 до 16 символов';

//   if(!isLoginUnique(allLogins, login))  return 'Такой логин уже используется!';

//   logins.push(login);
//   return 'Логин успешно добавлен!';
//   }


  // function addLogin(allLogins, login){
  //   if(!isLoginValid(login)) return 'Ошибка! Логин должен быть от 4 до 16 символов';
  //   if(!isLoginUnique(allLogins, login)) return 'Такой логин уже используется!'; 
        
  //       allLogins.push(login);
  //       return 'Логин успешно добавлен!';  
  // }


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
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'