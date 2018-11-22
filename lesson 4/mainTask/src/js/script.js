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
    savings: true,
    //Задать функцию chooseExpenses (из видеоурока)
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    /* 1. Оформить расчет дневного бюджета и вывод на экран 
        этого значения как одну функцию(detectDayBudget) */

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        return alert('Ваш бюджет на день ' + appData.moneyPerDay + ' рублей.');
    },
    /* 2. Оформить блок кода с расчетом уровня достатка 
        как отдельную функцию (detectLevel) */

    detectLevel: function() {
        var sText;
        if (appData.moneyPerDay < 100) {
            sText = "Минимальный доход";
        } else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 300) {
            sText = "Средний доход";
        } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
            sText = "Хороший доход";
        }
        return alert(sText);
    },
    //Задать функцию checkSavings (из видеоурока)
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
        }
        return alert("Доход с накоплений " + appData.monthIncome);
    },
    /* 3. Создать функцию для определения 
        необязательных расходов (chooseOptExpenses) */
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let answerQuestion = prompt('Статья необязательных расходов?');
            if (answerQuestion != null && answerQuestion != '') {
                appData.optionalExpenses[i] = answerQuestion;
            } else {
                i--;
            }
        }
    },
    //Задать функцию chooseIncome (из видеоурока)
    chooseIncome: function() {

        //1) Написать проверку, что пользователь может:
        //  · Ввести в дополнительных доходах (chooseIncome) только строку
        //  · Не может оставить строку пустой
        //  · Не может отменить вопрос 

        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (items == isNaN || items == null || items == '') {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(',');
        appData.income.push(prompt('Может что то ещё?'));
        appData.income.sort();

        // 2) При помощи метода перебора массива(forEach) вывести на экран сообщение 
        // "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
        // · Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

        appData.income.forEach(function(item, i) {
            let b = i;
            ++b;
            alert('Способы доп заработка: ' + b + ' ' + appData.income[i]);
        });
    }

};

for (const key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
}



console.log(Object.keys(appData));