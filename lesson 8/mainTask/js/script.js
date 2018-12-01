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

    let deadline = '2018-12-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
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

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = (t.hours < 10) ? '0' + t.hours : t.hours;
            minutes.textContent = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
            seconds.textContent = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

            function clearClock() {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

            if (t.total <= 0) {
                clearClock();
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
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