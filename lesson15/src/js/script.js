import form from './parts/form';
import tabs from './parts/tabs';
import timer from './parts/timer';
import modal from './parts/modalWindow';
import slider from './parts/slider';
import calc from './parts/calc';

window.addEventListener('DOMContentLoaded', () => {

    tabs();
    timer();
    modal();
    form();
    slider();
    calc();

});