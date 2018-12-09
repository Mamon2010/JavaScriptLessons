let modal = function() {
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
};

export default modal;