'use strict';

let money, time;

//Задать функцию start (из видеоурока)
function start() {
    //Пункт 2. Создали 2 переменные
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (money == "" || money == null || isNaN(money)) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

//Задать функцию chooseExpenses (из видеоурока)
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

/* 1. Оформить расчет дневного бюджета и вывод на экран 
этого значения как одну функцию(detectDayBudget) */
function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    return alert('Ваш бюджет на день ' + appData.moneyPerDay + ' рублей.');
}

detectDayBudget();

/* 2. Оформить блок кода с расчетом уровня достатка 
как отдельную функцию (detectLevel) */
function detectLevel() {
    var sText;
    if (appData.moneyPerDay < 100) {
        sText = "Минимальный доход";
    } else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 300) {
        sText = "Средний доход";
    } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
        sText = "Хороший доход";
    }
    return alert(sText);
}

detectLevel();

//Задать функцию checkSavings (из видеоурока)
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
    }
    return alert("Доход с накоплений " + appData.monthIncome);
}
checkSavings();

/* 3. Создать функцию для определения 
необязательных расходов (chooseOptExpenses) */
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let answerQuestion = prompt('Статья необязательных расходов?');
        if (answerQuestion != null && answerQuestion != '') {
            appData.optionalExpenses[i] = answerQuestion;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();
console.log(appData);