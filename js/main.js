$(document).ready(function() {

    $('.next').click(function() { // oppure anche cosi si puo scrivere  $('.next').click(nextImage);
        nextSlide();
    });

    function nextSlide() {
        if ($('.images img.active').hasClass('last')) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active');
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            var pallinoAttivo = $('.slider-nav i.active');
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }


var clock = setInterval(nextSlide,1000);
    $('.images').mouseenter(function() {
        clearInterval(clock);
    });
    $('.images').mouseleave(function() {
        setTimeout(function() {
            clock = setInterval(nextSlide,1000)
            ;}, 1000);
    });
});
