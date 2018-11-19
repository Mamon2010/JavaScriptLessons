function first(x, callback) {
    setTimeout(() => {
        console.log(x);
    }, 500);
    callback();
}

function second() {
    console.log(2);
}

first(1, second);