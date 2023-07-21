//ДЗ №2
// Задание 1
let m;
m = 20;
alert(m);

//Задание 2
let data;
data = 2007;
alert(data);

//Задание 3
let o;
o = 'Брендан Эйх';
alert(o);

//Задание 4
let u = 10;
let c = 2;
alert (u+c);
alert (u-c);
alert (u*c);
alert (u/c);

//Задание 5
let result;
result = 2**5;
alert (result);

//Задание 6
let a = 9;
let b = 2;
alert (a%b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert (age);

//Задание 9
const user = {
    name: 'Anastasia',
    age: 24,
    isAdmin: true,
}
user["city of residence"] = 'Moscow';
delete user["city of residence"]; 
let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert(info = user);

//Задание 10
let n = prompt("Введите ваше имя");
alert(`Привет, ${n} "!"`);