'use strict';

//Пункт 2. Создали 2 переменные
let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


//Пункт 4. Задать пользователю по 2 раза вопросы

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    firstAnswer = prompt("Во сколько обойдется?", ""),
    secondQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondAnswer = prompt("Во сколько обойдется?", "");
var expenses = {};
expenses[firstQuestion] = firstAnswer;
expenses[secondQuestion] = secondAnswer;


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