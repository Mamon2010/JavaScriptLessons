let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function httpRequest() {

    inputRub.addEventListener('input', function(event) {

        let request = new XMLHttpRequest();

        let promise = new Promise(function(resolve, reject) {

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; chaset=utf-8');
            request.send();
            request.addEventListener('readystatechange', function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        let data = JSON.parse(request.response);
                        resolve(data);
                    } else {
                        reject();
                    }
                }
            });
        });


        promise
            .then((data) => {
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => inputUsd.value = 'Что то пошло не так');
    });
}

httpRequest();