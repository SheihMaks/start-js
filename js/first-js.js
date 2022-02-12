// let x = prompt("Введите желаемое число");
// console.log(x);
// let power = prompt("Введите желаемую степень");
// power = Number(power);
// console.log(power);
// let result = x ** power;
// console.log(result);

//============================Генерим рандомные числа================================

// const max = 30;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

//Math.random() * (max - min) + min

//==========================Генератор случайного цвета===========================================

// const colors = ["tomato", "red", "green", "blue"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.background = color;

//================================нормализуем===============================================================

// let brand = prompt("Введите брэнд");
// brand = brand.toLowerCase();
// console.log(brand);

//==========================================ПОИСК В СТРОКЕ==================================

// const blacklistword1 = "спам";
// const blacklistword2 = "распродажа";
// const string1 = "Привет, я принц Абдул, это спам";
// let string2 = "Сегодня Распродажа сезона";
// const normstring2 = string2.toLowerCase();
// console.log(string1.includes(blacklistword1));
// console.log(string1.includes(blacklistword2));

// console.log(normstring2.includes(blacklistword1));
// console.log(normstring2.includes(blacklistword2));

//==============================================================================================

// const x1 = 10;
// const x2 = 30;
// const x3 = prompt("Введите желаемое число");
// const res = x3 > x1 && x3 < x2;
// console.log(`Попадает ли число ${x3} в отрезок между ${x1} и ${x2}`, res);

// ======================================================================================================

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(`Можо и отрыть чат?`, canOpenChat);

//=========================================================================================================

// const sub = "pro";

// const canAccessContent = sub === "pro" || sub === "vip";
// console.log("Если доступ к контенту?", canAccessContent);

//=======================================================Ветвление================================================

// let salary = prompt("Введите свою зарплату");
// if (salary < 1000) {
//   console.log("Хреновато живется");
// } else if (salary > 1000 && salary < 25000) {
//   console.log("Старайся лучше!!!");
// } else {
//   console.log("Ты крутяк!!!");
// }

//=========================================================тернарный оператор==========================================
//когда только если 2 варианта

// let salary = prompt("Введите свою зарплату");
// if (salary <= 1000) {
//   message="Хреновато живется";
// } else {
//     message = "Старайся лучше!!!";
//=============================Пример

// const message = salary <= 1000 ? "Хреновато живется" : "Старайся лучше!!!";
// console.log(message);
// const array = ["mas", "rom", "fill"];

// function getExtremeElements(array) {
//   // Change code below this line
//   array = array.splice(1, array.length - 1);
//   //
//   console.log(array);
//   return array;
// }

// let message = "ghhg jjjp jpj hhjp";
// const pricePerWord = 25;
// // function calculateEngravingPrice(message, pricePerWord) {
// // Change code below this line
// message = message.split(" ");

// console.log(message.length * pricePerWord);
//   for (i = 0; i <= message.length; i += 1) {
//     return i * pricePerWord;
//   }

// // Change code above this line
// // }
// let title = "fhgfIIU jjhHH IUUnjj";
// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().replaceAll(" ", "-");
// }
// console.log(title);
// // Change code above this line
