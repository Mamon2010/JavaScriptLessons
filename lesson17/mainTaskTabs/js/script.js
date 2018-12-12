// Табы
(function($) {
    $(function() {

        $('ul.tabs__caption').each(function() {
            $(this).find('li').each(function(i) {
                $(this).click(function() {
                    $(this).addClass('active').siblings().removeClass('active')
                        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
                });
            });
        });

    });
})(jQuery);

//Слайдер
(function() {
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
    Galleria.configure({
        transition: 'slide',
        imageCrop: true,
        height: 1000,
        width: 800,
        autoplay: 3000,
        lightbox: true
    });
    Galleria.run('.galleria');
}());

//Игра