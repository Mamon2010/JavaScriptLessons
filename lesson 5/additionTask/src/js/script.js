// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
let date = new Date(),
    time = ('0' + date.toLocaleTimeString("ru-RU")).slice(-8);
document.querySelector('.dateNow').innerHTML = `${time} ${date.toLocaleDateString("ru-RU")}`;
// console.log(`${time} ${date.toLocaleDateString("ru-RU")}`);

// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры(из 1.6 .2018 сделает 01.06 .2018)
// date1 = date1.toLocaleDateString("ru-RU");
date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
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
let day = new Date();

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
let today = getdayInRussian(day.getDay());
document.querySelector('.today').innerHTML = `Сегодня: ${today}`;


// 4) Напишите функцию, которая выводит на страницу разницу 
// между двумя датами в количестве дней

let result = document.querySelector('.result'),
    btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let input1 = document.querySelector('.input1').valueAsNumber,
        input2 = document.querySelector('.input2').valueAsNumber;
    getDayDiff(input1, input2);
});


function getDayDiff(input1, input2) {
    if (input1 > input2) {
        result.value = `разница дней: ${Math.floor(input1 - input2) / (1000 * 60 * 60 * 24)}`;
    } else {
        alert('Не верный диапазон рассчитываемых дат');
    }
}