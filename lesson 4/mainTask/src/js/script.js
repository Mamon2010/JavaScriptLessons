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
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        return alert('Ваш бюджет на день ' + appData.moneyPerDay + ' рублей.');
    },
    detectLevel: function(){
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
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save / 100 / 12 * percent;
        }
        return alert("Доход с накоплений " + appData.monthIncome);
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++) {
            let answerQuestion = prompt('Статья необязательных расходов?');
            if (answerQuestion != null && answerQuestion != '') {
                appData.optionalExpenses[i] = answerQuestion;
            } else {
                i--;
            }
        }
    },
    chooseIncome:function(){
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что то ещё?'));
        appData.income.sort();
    }  

};

//Задать функцию chooseExpenses (из видеоурока)

/* 1. Оформить расчет дневного бюджета и вывод на экран 
этого значения как одну функцию(detectDayBudget) */


/* 2. Оформить блок кода с расчетом уровня достатка 
как отдельную функцию (detectLevel) */

//Задать функцию checkSavings (из видеоурока)

/* 3. Создать функцию для определения 
необязательных расходов (chooseOptExpenses) */
console.log(appData);