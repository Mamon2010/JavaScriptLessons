function modalView() {

    //Общие функции открытия/закрытия модальных окон
    function showModalView(popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalView(close_dialog) {
        popupClose.forEach((item) => {
            item.addEventListener('click', () => {
                close_dialog.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    }

    // модальное окно Вызвать замерщика
    let headerBtn = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupClose = document.querySelectorAll('.popup_close');

    headerBtn.addEventListener('click', () => {
        showModalView(popupEngineer);
    });

    closeModalView(popupEngineer);

    // модальное окно Заказать обратный звонок

    let phoneBackLink = document.querySelector('.phone_link'),
        popup = document.querySelector('.popup');

    phoneBackLink.addEventListener('click', () => {
        showModalView(popup);
    });

    closeModalView(popup);

    // модальное окно Спросите у нашего специалиста!

    let feedbackPhoneLink = document.querySelector('.phone_link_question');

    feedbackPhoneLink.addEventListener('click', () => {
        showModalView(popup);
    });

    closeModalView(popup);

    //через 60 секунд выдавать модальное окно  
    setTimeout(() => {
        showModalView(popup);
    }, 60000);


}

export default modalView;