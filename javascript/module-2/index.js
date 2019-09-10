// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// console.log(users);

// users.shift();
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift("lux");
// console.log(users);

// users.splice(3 , 0 , "jay" , "kivi");
// console.log(users);

// const userToDelete = "Ajax";
// const index = users.indexOf(userToDelete);
// console.log(index);
// users.splice(index , 1);
// console.log(users);

// const userToInsertBefore = "kong";
// const secondIndex = users.indexOf("jay");
// console.log(secondIndex);
// users.splice(secondIndex , 0 , userToInsertBefore);
// console.log(users);



///////////



// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for(i = 0; i < users.length; i+=1){
//     console.log(i+1 + " - " + users[i]);
// }



///////////



// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
// const cost = 10;
// const words = message.split(" ");
// console.log(words);
// console.log(words.length);

// price = words.length * cost;
// console.log(price);



///////////


// let input =0;

// do{
//     input = prompt("введите чмсло больше 100");
//     console.log(input);
// }while(input !== null && Number(input) <=100);


//////////


// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// // for(let i = 0; i < numbers.length; i+=1){
// //     if(numbers[i] > num){
// //         matched.push(numbers[i]);
// //         console.log(numbers[i]);
// //     }
// // } 

// for(let i of numbers){
//     if(i > num){
//         matched.push(i);
//     }
// }

// console.log(numbers);
// console.log(matched);


//////////


// const message = "May the force be with you";

// const words = message.split(" ");
// console.log(words);

// let longestWord = words[0];

// for(let i = 1; i < words.length; i+=1){
//     if(longestWord.length < words[i].length){
//         longestWord = words[i];
//     }
// }
//  console.log(longestWord);



//////////



// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

// const min = numbers[0];
// const max = numbers[numbers.length - 1];


// for(i = 0; i < numbers.length; i+=1){
//     let input = prompt(`введите число между ${min} и ${max}`);
//     if(numbers[i] == input){
//         alert("вы угадали");
//         break;
//     }else{
//         alert("вы не угадали");
//     }
// }



///////////



// let input;
// const numbers = [];
// let total = 0;

// do{
//     input = prompt("введите число");
//     numbers.push(Number(input));
// }while(input !== null);
// console.log(numbers);

// for(let i of numbers){
//     total += i;
// }
// console.log(total);


////////////


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let input;
let message;

do{
input = prompt("Ведите пароль");

    for(let i of passwords){
        if(i === input){
            message = "Добро пожаловать!";
            break;
        }else{
            message = `Неверный пароль, у вас осталось ${attemptsLeft} попыток`;
        }
    }
    message = 'У вас закончились попытки, аккаунт заблокирован!';
    alert (message)
    attemptsLeft -= 1;
}while(input !== null && attemptsLeft >= 1);