function display(message) {
    document.write(message + '<br \/>');
}

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

// const userRole1 = 'Admin';
// const userRole2 = 'Manager';
// const userRole3 = 'User'

// const userRoles = ['Admin', 'Manager', 'User']

// console.log(userRoles)
// console.log(userRoles[0])
// console.log(userRoles[1])
// console.log(userRoles[2])
// console.log(userRoles.length)
// console.log(userRoles[userRoles.length - 1])

// console.log(userRoles.at(0))
// console.log(userRoles.at(-1))

// const usersAge = [2057 - 2023, 40 - '6', 10>0 ? 10:0]

// console.log(usersAge)


// const userNames = new Array('Stepan', 'Illia', 'Joe');
// console.log(userNames)

//41. Управление элементами массива

// const userRoles = ['Admin', 'Manager', 'User']
// console.log(userRoles.length)
// console.log(userRoles)

// userRoles[3] = 'SuperAdmin'

// console.log(userRoles.length)
// console.log(userRoles)

// userRoles.push('Moderator')
// userRoles.unshift('Exibitor')
// console.log(userRoles)
// const el1 = userRoles.pop()
// console.log(el1)
// const el2 = userRoles.shift()

// console.log(el2)
// console.log(userRoles)

// 42. Поиск элемента


// const userRoles = ['Admin', 'Manager', 'User']

// const indOf = userRoles.indexOf('Admin')
// console.log(indOf)

// const indOf2 = userRoles.indexOf('SupoerAdmin')
// console.log(indOf2)

// // if (userRoles.indexOf('User') >= 0) {
// //     console.log('You have access')
// // } else {
// //     console.log('You have no access')
// // }

// console.log(userRoles.includes('Admin'))


// // if (userRoles.includes('Admin')) {
// //     console.log('You have  access')
// // } else {
// //     console.log('You have no access')
// // }

// display(userRoles)

// function display(message) {
//     document.write(message + '<br \/>');
// }

// switch (true) {
//     case userRoles.includes('User'):
//         display('You have access')
//         break
//     default:
//         display('You have no access')
// }

// 43. Slice, splice, concat, reverse
// display(userRoles)
// display(userRoles.length)

// const userRoles = ['Admin', 'Manager', 'User', 'SuperAdmin']

// // console.log(userRoles)

// // const res = userRoles.slice(1, 4)
// // console.log(res)

// // const res = userRoles.splice(-1)
// // console.log(userRoles)
// // console.log(res)
// console.log(userRoles)

// const res1 = userRoles.reverse()
// console.log(res1)

// const newRoles = ['Devops', 'QA']

// const res3 = userRoles.concat(newRoles)
// console.log(res3)

// 44. Из строки в массив и обратно

// const userRoles = ['Admin', 'Manager', 'User', 'SuperAdmin']

// const url = 'auth/users/user_role'

// const res = url.split('/')

// console.log(res)
// console.log(userRoles.join(' '))

// Упражнение - Обновление списка задач

// const tasks = ['Task 1']
// console.log(tasks)

// function Add(task) {
//     tasks.push(task);
// }

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//          return;
//      } tasks.splice(index, 1);
    
// }

// function Priority(task) {
//     const index = tasks.indexOf(task);
//     console.log(index)
//     const oldTask = tasks[index];
//     if (index === -1) {
//         return;
//     } else {
//         tasks.splice(index, 1);
//         tasks.unshift(oldTask); 
//     }
// }

// Add('Task 2')
// Add('Task 3')
// Remove('Task 2')
// Priority('Task 2')



// //console.log(tasks.length)
// console.log(tasks)

//46. Принцип DRY

// const tasks = []
// console.log(tasks)

// function Add(task) {
//     tasks.push(task);
// }

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//          return;
//      } return tasks.splice(index, 1);
    
// }

// function Priority(task) {
//     const result = Remove(task);
//     if (result) {
//         tasks.unshift(result[0]); 
//     }
    
// }

