///////////////////THE TASK 1 ////////////////////

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt ("введите число");
    numbers.push(Number(userInput))
}while (userInput !== null);
console.log(numbers);

for (let i=0; i<numbers.length; i++){
    total +=  numbers[i];
}

if(total > 0){
    alert(`Общая сумма чисел равна ${total}`)
}


//////////////////THE TASK 2///////////////////////

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;

// let userPassword;

// if(userPassword !== null){
//     do{
//        for(let i=0; i<=attempts; i++){
//            userPassword = prompt("введите пароль");
//            if(userPassword === passwords[i]){
//                alert("добро пожаловать")
//                break;
//            }
//        }
//     }while(attempts <= 3)
// }

