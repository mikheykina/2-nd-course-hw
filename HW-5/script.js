//ДЗ 5
//Задание 1
function min(a, b) {
    if (a < b) {
    return a;
    } else {
    return b;
    }
}
    
//Задание 2
function even(x) {
    if(Number.isInteger(x) == true){return x % 2 == 0}else{return undefined}
}

    
//Задание 3
//Задание 3.1
    
//Задание 3.2
const backSquare = n => {
    let result = n * n;
    return result;
}
    
//Задание 4
function whoAreYou(age) {
    let age = prompt('Сколько вам лет?');    
        if (age < 0) {
            console.log('Вы ввели неправильное число'); 
        if (0 < age < 12) 
            console.log('Привет, друг!'); 
        if (age >= 13) 
            console.log('Добро пожаловать!');
        }
}
    
//Задание 5
function multiplyNumbers(num1, num2) {
  if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  }
    return num1 * num2;
}

//Задание 6
function cubeNumber() {
  let num = prompt('Введите число:');
  if (isNaN(num)) {
    return 'Переданный параметр не является числом';
  }
  num = Number(num);
  const result = num ** 3;
  return `${num} в кубе равняется ${result}`;
}

for (let i = 0; i &lt;= 10; i++) {
  console.log(cubeNumber());
}

//Задание 7
const circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

console.log(circle1.getArea()); 
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter()); 