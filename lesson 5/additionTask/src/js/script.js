// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let date = new Date();
// document.write(date.toLocaleTimeString() + ' ' + date.toLocaleDateString())
document.write(date.toLocaleTimeString() + ' ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear());

// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры(из 1.6 .2018 сделает 01.06 .2018)
date = date.toLocaleTimeString() + ' ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
getNullInDate(date);

function getNullInDate(date) {
    let arr = [];
    arr = date.split('.');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 2) {
            arr[i] = 0 + arr[i];
        }
    }
    return console.log(arr.join('.'));
}


// 3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке(реализацию выбираете сами)
let day = new Date(),
    dayInRussian = getdayInRussian(day.getDay());
document.write('<p>' + dayInRussian);

function getdayInRussian(thisDay) {
    switch (thisDay) {
        case 1:
            thisDay = 'Понедельник';
            break;
        case 2:
            thisDay = 'Вторник';
            break;
        case 3:
            thisDay = 'Среда';
            break;
        case 4:
            thisDay = 'Четверг';
            break;
        case 5:
            thisDay = 'Пятница';
            break;
        case 6:
            thisDay = 'Суббота';
            break;
        case 7:
            thisDay = 'Воскресение';
            break;
        default:
            thisDay = '';
            break;
    }
    console.log(thisDay);
    return thisDay;
}

// 4) Напишите функцию, которая выводит на страницу разницу 
// между двумя датами в количестве дней


// a = document.querySelectorAll('.input')[0];
// b = document.querySelectorAll('.input')[1];

// console.log(a + ' ' + b);

// function getDayDiff(a, b) {
//     var diff = Math.floor(a.getTime() - b.getTime());
//     var day = 1000 * 60 * 60 * 24;

//     var days = Math.floor(diff / day);
//     return days;
// }