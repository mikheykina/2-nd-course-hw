//ДЗ 8
//Задание 1
const p = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(p.sort((a, b) => a.age - b.age));


//Задание 2
function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  return arr.filter(ruleFunction);
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 

//Задание 3
function printCurrentDate() {
  console.log(new Date());
}

function printMessage() {
  console.log('30 секунд прошло');
}

let counter = 0;
const intervalId = setInterval(() => {
  printCurrentDate();
  counter += 3;
  if (counter >= 30) {
    clearInterval(intervalId);
    printMessage();
  }
}, 3000);

//Задание 4
function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//Задание 5
delayForSecond(function() {
  sayHi('Глеб');
});