// Add('Task 1')
// Add('Task 2')
// Add('Task 3')
// console.log(tasks)

// Remove('Task 6')
// console.log(tasks)

// Priority('Task 6')
// console.log(tasks)

//console.log(tasks.length)

// 47. Деструктуризация

// const userData = ['Stepan', 25, 'Kyiv'];
// console.log(userData)

// const userName = userData[0]
// const userAge = userData[1]
// const userLocation = userData[2]

// console.log(userName, userAge, userLocation)

// function getData() {
//     return ['Stepan', 25, 'Kyiv']
// }

// // const userName2 = getData()[0]
// // const userAge2 = getData()[1]
// // const userLocation2 = getData()[2]

// const [userName2,_, userLocation2] = userData;

// console.log(userName2, userLocation2)

//48. Rest оператор

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const [one, two, three, ...rest] = data
// console.log(one, two, three)
// console.log(rest)


//49. Упражнение - Функция разбора URL

// const myUrl = 'https://www.w3schools.com/js/js_syntax.asp'

// function splitUrl (url) {

//     if (url !== 'http') {
//         return;
//     } else {
//         const res = url.split('/');
//         console.log(res)
//         const protocol = res[0]
//         console.log(res[0])
//     }
    

// }

// 49. Упражнение - Функция разбора URL

// // const myUrl = 'https://www.w3schools.com/js/js_syntax.asp';

// // function splitUrl(url) {
// //     const protocolIndex = url.indexOf('://');
// //     if (protocolIndex !== -1) {
// //         const protocol = url.substring(0, protocolIndex);
// //         const path = url.substring(protocolIndex + 3); // +3 to skip the '://'
// //         const pathParts = path.split('/');
// //         const [domainName, ...urlPath] = pathParts;

// //         console.log('Protocol:', protocol);
// //         console.log('Domain name:', domainName);
// //         console.log('Path:', urlPath.join('/'));

// //     } else {
// //         console.log('Invalid URL format');
// //     }
// // }

// // splitUrl(myUrl);



// const myUrl = 'https://www.w3schools.com/js/js_syntax.asp';

// function splitUrl(url) {
//     const protocolIndex = url.indexOf('http');
//     if (protocolIndex !== -1) {
//         const [protocol, _,host, ...path] = url.split('/')

//         console.log(`Protocol: ${protocol.split(':')[0]}`);
//         console.log(`Domain: ${host}`);
//         console.log(`Path: /${path.join('/')}`);

//     } else {
//         console.log('Invalid URL format');
//     }
// }

// splitUrl(myUrl);


// 9. Циклы
// 50. Цикл for

// for (let i = 0; i < 10; i++) {

//     console.log(i)
// }

// 
// 51. Break и continue

// const tasks = ['Task 1', 'Task 2', 'Task 3']

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Task 2') {
//         continue;
//     }
//     const element = tasks[i];
//     console.log(element)
    
// }

// console.log('-----')

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Task 2') {
//         break;
//     }
//     const element = tasks[i];
//     console.log(element)
    
// }

// 52. Упражнение - Цикл в обратном порядке
// const arr = ['!', 'JS', 'love', 'I'];
// const newArray = []
// for (let i = arr.length -1; i >= 0; i--) {

//     newArray.push(arr[i])

// }
// console.log(newArray.join(' '));

// 53. Цикл в цикле

// const elem = [[1, 'Task 1'], [2, 'Task 2']]

// for (let i =0; i < elem.length; i++) {
//     for (let j = 0; j < elem[i].length; j++) {
//         console.log(elem[i][j])
//     }
// }

// 54. Цикл while

// for (let i = 0; i < 5; i++) {
//     console.log(i);
    
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++
// }

// let arr = [1, 2, 3, 6, 9, 7]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 6) {
//         break;
//     }
//     console.log(arr[i]);
// } 

// let i = 0

// while (arr[i] <= 6 && i < arr.length ) {
//     console.log(arr[i])
//     i++;
// }

