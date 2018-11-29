// Простой таймер

function getTimer() {
    let date = new Date(),
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
        h1 = document.querySelector('.time');

    h1.innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(getTimer, 1000);
}

getTimer();