$(document).ready(function() {

    function showMatModal() {
        $('.overlay').fadeIn('slow');

        $('.modal').slideDown('slow');
    }

    function hideMatModal() {
        $('.overlay').fadeOut('slow');

        $('.modal').slideUp('slow');
    }

    $('.main_btna').click(() => {
        showMatModal(this);
    });

    $('.main_btn').click(() => {
        showMatModal(this);
    });

    $('li:contains("расписания туров")').click(() => {
        showMatModal(this);
    });

    $('.close').click(() => {
        hideMatModal(this);
    });
});