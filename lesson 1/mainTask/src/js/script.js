'use strict';

//Пункт 2. Создали 2 переменные
let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


//Пункт 4. Задать пользователю по 2 раза вопросы

let firstQuestion1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestion1 = prompt("Во сколько обойдется?", ""),
    firstQuestion2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestion2 = prompt("Во сколько обойдется?", "");
var expenses = {};
expenses[firstQuestion1] = secondQuestion1;
expenses[firstQuestion2] = secondQuestion2;


//Пункт 3. Создали объект
let appData = {
    budjet: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: {},
    income: [],
    savings: false
};

let oneDayBudjet = appData.budjet / 30;

alert('Ваш бюджет на день ' + oneDayBudjet + ' рублей');
console.log(appData);