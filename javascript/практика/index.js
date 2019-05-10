// function checkNumberType(num) {
//     if(num % 2 === 0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'






// function formatString(str) {
//   let arrayStr = str.split("");
//   if (arrayStr.length < 40) {
//     console.log(arrayStr.join(""));
//   } else {
//     arrayStr.length = 40;
//     arrayStr.splice(37, 3, ".", ".", ".");
//     console.log(arrayStr.join(""));
//   }
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// ); // вернется форматированная строка



// function checkForSpam(str){
//     str = str.toUpperCase();
//     let arrayStr = str.split(" ");
//     if (arrayStr.includes("SPAM") || arrayStr.includes("SALE")){
//         return true;
//     }else{
//         return false;
//     }
//     }

// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



// function getPx(str) {
//     if(typeof(str) == "string"){
//         return (Number.parseFloat(str));
//     }else{
//         return (null);
//     }
// }

// console.log( getPx("10px") ); // true
// console.log( getPx("10.5")  ); // true
// console.log( getPx("0") ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null



// function findLongestWord(str){
//     let arrayStr = str.split(" ");
//     let bigString = 0;
//     for(let el of arrayStr){
//         if(el.length > bigString.length){
//             bigstring = el
//         }
//     }
//     return bigString;
// }



// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // 'force'


// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
//   user.mood = "happy";
//   user.hobby = "javascript";
//   user.premium = false;

//   const keys = Object.keys(user);

//   console.log(keys);

//   for (let key of keys){
//     console.log(`${key}: ${user[key]}`);
//   }

//   const entries = Object.entries(user);
//   console.log(entries);

//   for (let entry of entries){
//     let keys = entry[0];
//     let values = entry[1];
//     console.log(`${keys}: ${values}`);
  // }


//   const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };

//   let max = 0;
//   let name;

//   const keys = Object.keys(tasksCompleted);
//   console.log(keys);
  

//  for (let key of keys){
//    if(max < tasksCompleted[key]){
//      max = tasksCompleted[key];
//      name = key;
//    }
//  }

//  console.log(`${name}: ${max}`);

// const countProps = function(obj){
//   let keys = Object.keys(obj)
//   console.log(keys.length)
// }


// console.log(
//   countProps({})
// );

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// );

// function isObjectEmpty(obj){
//   let bull;
//   const keys = Object.keys(obj)
//   console.log(keys.length);
//   if (keys.length != 0){
//     return false;
//   }else{
//     return true;
//   }
// }


// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// function countTotalSalary(obj){
//   let total = 0;
//   const values = Object.values(obj);
//   for (const value of values){
//     total += value;
//   }
//   console.log(total);
// }

// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

function getAllPropValues (arr, prop){
  
}