//ДЗ №3
//Задание 1
let password = 'пароль';
let action = prompt("Введите пароль");
if (action = true) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}

//Задание 2
let k = 2;
if (k > 0 && k < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

//Задание 3
let d = 767;
let e = 76;
if (d > 100 || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

//Задание 4
let a = '2';
let b = '3';
alertNumber(a + b);

//Задание 5
let monthNumber = String(prompt('Введите число, чтобы узнать месяц'));
switch (monthNumber) {
    case 1:
        alert('Зима')
        break;
    case 2:
        alert('Зима')
        break;
    case 3:
        alert('Весна')
        break;
    case 4:
        alert('Весна')
        break;
    case 5:
        alert('Весна')
        break;
    case 6:
        alert('Лето')
        break;
    case 7:
        alert('Лето')
        break;
    case 8:
        alert('Лето')
        break;
    case 9:
        alert('Осень')
        break;
    case 10:
        alert('Осень')
        break;
    case 11:
        alert('Осень')
        break;
    case 12:
        alert('Зима')
        break;
    
    default:
        monthNumber >= 13
        break;
}

//Задание 7
let y = Number(prompt('Пожалуйста, введите любое число»'));
if (!isNaN(y)) {
    if (a % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} else {
    console.log(NaN);
}

//Задание 8
let IOS = 1;
if ((IOS = 1)) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}

//Задание 9
const clientDeviceYear = 2005;
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
if (clientDeviceYear <= 2014) {
    if (isIOS) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        alert('Установите облегченную версию приложения для Android по ссылке'); 
    }
} else {
    if (isIOS) {
      alert('Установите версию приложения для iOS по ссылке'); 
    } else {
        alert('Установите версию приложения для Android по ссылке');
    }
}