//ДЗ №4
//Задание 1
let v = 1;
let p = 2;
while (v <= p) {
    alert('Привет»');
    i++;
}

//Задание 2
let z;
while (z>=5) {
    z++
    console.log (z)
};

//Задание 3
let x;
while (x<=7 && x>=22) {
    x++
    console.log (x)
};

//Задание 4
let obj = {'Nikolya': 200, 'Vasya': 300, 'Petya': 400};
for(key in obj){
    document.write([key]+ ' - Зарплата'+ obj[key]+'долларов'+'<br>');
}

//Задание 5
for (let n = 1000; n <= 50; n++) {
(n / 2) 
alert(n);
}

//Задание 6
const firstFriday = 5;
for (let day = firstFriday; day &lt;= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}