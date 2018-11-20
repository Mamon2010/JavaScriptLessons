// 1) У вас есть str = “урок - 3 - был слишком легким”
let str = '“урок - 3 - был слишком легким”';
str = str.substring(0, 1) + str.charAt(1).toUpperCase() + str.substring(2);
console.log(str);

// 2) Теперь замените все“ - ”на пробелы
// str = str.slice(1, -1)
str = str.replace('“', ' ').replace('”', '');
console.log(str);

/* 3) Из получившейся строки вырезать слово“ легким”, в
этом же слове заменить 2 последние буквы на букву“ о” */

str = str.substr(str.indexOf('легким', 1), 6).replace('им', 'о');
console.log(str);

// 4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]

let arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        sum += Math.pow(arr[i], 3);
    }
}

console.log(Math.sqrt(sum));

// 5) Создайте функцию, которая принимает 1 аргумент(название произвольное)
function dopFive(x) {
    if (typeof(x) == 'string') {
        alert('Аргументом указана строка');
        console.log('Аргументом указана строка');
        console.log(x.trim().slice(0, 50) + '...');
    }
}

dopFive('    Я иду опять домой лялвлваллалалалаллллллллллллллллллллллллллллллалалалалалала    ');