let calc = function() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        total = 0,
        counterInput = document.querySelectorAll('.counter-block-input');


    totalValue.innerHTML = 0;

    //функция расчета калькулятора
    function calculator(person, day, place) {

        let personCount = +person.value,
            daysCount = +day.value,
            placeCount = +place.options[place.selectedIndex].value;

        total = (personCount + daysCount) * 4000 * placeCount;

        if (personCount && daysCount) {
            totalValue.innerHTML = total;
        } else {
            totalValue.innerHTML = 0;
        }
    }

    //обработчик на месте
    place.addEventListener('change', function() {
        calculator(persons, restDays, place);
    });

    counterInput.forEach(function(item) {
        item.removeAttribute('type');
        item.addEventListener('input', function() {
            if (/(\D)$/.test(item.value)) {
                item.value = item.value.slice(0, -1);
            }
            calculator(persons, restDays, place);
        });
    });
};

export default calc;