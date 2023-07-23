//ДЗ 7
//Задание 1
let str = 'js';
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

//Задание 2
function searchStart(array, prefix) {
  const result = array.filter(word => word.toLowerCase().startsWith(prefix.toLowerCase()));
  return result;
}
const result1 = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
console.log(result1); 

const result2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
console.log(result2);  

const result3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
console.log(result3);  

//Задание 3
const number = 32.58884;

const floorNumber = Math.floor(number);
const ceilNumber = Math.ceil(number);
const roundNumber = Math.round(number);


console.log(floorNumber); 
console.log(ceilNumber); 
console.log(roundNumber); 

//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log(minNumber); 
console.log(maxNumber);

//Задание 5
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}
getRandomNumber();

//Задание 6
function getRandomArrNumbers(num) {
    let array = [];
    let halfArray = Math.floor(num / 2);
    for (let i = 0; i < halfArray; i++) {
        array.push(Math.ceil(Math.random(num) * num));
    }
    return array;
};
console.log(getRandomArrNumbers(9));

//Задание 7
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); 

//Задание 8
const currentD = new Date();
console.log(currentD.toDateString());

//Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate.toDateString());

//Задание 10
function formatDate(date) {
  const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return ("Дата: ${day} ${month} ${year} - это ${dayOfWeek}.Время: ${hours}:${minutes}:${seconds};")
}

const now = new Date();
console.log(formatDate(now));