// let j = 0
// do {
//     console.log(j)
//     j++

// } while (j < 5)

// 55. Циклы for of и for in

// let arr = [1, 2, 3, 6, 9, 7]

// // for (let i = 0; i < arr.length; i++) {

// //     console.log(arr[i]);

//     // }

// for (let elem of arr) {
//     console.log(elem);
// }

// for (let index in arr) {
//     console.log(index);

// }

// 56. Упражнение - Расчёт итогового баланса


// const operations = [1000, -700, 300, -500, 10000];
// const startBalance = 100;

// function getbalance(arrayOfOperations, initialBalance) {
//     let balance  = initialBalance;
//     for (const element of arrayOfOperations) {
//         balance += element;
//      }
//      console.log(balance);
// } 

// getbalance(operations, startBalance);

// function checkOperations(arrayOfOperations, initialBalance) {
//     let balance  = initialBalance;
//     let isTrue = true;
//     for (const element of arrayOfOperations) {
//         balance += element;
//         if (balance < 0) {
//             isTrue = false;
//             break;
//         }
//      }
//      console.log(isTrue);
// } 

// checkOperations(operations, startBalance);

// function avarageOperations(arrayOfOperations) {
//     let possitiveCount = 0;
//     let positiveSum = 0;
//     let negativeCount = 0;
//     let negativeSum = 0;

//     for (const element of arrayOfOperations) {
//         if (element > 0) {
//             possitiveCount ++;
//             positiveSum += element
//         }
//         if (element < 0) {
//             negativeCount ++;
//             negativeSum += element 
//         }  
//     } return [positiveSum/possitiveCount, negativeSum / negativeCount]
// }

// console.log(avarageOperations(operations))

// Функции высшего порядка

