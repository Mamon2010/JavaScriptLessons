let form = function() {
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
                    // $('.status').remove();
                    document.querySelector('form .status').remove();
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
};

export default form;