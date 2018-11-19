'use strict';

let money, time;

function start() {
    //Пункт 2. Создали 2 переменные
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (money == "" || money == null || isNaN(money)) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
}

start();

//Пункт 3. Создали объект
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

//Пункт 4. Задать пользователю по 2 раза вопросы переписанный 
// Способ 1

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

// Способ 2

/* let i = 0;
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;

    } else {
        i--;
    }
}
while (i < 2); */

// Способ 3

/* while (i < 2) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;  
    } else {
        i--;
    }
}
 */

// Определение дохода пользователя и вывод сообщения о нем на экран
appData.moneyPerDay = (appData.budjet / 30).toFixed();


var sText;
if (appData.moneyPerDay < 100) {
    sText = "Минимальный доход";
} else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 300) {
    sText = "Средний доход";
} else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
    sText = "Хороший доход";
}
alert('Ваш бюджет на день ' + appData.moneyPerDay + ' рублей.' + "<br>Это " + sText);

console.log(appData);


function checkSavings() {
    if(appData.savings==true){
        let save=+prompt('Какова сумма накоплений?'),
        percent=+prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход с накоплений " + appData.monthIncome);
    }
}
checkSavings();
