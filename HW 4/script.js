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
function printReportReminders() {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const firstFriday = 5; 
    const monthDays = 31; 
  
    for (let i = firstFriday; i <= monthDays; i += 7) {
      const date = new Date();
      date.setDate(i);
      const dayOfWeek = daysOfWeek[date.getDay()];
      console.log("Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.");
    }
  }
  
  printReportReminders();
  