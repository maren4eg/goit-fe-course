// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// users.shift()

// console.log(users);

// users.pop();

// console.log(users);

// const userToDelete = "Ajax";

// let deleteIndex = users.indexOf(userToDelete);
// console.log(deleteIndex);

// users.splice(deleteIndex , 1);
// console.log(users);

// const users = ["Lux", "Poly", "Jay", "Kiwi"];

// const userToInsertBefore = "Jay";

// const addIndex = users.indexOf(userToInsertBefore);
// console.log(addIndex);

// users.splice(addIndex, 0, "Kong");
// console.log(users);

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for(let i of users){
//     let indexNumber = users.indexOf(i) + 1;
//     console.log(`${indexNumber}  ${i}`);
// }

// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// let words = message.split(" ");
// console.log(words);
// let wordsLength = words.length;
// console.log(wordsLength);
// let userPrice = wordsLength * 10;
// console.log(userPrice);

// let userInput = prompt('Введите число больше 100');
// let userResult;
// if (userInput === null){
//     userResult = null;
// }else if (userInput < 100){
//     prompt('введите другое число');
//     userResult = userInput;
// }else{
//     userResult = userInput;
// }
// console.log(userResult);

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];

for (let i of numbers){
    if(i > num){
    console.log(i);
    }
}

console.log(matched);


