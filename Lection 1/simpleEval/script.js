// document.getElementsByTagName("h1")[0].style.fontSize = "80px";
function simpleEval(maxNum) {
    let a = 0;
    for (let i = 1; i <= maxNum; i++) {
        for (let j = 1; j <= maxNum; j++) {
            if (i % j == 0) {
                a++;
            }
        }
        if (a == 2) {
            console.log('Делители этого числа: 1 и ' + i);
        }
        a = 0;
    }
}

simpleEval(500);