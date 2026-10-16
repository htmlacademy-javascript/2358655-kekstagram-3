// //Функция для проверки длины строки
function verifyLongString(string, number) {
  //console.log(string, number);
  if (string.length <= number) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

console.log('Задание 1 Функция для проверки длины строки');
verifyLongString('проверяемая строка', 20); // true
verifyLongString('проверяемая строка', 18); // true
verifyLongString('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом

function isPalindromeNormalized(stringPalidrom) {
  const normalized = stringPalidrom
    .toLowerCase()
    .replace(/[^a-za-яё0-9]/g, ''); // оставляем только буквы и цифры

  const reversed = normalized.split('').reverse().join('');
  normalized === reversed;
  if (normalized === reversed) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
console.log("Задание 2 Функция для проверки, является ли строка палиндромом")
// Строка является палиндромом
isPalindromeNormalized('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindromeNormalized('ДовОд'); // true
// Это не палиндром
isPalindromeNormalized('Кекс'); // false

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
function returnNumber(StringNumber) {
  // Извлекаем все цифры из строки
  const digits = StringNumber.replace(/[^0-9]/g, '');

  // Если цифр нет — возвращаем NaN
  if (digits === '') {
    console.log(NaN);
  }
  else {
    console.log(parseInt(digits));
  }
}
console.log("Задание 3 Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа");
returnNumber('2023 год');            // 2023
returnNumber('ECMAScript 2022');     // 2022
returnNumber('1 кефир, 0.5 батона'); // 105
returnNumber('агент 007');           // 7
returnNumber('а я томат');           // NaN
