let num = month
Number(prompt("Введите число"));

function getSeason(month) {
    if (num === 12 || num === 1 || num === 2) {
      return "Зима";
    } else if (num >= 3 && num <= 5) {
      return "Весна";
    } else if (num >= 6 && num <= 8) {
      return "Лето";
    } else if (num >= 9 && num <= 11) {
      return "Осень";
    } else {
      return "Неверный номер месяца";
    }
  }
console.log(getSeason(month));