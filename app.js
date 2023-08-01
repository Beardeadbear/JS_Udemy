// 12. Переменные и значения
// let a = 1;
// console.log(a);
// a = 'Test';
// console.log(a);

//  13. Арифметические операторы
// const  width = 10;
// const height = 5;
// const space = width * height;
// const newWidth = width - 4;
// const newWidth2 = width + 4;
// const division = newWidth2 / newWidth;
// const volume = 2 * 2 * 2;
// const volume2 = 2 ** 3;

// console.log(volume2);

// const firstName = 'Stepan';
// const lastName = 'Bandera';
// console.log(firstName + ' ' + lastName + ', ' + 9000);

//14. Операторы присваивания и сравнения
// Присваивание
// let age = 18 + 2;
// age += 5; // age = age + 5
// age *= 2; // age = age * 2
// age /= 2;
// age ++ // age = age + 1
// age -- //age = age - 1
// console.log('I am ' + age + ' years old');
// // Сравнение:
// let Stepan = 25;
// console.log(Stepan < age);
// console.log(Stepan <= age);
// console.log(Stepan > age);
// console.log(Stepan >= age);
// console.log(Stepan == age);

// 15. Порядок операторов
// const isSuited = 100 - 10 > 90 - 5;
// console.log(isSuited);

// // isSuited = 100 -(12) 10 >(10) 90 -(12) 5;

// const a = (5 + 5) / 2;
// console.log(a);

// let b;
// let c;
// c = b = 100 + 50;
// console.log(c);
// console.log(b);

//16. Типы данных
// let a = 5;
// let b = 5.7;
// console.log(typeof a);
// console.log(typeof b);
// a = 'Stepan'
// console.log(typeof a);
// let isAdmin = true;
// console.log(typeof isAdmin);
// isAdmin = 40 > 30;
// console.log(typeof isAdmin);
// let c;
// console.log(typeof c);
// c = 5;
// console.log(typeof c);
// let d = null;
// console.log(typeof (d == null));

//17. Упражнение - Расчёт проекта
const saleryPerhour = 80
const daysPerWeek = 5
const hoursPerday = 5
const offerwork = 40

const hoursPerWeek = daysPerWeek * hoursPerday
console.log(hoursPerWeek)

const deadLine = (11 - 2) *5

console.log(deadLine)

console.log(deadLine > offerwork)
console.log(offerwork * saleryPerhour)