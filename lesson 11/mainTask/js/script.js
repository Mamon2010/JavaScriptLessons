window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Пишем табы по видео
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer

    let deadline = '2018-12-04';

    let getTimeRemaining = (endtime) => {
        let d = new Date().getTimezoneOffset() * 60 * 1000,
            t = Date.parse(endtime) - Date.parse(new Date()) + d,
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    let timeForm = (time) => {
        let res = time;
        if (time < 0) {
            res = '00';
        } else if (time < 10) {
            res = '0' + time;
        }

        return res;
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            hours.textContent = timeForm(t.hours);
            minutes.textContent = timeForm(t.minutes);
            seconds.textContent = timeForm(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        };

        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadline);


    // Мадальное окно на кнопку "Узнать больше"
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    let showModalContent = () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        // заблокировать прокрутку при открытом модальном окне
        document.body.style.overflow = 'hidden';
    };

    more.addEventListener('click', showModalContent);

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        // разблокировать прокрутку при открытом модальном окне
        document.body.style.overflow = '';
    });

    // Модальное окно на каждую кнопку Узнать подробнее
    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach((item) => {
        item.addEventListener('click', showModalContent);
    });

    // Элементы формы общие для Modal и Contact
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с вами свяжемся!',
        failture: 'Что то пошло не так...'
    };

    //Элементы формы Modal
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    //Элементы формы Contact
    let formContact = document.getElementById('form'),
        inputContact = formContact.getElementsByTagName('input');

    //Функция для реквеста
    let httpRequest = (form) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        //подготовка данных для отправки
        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        //отправка данных на сервер
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(json);

        //обработка ответа от сервера
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failture;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    };

    //Функция для валидации номера телефона
    let validatePhone = (input) => {
        return /^(8|\+7)\d{0,10}|^\+\d{0,11}/.test(input.value);
    };

    // Form Modal
    form.addEventListener('submit', function() {
        httpRequest(this);
    });


    // Form Contact
    formContact.addEventListener('submit', function() {
        httpRequest(this);
    });

    //Валидация телефона
    inputContact[1].addEventListener('input', () => {
        if (!validatePhone(inputContact[1])) {
            // event.preventDefault();
            inputContact[1].value = inputContact[1].value.slice(0, -1);
        } else {
            inputContact[1].value = inputContact[1].value;
        }
    });

});