// 1 завдання
// var a = 5;
// var b, c;

// b = a * 5;
// b = c = b / 2;
// console.log("значення b після обчислення b = (a * 5):", b);

// b = c = b / 2;
// console.log("значення b після обчислення  b = (c = b/2):", b);

// b = (a * 5);:  обчислюємо значення виразу a * 5 (тобто 5 * 5 = 25) та присвоюємо його змінній b.
// b = (c = b/2);: Тут ми присвоюємо змінній c значення змінної b розділене на 2,
// а потім результат цього присвоюємо змінній b. Тобто, спочатку обчислюється b/2 (25/2 = 12.5),
// а потім це значення присвоюється як c, і, остаточно, b також отримує значення 12.5.
// змінюємо дужки:
// b = (a * 5);
// b = (c = (b / 2));
// Але поряд обчислення так результат коду не зміниться

// let age = prompt("How old are you?");
// let yearOfBirth;

// age = parseInt(age);
// const currentYear = 2024;
// if (age > 0 && age <= currentYear) {
//   yearOfBirth = currentYear - age;
// }

// alert(`Year of birth: ${yearOfBirth} `);
// 3 завдання

// let temperature = prompt("Enter the temperature in Celsius");
// temperature = parseInt(temperature);

// let fahrenheit = (temperature * 9) / 5 + 32;

// alert(`fahrenheit: ${fahrenheit} `);

// let num1 = prompt("введіть перше  число ");
// let num2 = prompt("введіть друге число ");
// 4 завдання
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// if (isNaN(num1) || isNaN(num2)) {
//   alert("введіть цифрове значення");
// } else if (num2 === 0) {
//   alert("error");
// } else {
//   let result = Math.floor(num1 / num2);
//   alert(`Результат: ${result}`);
// }
// 5 завдання
// const rate = 38.1;
// let cuurensy = prompt("введіть суму в гривнях");
// if (isNaN(cuurensy)) {
//   alert("error");
// } else {
//   let result = cuurensy / rate;
//   result = result.toFixed(0);
//   alert(`Результат: ${result}`);
// }

//6 RGB

// let red ;
// do{
//     red = prompt("RED: введіть число більше 15 меньше 256", 0);
// } while (red < 16  red > 255 );
// let green ;
// do{
//     green = prompt("GREEN: введіть число більше 15 меньше 256", 0);
// } while (green < 16  green > 255 );
// let blue ;
// do{
//     blue = prompt("BLUE: введіть число більше 15 меньше 2566", 0);
// } while (blue < 16 || blue > 255 );
// let colorRGB = "#" + Math.floor(red).toString(16) + Math.floor(green).toString(16) + Math.floor(blue).toString(16);
// let colorChance = document.getElementsByClassName('color');
// colorChance[0].style.background = colorRGB;

// //7 flats

// let floors = 15;
// let porches = 3;
// let flat = 4;

// let number = prompt("Give me a number :)")

// let numberFlat = Math.ceil(number/flat);
// let floor = Math.ceil(numberFlat/floors);
// numberFlat -= (floor - 1) *  floors;

// alert("Квартира: " + number + " подъезд: " + floor + " этаж: " + numberFlat)
