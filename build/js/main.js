$('body').on('click', '.menu__search .icon', () => {
    $('.menu__search').toggleClass('active');
});

$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.tab').removeClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});

let initMobileMenu = () => {
    if ($(window).width() <= 767 && $('.hamburger').length === 0) {
        $('.header .container').prepend('<div class="hamburger"><span></span></div>').append($('.menu__search'));
        $('body').append(`
            <div class="mobile-menu">
                <div class="mobile-menu__body">
                    <div class="mobile-menu__header">
                        <div class="mobile-menu__logo"><img alt="" src="img/logo.svg"></div>
                        <div class="hamburger active"><span></span></div>
                    </div>
                </div>
            </div>
        `);
        $('.mobile-menu .mobile-menu__body').append($('.catalog')).append($('.menu')).append($('.header__city')).append($('.header__phone')).append('<div class="container">© 2012-2021 «ТК Комплект Навигатор» <br> Все права защищены.</div>');
    } else if ($(window).width() > 767 && $('.hamburger').length > 0) {
        $('.hamburger').remove();
        $('.menu .container').append($('.menu__search'));
        $('.main .container').prepend($('.catalog'));
        $('.header').before($('.menu'));
        $('.header__right').append($('.header__city')).append($('.header__phone'));
        $('.mobile-menu').remove();
    }
}

initMobileMenu();

$(window).on('resize', initMobileMenu);

$('body').on('click', '.hamburger', (e) => {
    $('.mobile-menu').toggleClass('active');
    $('html').toggleClass('overflow');
});

$('body').on('click', '.close-menu', () => {
    $('.hamburger').toggleClass('active');
    $('.menu').toggleClass('active');
    $('html').toggleClass('overflow');
});

$('body').on('click', '.catalog__header', () => {
    $('.catalog__list').toggleClass('active');
});

let main = new Swiper(".main .slider", {
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".main .swiper-button-next",
        prevEl: ".main .swiper-button-prev",
    },
    pagination: {
        el: ".main .swiper-pagination",
    },
    on: {
        afterInit: function () {
            let counter = 0;

            for (var i = 0; i <= $('.main .swiper-pagination-bullet').length; i++) {
                $(`.main .swiper-pagination-bullet:nth-child(${i})`).attr('data-pos', counter)
                counter++;
            }
        },
        slideChange: function () {
            
        }
    },
});