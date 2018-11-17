'use strict';

/* 1) Создать переменную num со значением 33721
·Вывести в консоль произведение(умножение) цифр этого числа
 */
let num = 33721,
    arrnum = [],
    snum = num.toString(),
    multiply = 1;

for (let i = 0; i < snum.length; i++) {
    arrnum.push(+snum.charAt(i));
    multiply *= arrnum[i];
}

console.log(multiply);

/* 
2) Полученный результат возвести в степень 3, используя только 1 оператор(Math.pow не подходит)
· Вывести на экран первые 2 цифры полученного числа */
var pow = 1;
for (let i = 0; i < 3; i++) {
    pow *= multiply;
}

alert('Первые 2 цифры полученного числа равны: ' + pow.toString().substr(0, 2));