// Простой таймер

function getTimer() {
    let h1 = document.querySelector('.time');
    var time = (new Date()).toLocaleTimeString("ru-RU", {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    time = ("0" + time).slice(-8);
    h1.innerText = time;
    setTimeout(getTimer, 1000);
}

getTimer();