$(document).ready(() => {

    $('.home-content-slider').slick({
        slidesToShow: 1,
        arrows:true,
        prevArrow: $('.home-slider-prev'),
        nextArrow: $('.home-slider-next'),
        dots:true,
        appendDots: $('.home-slider-dots'),
        asNavFor: '.home-slider-img',
        fade: true,
        cssEase: 'linear'
    });
    $('.home-slider-img').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.home-content-slider',
        fade: true,
        cssEase: 'linear'
    });

})