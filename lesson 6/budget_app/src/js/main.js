// ·Получить кнопку "Начать расчет" через id
let startBtn = document.querySelector('#start');

// · Получить все блоки в правой части программы через классы(которые имеют класс название - value, 
// начиная с < div class = "budget-value" > < /div> и заканчивая <div class="yearsavings-value"></div > )
let budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

// Кнопки для расчета дневного бюджета
let countBtn = document.querySelector('.count-budget-btn');

// · Получить поля(input) c обязательными расходами через класс.(class = ”expenses - item”)
let expensesItem = document.querySelectorAll('.expenses-item');
// · Получить кнопки“ Утвердить” и“ Рассчитать” через Tag, каждую в своей переменной.
let expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1];

// · Получить поля для ввода необязательных расходов(optionalexpenses - item) при помощи querySelectorAll
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

// · Получить оставшиеся поля через querySelector
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let expensesSum1 = document.getElementById('expenses_1'),
    expensesSum2 = document.getElementById('expenses_2'),
    expensesSum3 = document.getElementById('expenses_3'),
    expensesSum4 = document.getElementById('expenses_4');


//Нажимаем на кнопку Начать расчет
let money, time;
startBtn.addEventListener('click', function() {


    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц", "");

    while (money == "" || money == null || isNaN(money)) {
        money = +prompt("Ваш бюджет на месяц", "");
    }

    appData.budjet = money;
    countBtn.disabled = false;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

//Блокирование кнопки утрвердить в обязательных расходах

expensesItemBtn.disabled = true;
expensesItem.forEach(function(item) {
    item.addEventListener('input', function() {
        if (!validateSum(item.value) || !validateSum(item.value)) {
            item.value = this.value.slice(0, -1);
        }

        if (item.value == '') {
            expensesItemBtn.disabled = true;
        } else {
            expensesItemBtn.disabled = false;
        }
    });
});

function validateSum(input) {
    return /\d$/.test(input);
}

// вводим и записываем результаты ввода в блок "Введите обязательные расходы"
expensesItemBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

function validateOptionalInput(input) {
    return /[а-яА-Я]$/.test(input.value);
}
//Проверки на поле необязательных расходов
//1) Сделать так, чтобы в поля "необязательные расходы" можно было использовать только русские буквы
optionalexpensesBtn.disabled = true;
optionalexpensesItem.forEach(function(item) {
    item.addEventListener('input', function() {
        if (!validateOptionalInput(item)) {
            item.value = item.value.slice(0, -1);
        }

        if (item.value == '') {
            optionalexpensesBtn.disabled = true;
        } else {
            optionalexpensesBtn.disabled = false;
        }
    });
});

// вводим и записываем результаты ввода в блок "Введите необязательные расходы"
optionalexpensesBtn.addEventListener('click', function() {
    optionalexpensesBtn.disabled = true;
    //  При повторном нажатии на кнопку “Утвердить” - необязательные расходы не перезаписываются заново
    optionalexpensesValue.textContent = '';
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let answerQuestion = optionalexpensesItem[i].value;

        appData.optionalExpenses[i] = answerQuestion;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

// расчет дневного бюджета
countBtn.addEventListener('click', function() {
    if (appData.budjet != undefined) {
        appData.moneyPerDay = ((+appData.budjet - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный доход";
        } else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 300) {
            levelValue.textContent = "Средний доход";
        } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Хороший доход";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        countBtn.disabled = true;
    }
});

// ввод статьи возможного дохода черз запятую
chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

// Есть ли накопления?
checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

// Сумма.Процент
sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};