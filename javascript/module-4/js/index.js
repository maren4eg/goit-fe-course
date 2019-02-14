///task 1///

// const user = {
// name: "Mango",
// age: 20,
// hobby: "html",
// premium: true
// };

// user.mood = "happy"
// user["hobby"] = "javascript";
// delete user.premium;

// for(const key in user){
//   console.log("key",user[key]);
// }

// const keys = Object.keys(user);

// for (const key of keys){
//   console.log("keys", user[key]);
// }

// const entries = Object.entries(user);
// console.log(entries);
// for (const entry of entries){
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}`,`${value}`);
// }

/////task 2 /////////

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// let entries = Object.entries(tasksCompleted);

// let max = 0;
// let maxName = "j";

// for (let entry of entries){
//    if (max < entries[entry]){
//     max = entries[entry];
//    }
//     maxName = entry;

// }
// console.log(maxName);

//// task 3 /////

// let countProps = function(obj){
//   let quantity = Object.values(obj);
//   return quantity.length;
// }

// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

//// task 4 ////

// let isObjectEmpty = function(obj) {
//   let quantity = Object.values(obj);
//   if (quantity.length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

//// task 5 ////

// let countTotalSalary = function(countTotalSalary) {
//   let values = Object.values(countTotalSalary);
//   let total = 0;

//   for (let value of values) {
//     total += value;
//   }

//   return total;
// };

// console.log(
//     countTotalSalary({})
//   ); // 0

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330

///// task 5 /////

//   /*
//   Напишите функцию getAllPropValues(arr, prop),
//   которая получает массив объектов и имя ключа,
//   возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];

//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']

//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']

//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

///// task 6 /////



// function User(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
// }

// const getUserInfo = new User("mango", true, 16, 12);
// console.log(getUserInfo);

// ///////////////////////////////////

// /*
//   Расставьте отсутствующие this в методах объекта store
// */

// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//       managers.push(manager);

//       console.log(managers);
//     },
//     removeManager(manager) {
//       const idx = managers.indexOf(manager);

//       managers.splice(idx, 1);

//       console.log(managers);
//     },
//     getProducts() {
//       console.log(products);

//       return products;
//     }
//   }

//   store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

//   store.removeManager('mango'); // ['poly', ajax', 'chelsey']

//   store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

//   /////////////////////////////////

//   /*
//   Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account(login, password, type = "regular") {
//     login = login;
//     password = password;
//     type = type;

//     changePassword = function(newPassword) {
//       password = newPassword;

//       console.log(password);
//     };

//     getAccountInfo = function() {
//       console.log(`
//         Login: ${login},
//         Pass: ${password},
//         Type: ${type}
//       `);
//     };
//   }

//   const account = new Account("Mango", "qwe123", "premium");

//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'

//   account.changePassword("asdzxc"); // 'asdzxc'

//   account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

/////// homework ///////

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmout = 0;
  this.countTotalPrice = function(order) {
      for (const key in order) {
          this.totalPrice = this.totalPrice + order[key] * this.products[key];
      }
      console.log(`totalPrice: ${this.totalPrice}`);
      return this.totalPrice;
  };
  this.getCustomerMoney = function() {
       do {
          this.customerMoney = prompt(`Общая сумма покупок ${this.totalPrice}. Введите ваши деньги:`);
          console.log(this.customerMoney !== null);
          if (this.customerMoney < this.totalPrice && this.customerMoney !== null) {
              console.log(`Вам не хватило денег.`);
          };
       } while (this.customerMoney === null || (this.customerMoney < this.totalPrice) || (Number.isNaN(+this.customerMoney)));
      return this.customerMoney;
  };
  this.countChange = function() {
      this.changeAmout = this.customerMoney - this.totalPrice;
      return this.changeAmout;
  };
  this.resetOnSuccess = function() {
      this.totalPrice = 0;
      this.customerMoney = 0;
      this.changeAmout = 0;
  };
  this.serve = function(order) {
      this.countTotalPrice(order);
      this.getCustomerMoney();
      this.countChange();
      console.log(this.totalPrice);
      if (this.changeAmout >= 0) {
          console.log(`Спасибо за покупку, Ваша сдача ${this.changeAmout}`);
          return `Спасибо за покупку, Ваша сдача ${this.changeAmout}`;
      } else {
          console.log(`Вам не хватило денег`);
          return 'Вам не хватило денег';
      }
  };
}

const cashier = new Cashier('Mango', products);
console.log(order);
console.log(products);

cashier.serve(order);