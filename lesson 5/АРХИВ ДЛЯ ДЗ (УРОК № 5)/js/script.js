// Используя только файл скрипта(html руками не трогать) выполнить такие действия:

// · Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu'),
    changeLi = document.querySelectorAll('.menu-item');
li = document.createElement('li');

menu.insertBefore(changeLi[2], changeLi[1]);

li.classList.add('menu-item');
li.innerText = 'Пятый пункт';
menu.appendChild(li);

// · Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// · Поменять заголовок, добавить слово "подлинную"(Получится - "Мы продаем только подлинную технику Apple")

let title = document.querySelector('#title');
title.innerText = 'Мы продаем только подлинную технику Apple';

// · Удалить рекламу со страницы
let column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');

column[1].removeChild(adv);

// · Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let askId = document.querySelector('#prompt'),
    ask = prompt('Каково ваше отношение к технике apple?', '');

askId.innerText = ask;