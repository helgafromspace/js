// Вирахуйте значення площі кола на основі наданих значень.
// Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
// Виведіть результат 
// */

// var r = 15; // радіус
// var Pi = 3.1415; // число Пі

// const square = function(){
//     return Math.floor(Pi*(r**2));
// }

// console.log(square())

// function typeOf(element){
//     return typeof(element);
// }

// console.log(typeOf('something'));
// console.log(typeOf(5));
// console.log(typeOf(Symbol('3')));
// console.log(typeOf(true));
// console.log(typeOf());
// function isSortedDescending(arr){
//   for (let i=0; i<arr.length; i++){
//       console.log(arr[i]);
// }
// }
// arr = [10, 9, 8, 7]
// console.log(isSortedDescending(arr))
/* Завдання 4:
За допомогою цикла for виведіть всі числа котрі діляться на 4 між 0 и 100 

/* Завдання 5:
Створіть функцію min(a, b), яка повертає менше число з чисел а и b без використання бібліотеки Math
*/

// for(let i=0; i <= 100; i++){
//   if (i % 4 == 0){
//     console.log(i);
//   }
// }

// function min(a, b){
//   if (a < b){
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(3,5))


/* Завдання 2:
Виведіть на екран cередню ціну на продукти
 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі 
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі 
let productQuantity3 = 15; // кількість одениць 3го продукту на складі 

let productPrice = function (productPrice,productQuantity){
  return productPrice * productQuantity;
}

let avgPrice = function (...prices){
  let sum = 0;
  for(i=0; i < prices.length; i++){
    sum += prices[i];
  }
  return Math.floor(sum/prices.length);
}

console.log(avgPrice(productPrice (productPrice1,productQuantity1),productPrice (productPrice2,productQuantity2),productPrice (productPrice3,productQuantity3)))