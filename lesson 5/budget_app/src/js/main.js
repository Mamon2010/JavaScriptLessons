// ·Получить кнопку "Начать расчет" через id
let start = document.querySelector('#start');

// · Получить все блоки в правой части программы через классы(которые имеют класс название - value, 
// начиная с < div class = "budget-value" > < /div> и заканчивая <div class="yearsavings-value"></div > )
let budgetValue = document.querySelectorAll('.budget-value'),
    daybudgetValue = document.querySelectorAll('.daybudget-value'),
    levelValue = document.querySelectorAll('.level-value'),
    expensesValue = document.querySelectorAll('.expenses-value'),
    optionalexpensesValue = document.querySelectorAll('.optionalexpenses-value'),
    incomeValue = document.querySelectorAll('.income-value'),
    monthsavingsValue = document.querySelectorAll('.monthsavings-value'),
    yearsavingsValue = document.querySelectorAll('.yearsavings-value');

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
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');