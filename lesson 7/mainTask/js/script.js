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

});

// пишем табы на фото

let photoWrap = document.querySelector('.wrap'),
    photoSlider = document.querySelectorAll('.slider-item'),
    photoNext = document.querySelector('.next'),
    photoPrev = document.querySelector('.prev'),
    photoSliderDots = document.querySelector('.slider-dots'),
    photoDot = document.querySelectorAll('.dot');

function hidePhotoContent(a) {
    for (let i = a; i < photoSlider.length; i++) {
        photoSlider[i].classList.remove('show');
        photoSlider[i].classList.add('hide');
    }
}

hidePhotoContent(1);

function showPhotoContent(p) {
    if (photoSlider[p].classList.contains('hide')) {
        photoSlider[p].classList.remove('hide');
        photoSlider[p].classList.add('show');
    }
}

photoWrap.addEventListener('click', function(event) {
    let target = event.target; // область куда нажимаем
    if (target && target.classList.contains('photoWrap')) {
        for (let i = 0; i < photoSlider.length; i++) {
            if (target = photoNext) {
                hidePhotoContent(0);
                showPhotoContent(i);
            } else if (target = photoPrev) {
                hidePhotoContent(0);
                showPhotoContent(--i);
            }
        }
    }
});