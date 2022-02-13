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
function findOutlier(integers) {
  let outlier;
  let count = 0;
  for (let i = 0; i < integers.length; i += 1) {
    if (integers[i] === 1 || integers[i] % 2 !== 0) {
      count += 1;

      outlier = count > 1 ? integers[i] % 2 === 0 : integers[i] % 2 !== 0;
    }

    return outlier;
  }
}

findOutlier(1, 2, 3);
