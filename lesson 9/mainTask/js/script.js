window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Пишем табы по видео
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
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

    let deadline = '2018-11-30';

    function getTimeRemaining(endtime) {
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
    }

    function timeForm(time) {
        let res = time;
        if (time < 0) {
            res = '00';
        } else if (time < 10) {
            res = '0' + time;
        }

        return res;
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = timeForm(t.hours);
            minutes.textContent = timeForm(t.minutes);
            seconds.textContent = timeForm(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
});

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

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    // разблокировать прокрутку при открытом модальном окне
    document.body.style.overflow = '';
});

// Модальное окно на каждую кнопку Узнать подробнее
let descriptionBtn = document.querySelectorAll('.description-btn');

descriptionBtn.forEach(function(item) {
    item.addEventListener('click', showModalContent);
});




// пишем табы на фото

//     let photoWrap = document.querySelector('.wrap'),
//         photoSlider = document.querySelectorAll('.slider-item'),
//         photoNext = document.querySelector('.next'),
//         photoPrev = document.querySelector('.prev'),
//         photoSliderDots = document.querySelector('.slider-dots'),
//         photoDot = document.querySelectorAll('.dot');

//     function hidePhotoContent(a) {
//         for (let i = a; i < photoSlider.length; i++) {
//             photoSlider[i].classList.remove('show');
//             photoSlider[i].classList.add('hide');
//         }
//     }

//     hidePhotoContent(1);

//     function showPhotoContent(p) {
//         if (photoSlider[p].classList.contains('hide')) {
//             photoSlider[p].classList.remove('hide');
//             photoSlider[p].classList.add('show');
//         }
//     }

//     photoWrap.addEventListener('click', function(event) {
//         let target = event.target; // область куда нажимаем
//         if (target && target.classList.contains('photoWrap')) {
//             for (let i = 0; i < photoSlider.length; i++) {
//                 if (target = photoNext) {
//                     hidePhotoContent(0);
//                     showPhotoContent(i);
//                 } else if (target = photoPrev) {
//                     hidePhotoContent(0);
//                     showPhotoContent(--i);
//                 }
//             }
//         }
//     });

// });