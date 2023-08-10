//Section 4. Основы

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
// const saleryPerhour = 80
// const daysPerWeek = 5
// const hoursPerday = 5
// const offerwork = 40

// const hoursPerWeek = daysPerWeek * hoursPerday
// console.log(hoursPerWeek)

// const deadLine = (11 - 2) *5

// console.log(deadLine)

// console.log(deadLine > offerwork)
// console.log(offerwork * saleryPerhour)

// 18. Шаблонные строки

// const projectName = 'website'
// const projectPrice = 2000;
// const autor = 'Stepan Bandera'
// const templ1 = `${autor} has ordered ${projectName} for $${projectPrice}`
// const templ2 = autor + ' has ordered ' + projectName + ' for $' + projectPrice
// const templ3 = 'Project name: ' + projectName + '\nProject price: ' + projectPrice + '\nProject author: ' + autor
// const templ4 = `Project name: ${projectName}
// Project price: ${projectPrice}
// Project author: ${autor}`
// console.log(templ1)
// console.log(templ2)
// console.log(templ3)
// console.log(templ4)

// 19. Преобразование типов

// const age = '10';
// console.log(age + 5);
// console.log(Number(age) + 5);
// console.log(age - 3);

// const userName = 'Stepan';

// console.log(userName + 5)
// console.log(Number(userName) + 5)
// console.log(typeof NaN)

// console.log(1 + 4);
// console.log(String(1) + 4);

// console.log(Boolean(1))
// console.log(Boolean(0))
// console.log(Boolean('qwe'))
// console.log(Boolean(''))

// const a = 2 + '10';
// console.log(a);
// console.log(a - 10);

//20. False из других типов

// console.log(Boolean(1))
// console.log(Boolean(0))
// console.log(Boolean('qwe'))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(null))

// let a;
// console.log(Boolean(a))
// console.log(typeof Boolean)

//Section 5: Управление потоками

//21. If else

// const balance = 40
// const price = 70
// const priceMini = 50
// const canBuy = balance >= price
// if (balance >= price){
//     console.log('You can buy this product')
// }

// else if (balance >= priceMini){
//     console.log('You can buy MINI product')
// }

// else {
//     console.log('You cannot by this product')
// }

//22. Упражнение - Размещение депозита

// const depositUSD = 10000;
// const annualRate = 0.07;
// const  duration = 24;
// const sum = depositUSD * (1 + annualRate / 12) ** 24;
// console.log(sum)
// const houseCost = 13500

// if (sum > houseCost) {
//     console.log(`Yes, can buy. Residue will be $${sum - houseCost}`)
// }

// else {
//     console.log('No, cannot buy')
// }

//23. Операторы равенства

// const q = '7';

// if (q === 7) {

//     console.log('угадал строго')
// }

// if (q == 7) {
//     console.log('угалдал не строго')
// }

// 24. Switch

// const userRole = 'Admin'

// if (userRole === 'Admin') {
//     console.log('Current user: Admin')
// }
// else if (userRole === 'Moderator') {
//     console.log('Current user: Moderator')
// }
// else if (userRole === 'Staff') {
//     console.log('Current user: Staff')
// }
// else {
//     console.log('not logged-in user')
// }

// switch (userRole) {
//     case "Admin":
//         console.log('Current user: Admin')
//         break;
//     case "Moderator":
//         console.log('Current user: Moderator')
//         break;
//     case 'Staff':
//         console.log('Current user: Staff')
//         break;
//     default:
//         console.log('not logged-in user');
// }

// switch (userRole) {
//     case "Admin":    
//     case "Moderator":
//         console.log('Admin role')
//         break;
//     case 'Staff':
//         console.log('None admin role')
//         break;
//     default:
//         console.log('not logged-in user');
// }

// const num = 1;

// switch (true) {
//     case num > 0:
//         console.log('Num is Positive value');
//         break;
//     case num < 0:
//         console.log('Num is Negative value');
//         break;
//     default:
//         console.log('Num is Null');
// }

// 25. Тернарные операторы

// const budgetUSD = 10000;
// const vwPriceUSD = 25000;
// const bmwPriceUSD = 35000;
// let message = `${budgetUSD >= bmwPriceUSD ? "BMW":budgetUSD >= vwPriceUSD ? "VW" : 'Not affordable'}`
// console.log(`My next car is ${message}`)

// // if (budgetUSD >= bmwPriceUSD ) {
// //     message =  'BMW'
// // }
// // else if(budgetUSD >= vwPriceUSD) {
// //     message =  'VW'
// // }
// // else {
// //     message = "Not affordable"
// // }

// // console.log(` ${budgetUSD >= bmwPriceUSD ? message:message}`)

//Stop
//26. Упражнение - Проверка робота

// const captcha = (prompt('How much will be 7 + 15 or 7 - 15'))

// switch (true) {
//     case captcha == 22:
//     case captcha == -8:
//     case captcha == 'I am not a robot':
//         console.log('You are not a robot')
//         break;
//     default:
//         console.log('You are robot')
        
// }

// 27. Булева логика
//28. Логические операторы

// const isAdmin = true;
// const canWrite = true;

// console.log(`Is admin: ${isAdmin && canWrite}`)
// console.log(`Can write: ${isAdmin || canWrite}`)
// console.log(`Can't write: ${!canWrite}`)

