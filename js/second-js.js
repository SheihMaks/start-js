// let stars = 8;

// let price;
// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого количества звезд у нас нет");
// }
//=======================================================SWITCH ПРИМЕНИМ ТОЛЬКО ДЛЯ РАВЕНСТВА==========================================================
// let stars = 8;

// let price;
// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого количества звезд у нас нет");
// }
// console.log(price);

// const option = 5;
// let message = "";
// switch (option) {
//   case 1:
//     message = "иди нафик";
//     break;
//   case 2:
//     message = "иди туда";
//     break;
//   case 3:
//     message = "иди cюда";
//     break;
//   default:
//     console.log("Останься");
// }
// console.log(message);

//==========================================================Цикл FOR (строки не перебираются, только числа)=====================================================================
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
// }

// const employees = 30;
// const minsalary = 500;
// const maxsalary = 5000;

// let totaSalary = 0;
// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxsalary - minsalary) + minsalary
//   );
//   totaSalary += salary;
//   console.log(`Зарплата сотрудника №${i}-${salary}`);
// }
// console.log("totaSalary: ", totaSalary);
//36;

//=====================================================

// const min = 6;
// const max = 13;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log("четное-", i);
//     total += i;
//   }
// }
// console.log(total);

// const min = 6;
// const max = 13;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log("нечетное-", i);
//     continue;
//   }
//   console.log("четное-", i);
//   total += i;
// }
// console.log(total);
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     message.length <= maxLength
//       ? message.slice(message.length)
//       : message.slice(`maxLength, + ...`);
//   // {
//   //   message= message.slice(message.length)
//   // } else {
//   //   message= message.slice(maxLength, +"...")
//   // }
//   /// Change code above this line
//   return result;
// }

// const numbers = [1, 2, 3, 4];
// const value = 3;
// function filterArray(numbers, value) {
//   // Change code below this line
//   for (let i = i > value; i < numbers.length; i += 1) {
//     if (value >= numbers.length) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
//   // Change code above this line
// }
// function filterArray(numbers, value) {
//   // Change code below this line

//   for (let i = i > value; i < numbers.length; i += 1) {
//     if (value >= numbers.length - 1) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
//   // Change code above this line
// }
// FizzBuzz.Напишите программу, которая выводит через console.log все числа от 1 до 100,
//   с двумя исключениями.Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
//   а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так,
//   чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
// function filterNumbers(min, max) {
//   for (i = min; i <= max; i += 1) {
//     i = ai % 3 === 0 && i % 5 === 0) {
//       console.log(`${i}- FizzBuzz`);
//     } else {
//       console.log(`${i}`);
//     }
//   }
//   return;
// }
// filterNumbers(0, 100);
// function getSum(a, b) {
//   let total = 0;
//   let aTemp = a;
//   let bTemp = b;
//   if (a === b) {
//     return b;
//   } else if (a > b) {
//     a = bTemp;
//     b = aTemp;
//   }
//   for (let i = a; i <= b; i += 1) {
//     total += i;
//     return total;
//   }
//   //Good luck!
// }
// getSum(5, 7);
// function getSum(a, b) {
//   let total = 0;
//   let aTemp = a;
//   let bTemp = b;
//   if (aTemp === bTemp) {
//     return a;
//   } else if (a > b) {
//     a = bTemp;
//     b = aTemp;
//   }
//   for (let i = a; i <= b; i += 1) {
//     total += i;
//   }
//   return total;
// }
// getSum(5, 7);
//============================================================Деструкторизвция
// const newPlaylist = function (playlist) {
//   const { name, rating, tracks, tackcount } = playlist;
//   console.log(name, rating);
// };

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек 1", "трек 2"],
//   trackcount: 3,
// };

// newPlaylist(playlist);
//================================================================Entries===============================
// const authors = {
//   kiwi: 5,
//   orange: 6,
//   apple: 8,
//   mandarin: 10,
// };

// const ratingFructs = Object.entries(authors);
// for ([name, rating] of ratingFructs) {
//   console.log(name, rating);
// }

// const sites = {
//   yandex: 5,
//   mail: 8,
//   gmail: 10,
//   ukrnet: 15,
// };

// const ratingSites = Object.entries(sites);
// console.log(ratingSites);
// for ([site, rating] of ratingSites) {
//   console.log(site, rating);
// }
//===========================================================restprops
// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек 1", "трек 2"],
//   trackcount: 3,
// };

// const { name, rating, ...allAboutTracks } = playlist;
// console.log(allAboutTracks);
//==================================================================Объект настройки тренировка

// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
// };

// const profile = {
//   name: "Maksim",
//   age: 20,
//   location: "Ukraine",
//   stats: {
//     followers: 1000,
//     views: 800,
//     likes: 500,
//   },
// };
// showProfileInfo(profile);
//====================================================================Объект настройки c деструктизацией в теле, тренировка
// const playlist = function (aboutPlaylist) {
//   const { name, track, rating, trackcount } = aboutPlaylist;
//   console.log(name, track, rating, trackcount);
// };

// const aboutPlaylist = {
//   name: "rock",
//   track: ["Unforgiven", "Unforgiven 2"],
//   rating: 5,
//   trackcount: 3,
// };

// playlist(aboutPlaylist);
//==========================================================Объект настройки тренировка c деструктизацией в параметре функции
// const allFructs = function ({ kiwi, orange, apple }) {
//   console.log(kiwi, orange, apple);
// };

// const fructs = {
//   kiwi: "green",
//   orange: "yellow",
//   apple: "red",
// };

// allFructs(fructs);
//=================================================================================

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       if (productName === name) {
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     const { items } = this;
//     for (const item of items) {
//       const { price, quantity } = item;
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//       }
//     }
//   },
// };
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 50 });
// cart.add({ name: "orange", price: 50 });
// cart.add({ name: "kiwi", price: 50 });
// cart.increseQuantity("");
// cart.decreaseQuantity("");
// console.table(cart.getItems());

// cart.countTotalPrice();
// console.log(cart.countTotalPrice());
// cart.remove("kiwi");
// console.table(cart.getItems());
// cart.clear();
// console.log(cart.getItems());

// let userInfo = {
//   name: "Вася",
//   age: 30,
//   adress: {
//     city: "Uzhgorod",
//   },
// };
// for (const key in userInfo.adress) {
//   console.log(userInfo.adress[key]);
// }

// let cart = {
//   foods: [],
//   getFoods() {
//     return this.foods;
//   },
//   addFoods(product) {
//     for (const food of this.foods)
//       if (food.name === product.name) {
//         food.quantity += 1;
//         return;
//       }
//     const newFoods = {
//       ...product,
//       quantity: 1,
//     };
//     this.foods.push(newFoods);
//   },
//   // clear() {
//   //   this.foods = [];
//   // },
//   remove(productName) {
//     const { foods } = this;
//     for (let i = 0; i < foods.length; i = +1) {
//       const { name } = foods[i];
//       if (productName === name) {
//         console.log(`НАШЛИ`, productName);
//         foods.splice(i, 1);
//         return;
//       }
//     }
//   },
//   letTotalPrice() {
//     let total = 0;
//     for (const food of this.foods) {
//       total += food.price * food.quantity;
//     }
//     return total;
//   },
// };

// cart.addFoods({ name: "bread", price: 100 });
// cart.addFoods({ name: "eggs", price: 50 });
// cart.addFoods({ name: "oil", price: 150 });
// cart.addFoods({ name: "oil", price: 150 });
// cart.addFoods({ name: "mineral water", price: 50 });

// console.table(cart.getFoods());
// cart.remove("eggs");

// console.table(cart.getFoods());

// cart.letTotalPrice();
// console.log(cart.letTotalPrice());

// const cat = {
//   lenght: 5,
//   age: 3,
//   eat:function() {}
// }
//========================================================Класс, конструктор обьектов и т.д.=================================================================================
// class Cat {
//   construcnor(length, age) {
//     this.length = length;
//     this.age = age;
//   }
//   // eat(){}
// }
// var cat = new Cat(3, 5);
// console.log(cat);

// var cat = new Cat(1, 4);
// console.log(cat);

//========================================================Прототипы пример=======================================================================

// var animal = {
//   age: 10,
//   eat: function () {
//     return "nyamnyam";
//   },
// };

// var cat = {
//   mustache: true,
//   getVoice: function () {
//     return "myau myau";
//   },
// };

// var dog = {
//   mustache: false,
//   getVoice: function () {
//     return "gav gav";
//   },
// };

// cat.__proto__ = animal;
// dog.__proto__ = animal;

// console.log(cat);
// console.log(dog);
// console.log(animal);
// console.log("Наличие усов:", cat.mustache);
// console.log("Возраст:", cat.age);

// ==============================================================ПРОТОТИПЫ РАБОЧАЯ ВЕРСИЯ==================================================

// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }
//   eat() {
//     return "nyam nyam";
//   }
// }

