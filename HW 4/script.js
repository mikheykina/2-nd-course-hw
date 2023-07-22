//ДЗ №4
//Задание 1
let v = 1;
let p = 2;
while (v <= p) {
    alert('Привет»');
    v++;
}

//Задание 2
let z = 1;
while (z <= 5) {
  console.log(z);
  z++;
}

//Задание 3
let i = 7;
while (i <= 22) {
  console.log(i);
  i++;
}

//Задание 4
let obj = {'Nikolya': 200, 'Vasya': 300, 'Petya': 400};
for(key in obj){
    document.write([key]+ ' - Зарплата'+ obj[key]+'долларов'+'<br>');
}

//Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log(n); 
console.log(num); 


//Задание 6
function printReportReminders() {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const firstFriday = 5; 
    const monthDays = 31; 
  
    for (let i = firstFriday; i <= monthDays; i += 7) {
      const date = new Date();
      date.setDate(i);
      const dayOfWeek = daysOfWeek[date.getDay()];
      console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    }
  }
  
  printReportReminders();
  