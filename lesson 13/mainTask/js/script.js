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

    let deadline = '2018-12-10';

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

    // Form 

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы с вами свяжемся!',
        failture: 'Что то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    let formContact = document.getElementById('form'),
        inputContact = document.querySelectorAll('[type = tel]');

    //Функция для реквеста
    function httpRequest(form) {
        let input = form.getElementsByTagName('input');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            //собираем данные для отправки
            let formData = new FormData(form),
                obj = {};

            formData.forEach(function(value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            //создаем функцию отправки в которой создаем промис
            function sendData(data) {
                return new Promise(function(resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    });
                    request.send(data);
                });
                //end sendData
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            sendData(json)
                // .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failture)
                .then(clearInput)
                .then(setTimeout(() => {
                    $('.status').remove();
                }, 3000));
        });
    }

    // Form Modal
    httpRequest(form);

    // Form Contact
    httpRequest(formContact);

    //Функция для валидации номера телефона
    let validatePhone = (input) => {
        return /^(8|\+7|\+)\d{0,10}$/.test(input.value);
    };

    //Валидация телефона
    inputContact.forEach((item) => {
        item.addEventListener('input', () => {
            if (!validatePhone(item)) {
                // event.preventDefault();
                item.value = item.value.slice(0, -1);
            } else {
                item.value = item.value;
            }
        });
    });


    //пишем слайдер

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }


    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
    });

    next.addEventListener('click', function() {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }

    });

    //Калькулятор
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        total = 0,
        counterInput = document.querySelectorAll('.counter-block-input');


    totalValue.innerHTML = 0;

    //функция расчета калькулятора
    function calculator(person, day, place) {

        let personCount = +person.value,
            daysCount = +day.value,
            placeCount = +place.options[place.selectedIndex].value;

        total = (personCount + daysCount) * 4000 * placeCount;

        if (personCount && daysCount) {
            totalValue.innerHTML = total;
        } else {
            totalValue.innerHTML = 0;
        }
    }

    //обработчик на месте
    place.addEventListener('change', function() {
        calculator(persons, restDays, place);
    });

    counterInput.forEach(function(item) {
        item.removeAttribute('type');
        item.addEventListener('input', function() {
            if (/(\D)$/.test(item.value)) {
                item.value = item.value.slice(0, -1);
            }
            calculator(persons, restDays, place);
        });
    });

});