// class Cat extends Animal {
//   constructor(age, weight) {
//     super(age, weight);
//     this.mustache = true;
//   }
//   getVoice() {
//     return "myau myau";
//   }
// }
// class Dog extends Animal {
//   constructor(age, weight) {
//     super(age, weight);
//     this.mustache = false;
//   }
//   getVoice() {
//     return "gav gav";
//   }
// }
// var cat = new Cat(20, 4);
// var dog = new Dog(10, 8);
// console.log(cat);
// console.log(dog);
// console.log(cat.age);

//==========================================================CALLBACK- ФУНКЦИИ=================================================================

// let message = prompt("Введите сообщение");
// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Сработал fnB", number);
// };
// fnA(message, fnB);
// ==================================================================
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const solution2 = function (x, y) {
//   return x - y;
// };

// const solutions3 = function (b, d) {
//   return b / d;
// };

// doMath(2, 8, function (a, b) {
//   return a * b;
// });
// doMath(4, 6, solution2);
// // doMath(6, 2, solutions3);
// //=======================================================================
// const buttonRef = document.querySelector(".button_js");
// const handleBtnClick = function () {
//   console.log("Клик по кнопке");
// };

// buttonRef.addEventListener("click", handleBtnClick);
// // =======================================================================
// const callback = function () {
//   console.log("Выполнить через 3 сек");
// };
// console.log("Начинаем выполнение");

// setTimeout(callback, 2000); //Функция отсроченного вызова(функция передается как калбэк) setTimeout регистрирует отложенное выполнение калбэка.

// console.log("Выполняю callback");

// =================================================КАЛБЭК НА ПРИМЕРЕ ФИЛЬТРА===============================

// const array = [1, 2, 3, 4, 5];
// const fructs = [
//   { name: "Банан", quantity: 3 },
//   { name: "Груша", quantity: 2 },
//   { name: "Яблоко", quantity: 2 },
//   { name: "Апельсин", quantity: 3 },
// ];
// const filter = function (array, callback) {
//   let filteredArray = [];
//   for (const el of array) {
//     console.log(el);

//     const passed = callback(el);
//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const r1 = filter(array, (callback1 = (value) => value >= 3));

// console.log(r1);

// const callback2 = function (value) {
//   return value <= 2;
// };

// const r2 = filter(array, callback2);

// console.log(r2);

// const filteredFructs = function (fruct) {
//   return fruct.quantity === 2;
// };
// const filterFruct = filter(fructs, filteredFructs);
// console.log(filterFruct);
// // ===================================================ЗАМЫКАНИЕ!!!!!!!!!!!!!!!!!!!!!========================================================
// // =====================================ВАРИАНТ БЕЗ ЗАМЫКАНИЕ=====================
// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish} `);
// };

// makeDish("mango", "eggs");
// makeDish("mango", "potatotes");
// makeDish("poly", "tomato");
// makeDish("poly", "milk");
// // ========================================ВАРИАНТ С ЗАМЫКАНИЕМ===================
// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish} `);
//   };
//   return makeDish;
// };

// const mango = makeSheff("Mango");
// const poly = makeSheff("Poly");
// mango("milk");
// poly("eggs");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name !== oldName) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
//       this.potions.splice();
//     }
//   },
// };
// // ============================================================
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSucces, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizzaName === pizza) {
//         console.log(pizza);
//         console.log(pizzaName);
//         return onSucces(pizzaName);
//       }
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// let value = 10;
// let numbers = [1, 2, 3, 4, 5, 6];
// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     }
//   });
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven(numbers, value));
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
console.table(players);
const namePlayerUpdate = "Ajax";
const updatePlaytimeByName = players.map((player) =>
  namePlayerUpdate === player.name
    ? { ...player, playtime: player.playtime + 1000 }
    : player
);
// Change code below this line

console.table(updatePlaytimeByName);

const totalAveragePlaytimePerGame = players.reduce(
  (prev, player) => prev + player.playtime / player.gamesPlayed,
  0
);

console.log(totalAveragePlaytimePerGame);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.table(tweets);
// const updateLike = tweets.map((tweet) => ({
//   ...tweet,
//   likes: tweet.likes * 2,
// }));

// console.log(updateLike);
const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);
countOfTags = allTags.reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);
console.log(countOfTags);
const idLikes = "001";
const updateLikes = tweets.map((tweet) =>
  idLikes === tweet.id ? { ...tweet, likes: tweet.likes * 10 } : tweet
);
console.table(updateLikes);
// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getSortedFriends = users

