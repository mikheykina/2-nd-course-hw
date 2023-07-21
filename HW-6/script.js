//ДЗ 6
//Задание 1
let arr = [1, 5, 4, 10, 0, 3];
for (let i = 10; i < numbs.length; i++) {
    console.log(numbs[i]);
}

//Задание 2
let arr = [1, 5, 4, 10, 0, 3];
let search = arr.indexOf(4);
console.log(search);

//Задание 3
let arr = [1, 3, 5, 10, 20];
arr = arr.join(' ');
console.log(arr);

//Задание 4
let arr = [];
for(let i = 0; i < 1; i++) {
    arr[i] = [];
for(let j = 0; j < 1; j++) {
    arr[i].push(j + 1);
for(let k = 0; k < 1; k++) {
    arr[k].push(k + 1);
}    
}    
}  //?

//Задание 5
let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

//Задание 6
const arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
const result = arr.filter(item => item = numbs);
console.log(result); //?

//Задание 7
let arr = [9, 8, 7, 6, 5];
let n = Number(prompt("Введите число"));
if (arr.includes(n)) {
 alert("Вы угадали");
} else {
 alert("Вы не угадали");
}

//Задание 8
let string = "abcdef";
let arr = string.split("");
arr.reserse();
arr = arr.join("");
console.log(arr);

//Задание 9
let multiNum = [
    [1, 2, 3, ],
    [4, 5, 6],
]
multiNum = multiNum.join();
let resultMulti = [multiNum];
console.log(resultMulti);

//Задание 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length - 1; i++) {
  const currentNumber = numbers[i];
  const nextNumber = numbers[i + 1];
  const sum = currentNumber + nextNumber;
  console.log(sum);
}

//Задание 11
function squareNumbers(numbers) {
  const squaredNumbers = numbers.map(number => number ** 2);
  return squaredNumbers;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);

//Задание 12

//Задание 13
function filterPositive(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            result.push(array[index]);
        }
    }
    return result;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

//Задание 14
function findEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  return evenNumbers;
}

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 11));
}

const evenNumbers = findEvenNumbers(numbers);
console.log("Исходный массив:", numbers);
console.log("Массив с четными значениями:", evenNumbers);

//Задание 15
function findAverage(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / numbers.length;
  return average;
}

const numbers = [];
for (let i = 0; i < 6; i++) {
  numbers.push(Math.floor(Math.random() * 10) + 1);
}

const average = findAverage(numbers);
console.log("Исходный массив:", numbers);
console.log("Среднее арифметическое:", average);
