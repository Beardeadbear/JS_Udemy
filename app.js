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

const q = '7';

if (q === 7) {

    console.log('угадал строго')
}

if (q == 7) {
    console.log('угалдал не строго')
}