//   .flatMap((user) => user.friends)
//   .sort((a, b) => a.localeCompare(b))
//   .filter((friend, i, users) => users.indexOf(friend) === i);
// console.log(getSortedFriends);
// console.log(users);
// const getNamesSortedByFriendCount = [...users]
//   .sort((a, b) => a.name.localeCompare(b.name.length))
//   .map((user) => user.name);
// // const getTotalFriendCount = users.reduce(
// //   (prev, user) => prev + user.friends.length,
// //   0
// // );
// console.log(getNamesSortedByFriendCount);
// console.log(getTotalFriendCount);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((book) => book.author);

// console.log(names);
// console.log(books);

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = str + this.value;
//   }
//   padStart(str) {
//     this.value = this.value + str;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// class Car {
//   // Change code below this line
//   static MAX_PRICE = {
//     MAX_PRICE: 50000,
//   };
//   #price;

//   constructor({ price, MAX_PRICE }) {
//     this.#price = price;
//     this.MAX_PRICE = MAX_PRICE;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > this.MAX_PRICE) {
//       return;
//     }
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.MAX_PRICE);
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// =====
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccesLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(AccesLevel) {
//     this.AccesLevel = AccesLevel;
//   }
// }
// console.log(Admin.AccesLevel.SUPERUSER);
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango);
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// console.log(mango.blacklistedEmails);
// mango.blacklist("poly@mail.com");
// console.log(mango);
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };
// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };
// const maksim = new User({
//   email: "sheihmaks@yandex.ru",
//   password: 230287,
// });
// User.prototype.changePassword = function (newPassword) {
//   this.password = newPassword;
// };
// console.log(maksim);
// maksim.changeEmail("sheihmaks@gmail.com");
// console.log(maksim);
// maksim.changePassword(1108);
// console.log(maksim);

const Bag = function ({ size, sex, material } = {}) {
  this.size = size;
  this.sex = sex;
  this.material = material;
};
Bag.prototype.changeMaterial = function (newMaterial) {
  this.material = newMaterial;
};
Bag.prototype.changeSex = function (newSex) {
  this.sex = newSex;
};
Bag.prototype.changeSize = function (newSize) {
  this.size = newSize;
};
const gucci = new Bag({
  size: "small",
  sex: "female",
  material: "leather",
});
console.log(gucci);
gucci.changeMaterial("ECO-leather");
console.log(gucci);
gucci.changeSex("male");
console.log(gucci);
gucci.changeSize("big");
console.log(gucci);
console.log(Bag.prototype);

const User = function ({ login, email } = {}) {
  this.login = login;
  this.email = email;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};
const svetlana = new User({
  login: "svetlana",
  email: "sveta01101985@gmail.com",
});
console.log(svetlana);
svetlana.changeEmail("alekseeva01101985@gmail.com");
console.log(svetlana);
//========================================PLUGIN=================================================
// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);
//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   console.log(rootSelector);
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector("[data-increment]");
//   refs.decrementBtn = refs.container.querySelector("[data-decrement]");
//   refs.value = refs.container.querySelector("[data-value]");
//   console.log(refs.container);
//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener("click", () => {
//     console.log("CounterPlugin.prototype._bindEvents->this", this);
//     this.increment();
//     this.updateValueUI();
//   });
//   this._refs.decrementBtn.addEventListener("click", () => {
//     console.log("CounterPlugin.prototype._bindEvents->this", this);

//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter1 = new CounterPlugin({
//   rootSelector: "#counter-1",
//   step: 20,
// });
// console.log("counter1", counter1);

// const counter2 = new CounterPlugin({
//   rootSelector: "#counter-2",
//   step: 2,
// });
// console.log("counter2", counter2);
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// console.log(counter1);
// =================================================================
const orks = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
console.table(orks);

const updateAllPlaytime = orks.map((ork) => ({
  ...ork,
  playtime: (ork.playtime += 1000),
}));
const minPlaytime = 2;
const updatePlaytime = orks.map((ork) =>
  minPlaytime < ork.gamesPlayed
    ? { ...ork, gamesPlayed: (ork.gamesPlayed += 2) }
    : ork
);

const updateName = orks.map((ork) =>
  ork.name === "Ajax" ? { ...ork, name: "Maks" } : ork
);
console.table(updateName);
console.table(updatePlaytime);

class Product {
  #name;
  constructor({ name, quantity, quality }) {
    this.#name = name;
    this.quantity = quantity;
    this.quality = quality;
  }
  get nameProduct() {
    return this.#name;
  }

  set nameProduct(newName) {
    this.#name = newName;
  }
}

class Fruct extends Product {
  constructor({ type, ...args }) {
    super({ ...args });
    this.type = type;
  }
}