//58. Callback

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function power(a, b) {
//     return a ** b;
// }

// // высший порядко

// function calculate(a, b, fn) {

//     console.log(fn.name);
//     const res = fn(a, b)
//     return res;
// } 

// let  res = calculate(3, 5, add);
// console.log(res);

// res = calculate(3, 5, subtract);
// console.log(res);

// res = calculate(3, 5, power);
// console.log(res);

// 59. Возврат функции

// function power(pow) {

//     return function (num) {
//         return num ** pow;
//     }
// }

// const powerOfTwo = power(2);

// console.log(powerOfTwo(5))
// console.log(powerOfTwo(10))

// const powerOfThree = power(3);

// console.log(powerOfThree(5))
// console.log(powerOfThree(10))

// console.log(power(2)(5));

// 60. Упражнение - Стрелочные функции

// const powerOf = (pow) => num => num ** pow;
// console.log(powerOf(2)(5));

//61. forEach

// const score = [5, 10, 0, 15]

// // for (el of score) {
// //     console.log('Round: ' + el)
// // }

// // for (const [i, el] of score.entries()) {
// //     console.log(`Round ${i+1}: ${el}`)
// // }

// score.forEach((el, i) => {
//     console.log(`Round ${i+1}: ${el}`)
// })

// 62. Map

// const score = [5, 10, 0, 15]

// score.forEach((scoreEl, scoreIndx) => {
//     console.log(`Round ${scoreIndx+1}: ${scoreEl}`)
// })

// const transactionsUSD = [10, -7, 50, -50, 100];

// const transactionUAH = transactionsUSD.map((transaction, i) => {

//     return transaction * 37;
// })

// console.log(transactionsUSD)
// console.log(transactionUAH)

//63. filter

// const operations = [10, -7, 50, -50, 100];

// const positiveUAHOperations = operations
// .filter(operation => {
//     return operation > 0;
// })
// .map(operation => operation * 37)


// console.log(positiveUAHOperations)

// 64. Упражнение - вывод изменений цен

// const prices = [[100, 200], [120, 100], [200, 350]];

// let result = prices.map(product => product[1] - product[0]).filter(price => price > 0)

// console.log(result)

// 65. reduce

// const operations = [100, -20, 7, -30, 50]

// // let balance = 0

// // for (let operation of operations) {
// //     balance += operation
// // }

// // console.log(balance)

// const finalBalance = operations.reduce((acc, operation) => {
//     return acc += operation
// }, 0)

// console.log(finalBalance)

// const operations = [100, -20, 7, -30, 50]



// const minElement = operations.reduce((acc, operation) => {
//     if (operation > acc) {
//         return acc
//     } else {
//         return operation
//     }
// }, 0)

// console.log(minElement)


// 66. Упражнение - среднее значение

// const arr = [1, 4, 4, 10];

// const avg = arr.reduce((acc, el, i) => {
//     if (i != arr.length -1) {
//         return acc + el;
//     } else {
//         return (acc + el) / arr.length
//     }
// }, 0);

// console.log(avg)

// 67. find и findIndex

// const arr = [1, 4, 4, 10];

// // let elGT5;

// // for (el of arr) {
// //     if (el > 5) {
// //         elGT5 = el;
// //         break;
// //     }
// // } 

// // console.log(elGT5)

// elGT5 = arr.find(el => el > 5);
// console.log(elGT5)

// indexGT5 = arr.findIndex(el => el > 5);
// console.log(indexGT5)

// 68. Упражнение - реализация some

// const arr = [2, 4, 4, 10];

// function some (array, elem) {

//     const res = array.find(el => el === elem);
//     return res == undefined ? false : true;
    
// }

// console.log(some(arr, 2));

// console.log(arr.some(el => el === 2));

// 69. flat и flatMap

// const prices = [[2, 4], [5, 8], [3, 7]];

// const res = prices.flat().sort();
// const res2 = prices.map(el => el + el).flat(3);
// const res3 = prices.map(el => el + el).flat(3);

// console.log(prices)
// console.log(res)
// console.log(res3)

// 70. sort

// const users = ['Stepan', 'Ivan', 'Anna', 'Jane']
// console.log(users.sort())



// const operations = [100, 300, -450, - 300, 1500, 2345]
// const res = operations.sort();
// console.log(res)

// // < 0 a, b - сохраняем порядок
// // > 0 b, a - меняем порядок
// const res2 = operations.sort((a,b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }
// });
// console.log(res2)

// const res3 = operations.sort((a,b) => {
//     if (a < b) {
//         return 1;
//     }
//     if (a > b) {
//         return -1;
//     }
// });
// console.log(res3)

// const res4 = operations.sort((a,b) => a - b);
// console.log(res4)

// 71. Быстрое создание массивов

// const arr = [1, 2, 3, 4]

// // console.log(new Array(1,2,3,4,5));

// // const arr2 = new Array(5);
// // console.log(arr2);

// // arr2.fill(1)
// // console.log(arr2);

// // arr2.fill(2,3,5)
// // console.log(arr2);

// const arr3 = Array.from({length: 100}, (cur, i) => i + 1);

// console.log(arr3);

// Section 12: Работа со строками

// 73. Базовые методы

// const users = 'Stepan Bandera'


// console.log(users[3])
// console.log(users.charAt(3))
// console.log(users.length)
// console.log(users.indexOf('a')) // певое нахождение
// console.log(users.lastIndexOf('a')) // последнее нахождение
// console.log(users.includes('a'))

// console.log(users.slice(7, 9))

// // 74. Упражнение - выделение имени

// const FullUserName = 'Вася aka Terminator Пупкин'

// const userName = FullUserName.slice(0, FullUserName.indexOf(' '));
// console.log(userName)

// const userSurname = FullUserName.slice(FullUserName.lastIndexOf(' ', FullUserName.length))
// console.log(userName + userSurname)

// 75. Преобразование строки

// const str = 'Stepan Bandera'

// console.log(str.toLocaleLowerCase())
// console.log(str.toUpperCase())
// console.log(str.toUpperCase())
// console.log(str.replace('S', 'P'))
// console.log(str.replace(/a/g, 'e'))

// const str2 = ' Stepan Bandera \n'

// console.log(str2.trim())

// 76. Упражнение - проверка номера

// const num1 = '0633288366'
// const num2 = '+380633288366'
// const num1Error = '063328836 '
// const num2Error = '+30633288366 '
// const num3Error = '063-328-83-66'
// const num4Error = '( 063)328-83-66'

// function phoneNum (num) {
//     num = num.trim();
//     num = num.replace('+30', '+380')
//     num = num.replace('0', '+380')
//     num = num.replace('(', '')
//     num = num.replace(')', '')
//     num = num.replaceAll(' ', '')
//     num = num.replaceAll('-', '')

//     // if (num.length != 12) {
//     //     return false;
//     // }
    
//     // let onlyNumbers = true;
//     // for (const char of num) {
//     //     if (isNaN(Number(char))) {
//     //         onlyNumbers = false;
//     //         break;

//     //     }
//     // }
//     return num 
// }

// console.log(phoneNum(num1))

// 77. Строки и массивы

// const userFullName = 'Stepan Bandera Ukraine'
// console.log(userFullName)
// console.log(userFullName.split(' '))

// const [firstName, lastName, country] = userFullName.split(' ')
// console.log(`First Name: ${firstName}`)
// console.log(`Last Name: ${lastName}`)
// console.log(`Country: ${country}`)

// const arr = ['what', 'is', 'your', 'name', '?']

// console.log(arr.join(' '))

// 78. Дополнение строк

// const film = 'Bad Santa'
// const film2 = film.padStart(50, '*').padEnd(50, '*');

// console.log(film2)
// console.log(film2.repeat(2))


// const card1 = '2346 7896 4587 3446'
// const card2 = '2346 7896 4587 345'

// function hideCard (cardNum) {
//     cardNum = cardNum.trim();
//     cardNum = cardNum.replaceAll(' ', '');

//     if (cardNum.length != 16) {
//         return 'Card is invalid';
//     } 
    
//     return cardNum = cardNum.slice(-4).padStart(16, '*')
//     }

// console.log(hideCard(card1))

// Objects

// 80. Знакомство с объектами

// const userArray = ['Stepan', 'Bandera', 50]

// const user = {
//     name: 'Stepan',
//     surname: 'Bandera',
//     age: 50,
//     skills: ['JS', 'HTML', 'CSS'],
//     eduBasic: 'School #4',
//     eduPro: 'UAORT'

// };

// // 81. Обращение к элементам

// console.log(user.skills)
// console.log(user['skills'])
// const level = 'Pro'
// console.log(user['edu' + level])

// //const res = prompt('Enter object property ')
// //console.log(user[res]);

// user['country'] = 'Ukraine'
// user['city']  = 'Kyiv'

// user.age = 45
// user['age'] = 40

// user.nickname = 'KitKat'

// console.log(user.nickname)

// 82. Упражнение - сортировка пользователей


// const user = [

//     {name: "John", age: 37},
//     {name: "Jane", age: 25},
//     {name: "Anna", age: 16},
//     {name: "Dana", age: 56},
// ] 



// console.log(user.sort((a, b) => a.age - b.age ));

// 83. Упражнение - преобразование объектов

// const users = [
//     {
//         name: 'Stepan',
//         surname: 'Bandera',
//         age: 50,
//         skills: ['JS', 'CSS', 'HTML']
//     },
//     {
//         name: 'Bogdan',
//         surname: 'Khmelnitsky',
//         age: 45,
//         skills: ['PHP', 'Python'] 
//     }
// ]

// const usersData = users.map(user => {
//     return {
//         fullname: `${user.name} ${user.surname}`,
//         skillNum: user.skills.length
//     }
// })
// console.log(usersData)

// 84. Методы объектов

// const user = {
//             name: 'Stepan',
//             surname: 'Bandera',
//             age: 50,
//             getFullname: function () {
//                 return this.name + ' ' + this.surname;
//             }
//         };


// console.log(user.getFullname())

85.