// const isEdited = true;
// const superAdmin = true;

// console.log(`Can edit this file: ${isAdmin && canWrite && (!isEdited || superAdmin)}`)


// a = 6;

// if (a > 0 && a <= 5) {
//     console.log(`${a} is in 0-5 range`)
// } else {
//     console.log(`${a} is out of 0-5 range`)
// }

//29. Операторы с другими типами

// console.log('Stepan' || 'Bandera');
// console.log(false || 'Bandera');
// console.log('Stepan' || false);
// console.log(false || false);

// console.log('Stepan' && 'Bandera');
// console.log(false && 'Bandera');
// console.log('Stepan' && false);
// console.log(false && false);

// let a = 'Peter';

// const username = a || 'Stepan'
// console.log(username)

// let isAdmin = false;
// const file = isAdmin && 'mp4'
// console.log(file)

// 29. Операторы с другими типами

// let age = null;
// console.log(age || 18);
// console.log(age ?? 18);

// 31. Упражнение - Проверка прав

// let balance  = 1008
// let bonusBalance = 108

// let isBanned = false;
// let isExist = true;
// let isSelling = true;

// if (balance > 1000 || bonusBalance > 100) {
//     if (!isBanned && !isExist && isSelling) {
//         console.log('Can buy: Yes')
//     } else {
//         console.log('Can buy: No')
// }
// } else {
//     console.log('Can buy: No')
// }

// const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;

// console.log(`Can buy: ${canBuy ? 'Yes' : 'No'}`)

// console.log((true && 'd') ?? '')

// Section 7. Функции
// 32. Введение в функции

// function logName() {
//     console.log('My name is Illia')
// }

// logName();

// const a = logName();

// console.log(a)

// function MyName(firstname, lastname) {
//     console.log(`My name is ${firstname} ${lastname}`);

// }

// MyName('Illia', 'Kolosov')
// MyName('Illia', 'Kolosov')
// MyName('Illia', 'Kolosov')
// MyName('Illia', 'Kolosov')

// const depositUSD = 10000;
// const annualRate = 0.07;
// const  duration = 24;
// const sum = depositUSD * (1 + annualRate / 12) ** 24;
// console.log(sum)
// // const houseCost = 13500

// function DepositSum(depositUSD, annualRate, duration) {
    
//     sum = depositUSD * (1 + annualRate / 12) ** duration;
//     return sum
// }
// function DepositSum(depositUSD, annualRate, duration) {
//     return depositUSD * (1 + annualRate / 12) ** duration;
    
// }

// const example1  = DepositSum(10000, 0.12, 24)

// console.log(example1);
// console.log(DepositSum(10000, 0.12, 24));

//33. Анонимные функции

// function powerOftwo(num) {
//     return num * num;
// }

// console.log(powerOftwo(5));

// const poft = function (num) {
//     return num * num;
// }

// console.log(poft(7));

//34. Стрелочные функции

// const poft = (num) => num * num;
// console.log(poft(5));

// const poft = (num) => {
//     console.log(num);
//     return num * num;
// }
// console.log(poft(6))

// Упражнение - Упрощение функции

// function toPower(num, power) {
//     const res = num ** power;
//     return res;
// }
// console.log(toPower(2, 2))

// const tpres = (num, power) => num ** power;
// console.log(tpres(2, 2))

//36. Параметры по умолчанию

// function toPower(num, power) {
//     const power2 = power ?? 3;
//     const res = num ** power2;
//     return res;
// }

// console.log(toPower(2, 3))
// console.log(toPower())

// // function toPower(num, power) {
// //     power = power ?? 3;
// //     const res = num ** power;
// //     return res;
// // }

// function toPower(num=2, power=3) {
//         power = power ?? 3;
//         const res = num ** power;
//         return res;
//     }

//37. Условия в функциях

// function userAge(age) {
//     if (age < 18) {
//         return false
//     }
//     return true
// }

// const userAge = prompt(`Enter your age: `)
// console.log(canAccess(userAge))

// const userAge = age => age > 18;
// console.log(userAge(19))

// 38. Функции в функциях

// const KG_IN_USD = 0.5;
// const KM_IN_USD = 0.3;

// function calculateWeight(present) {
//     return present * KG_IN_USD
// }

// function calculateDist(distance) {
//     return distance * KM_IN_USD
// }

// function calculateDelivery(present1, present2, distance) {
//     price1 = calculateWeight(present1)
//     price2 = calculateWeight(present2)
//     distPrice = calculateDist(distance)
//     return price1 + price2 + distPrice
// }
// console.log(calculateDelivery(4, 5, 25))

// 39. Упражнение - Кредит на MacBook

// function calculateCredit (age, job = false) {
//     switch (true) {
//         case age >= 24 && job:
//             return 500
//         case age >= 24:
//             return 100
//         default:
//             return 0
            
//     }
// }

// function canBuy (itemPrice, age, deposit, job = false) {
//     const creditMoney = calculateCredit(age, job)
//     return  itemPrice <= creditMoney + deposit

//     // switch (true) {
//     //     case canPurchase >= itemPrice:
//     //         return true;
//     //     default:
//     //         return false       
//     // }
// }

// console.log(canBuy(2000, 25, 1500, true))

// Массивы

// 40. Знакомство с массивами