const fruct = new Fruct({
  type: "citric",
  name: "Orange",
  quantity: 5,
  quality: "high",
});
0;
console.log(fruct);
// console.log(fruct.getListProducts());
console.log(fruct.nameProduct);
console.log((fruct.nameProduct = "Mandarin"));
console.log(fruct);
// =====================================СОРТИРОРВКА ЧИСЕЛ====================
const numbers = [8, 5, 4, 7, 9, 1, 4, 2, 6, 3];
// const copy = [...numbers];
// const sortedNumbers = copy.sort((a, b) => a - b);
const sortedNumbers = [...numbers].sort((a, b) => a - b);

const filteredArray = numbers.filter((num) => num > 5);

// =====================================СОРТИРОРВКА СТРОК====================

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const sortedUsers = [...users].sort((a, b) => {
  const result = a.name[0] > b.name[0];
  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});
console.log(sortedUsers);
const sorted = [...users].sort((a, b) => {
  const res = a.name[0] > b.name[0];
  if (res) {
    return -1;
  }
  if (!res) {
    return 1;
  }
});
console.log(sorted);
// =================================================================================================

const friends = [...users]
  .flatMap((user) => user.friends)
  .sort((a, b) => {
    const res = a[0] > b[0];
    if (res) {
      return -1;
    }
    if (!res) {
      return 1;
    }
  });
console.log(friends);
console.log(filteredArray);
console.log(sortedNumbers);

console.log(numbers);

const redFriends = users
  .reduce((acc, user) => [...acc, ...user.friends], [])
  .sort((a, b) => {
    const res = a[0] > b[0];
    if (res) {
      return 1;
    }
    if (!res) {
      return -1;
    }
  });
console.log(redFriends);

const allFriends = users.reduce((friendList, user) => {
  console.log(...user.friends);
  friendList.push(...user.friends);

  return friendList;
}, []);
console.log(allFriends);

const countTagsByName = allFriends.reduce(
  (acc, friend) => ({ ...acc, [friend]: acc[friend] ? acc[friend] + 1 : 1 }),
  {}
);

console.log(countTagsByName);

const user = {
  name: "Mango",
};
console.log(user["name"]);
const key = "name";
console.log(user[key]);

const showTag = function () {
  console.log("showTag->this", this);
  console.log("showTag->this.tag", this.tag);
};
const uber = {
  tag: "Maximus",
};
uber.showUserTag = showTag;
console.log(uber);
uber.showUserTag();
// =======================================================================================counter
// const counterRepeta = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
//   updateValue() {},
// };

// const updateCounter = function (value, callback) {
//   callback(value);
// };

// updateCounter(50, counterRepeta.increment.bind(counterRepeta));
// console.log(counterRepeta);
// updateCounter(10, counterRepeta.decrement.bind(counterRepeta));
// console.log(counterRepeta);
// const btnIncr = document.querySelector(".js-increment");
// const valueJs = document.querySelector(".js-value");
// const btnDecr = document.querySelector(".js-decrement");
// console.log(btnIncr);
// btnIncr.addEventListener("click", function () {
//   counterRepeta.increment();
//   valueJs.textContent = counterRepeta.value;
// });
// btnDecr.addEventListener("click", function () {
//   counterRepeta.decrement();
//   valueJs.textContent = counterRepeta.value;
// });
// ======================================================================================
// const titleEl = document.createElement("h1");
// titleEl.classList.add("title__page");
// titleEl.textContent = "Это заголовок №1";
// console.log(titleEl);
// document.body.appendChild(titleEl);
// const imageUkr = document.createElement("img");
// imageUkr.classList.add("image");
// imageUkr.src =
//   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fodessa-life.od.ua%2Fnews%2Fjetot-den-istorii-kogda-sine-zheltyj-flag-stal-gosudarstvennym-simvolom-ukrainy&psig=AOvVaw3ldXSTeTVw2FT0hcd5B6c4&ust=1650562396591000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKC976WWo_cCFQAAAAAdAAAAABAD";
// imageUkr.alt = "Флаг Украины";
// document.body.appendChild(imageUkr);

const buttonsRef = document.querySelector(".container-js");
let selectedTag = null;
console.dir(buttonsRef);
buttonsRef.addEventListener("click", onClick);
function onClick(event) {
  console.log(event);

  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const currentClass = document.querySelector(".active");

  currentClass?.classList.remove("active");
  const x = event.target;
  x.classList.add("active");
  selectedTag = x.dataset.value;
  console.log(selectedTag);
}
