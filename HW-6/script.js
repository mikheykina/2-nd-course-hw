//ДЗ 6
//Задание 1
let ar = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < ar.length; i++) {
  if (ar[i] === 10) {
    break;
  }
  console.log(ar[i]);
}

//Задание 2
let c = [1, 5, 4, 10, 0, 3];
let search = c.indexOf(4);
console.log(search);

//Задание 3
let t = [1, 3, 5, 10, 20];
arr = arr.join(' ');
console.log(t);

//Задание 4
let l = [];

for (let i = 0; i < 3; i++) {
  let innerArray = [];
  for (let j = 0; j < 3; j++) {
    innerArray.push(1);
  }
  l.push(innerArray);
}

console.log(l);

//Задание 5
let p = [1, 1, 1];
p.push(2, 2, 2);
console.log(p);

//Задание 6
let array = [9, 8, 7, 'a', 6, 5];
array.sort();
for (let i = array.length - 1; i >= 0; i--) {
  if (typeof array[i] === 'string' && array[i] === 'a') {
    array.splice(i, 1);
  }
}
let result = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number') {
    result.push(array[i]);
  }
}

console.log(result);

//Задание 7
let a = [9, 8, 7, 6, 5];
let m = Number(prompt("Введите число"));
if (a.includes(m)) {
 alert("Вы угадали");
} else {
 alert("Вы не угадали");
}

//Задание 8
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString('abcdef')); 

//Задание 9
let multiNum = [
    [1, 2, 3, ],
    [4, 5, 6],
]
multiNum = multiNum.join();
let resultMulti = [multiNum];
console.log(resultMulti);

//Задание 10
const numm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numm.length - 1; i++) {
  const currentNumber = numm[i];
  const nextNumber = numm[i + 1];
  const sum = currentNumber + nextNumber;
  console.log(sum);
}

//Задание 11
function squareNumbers(n) {
  const squaredNumbers = n.map(n => n ** 2);
  return squaredNumbers;
}

const n = [1, 8, 3, 9, 5];
const squaredNumbers = squareNumbers(n);
console.log(squaredNumbers);

//Задание 12
function getLengthWords(strings) {
  let lengths = [];

  for (let i = 0; i < strings.length; i++) {
    let length = strings[i].length;
    lengths.push(length);
  }

  return lengths;
}

let res = getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(res);

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
function findAverage(numb) {
  const sum = numb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / numb.length;
  return average;
}

const numb = [];
for (let i = 0; i < 6; i++) {
  numb.push(Math.floor(Math.random() * 10) + 1);
}

const average = findAverage(numb);
console.log("Исходный массив:", numb);
console.log("Среднее арифметическое:", average);
