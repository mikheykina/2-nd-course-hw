function getSeason() {
  let month = +prompt('Выберите месяц:');
if (month < 1 || month > 12) {
  alert('Неправильный параметр');
} else if (month >= 3 && month <= 5) {
  alert('Весна');
} else if (month >= 6 && month <= 8) {
  alert('Лето');
} else if (month >= 9 && month <= 11) {
  alert('Осень');
} else {
  alert('Зима');
}

}


function getWords() {
  let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

words = words.sort(() => Math.random() - 0.5);
alert(words);

let firstElement = prompt('Чему равнялся первый элемент массива?');
let lastElement = prompt('Чему равнялся последний элемент массива?');

if (firstElement === words[0] && lastElement === words[words.length - 1]) {
  alert('Поздравляю, вы угадали оба элемента!');
} else if (firstElement === words[0] || lastElement === words[words.length - 1]) {
  alert('Вы были близки к победе!');
} else {
  alert('Вы ответили неверно.');
}
}