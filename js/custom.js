$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })
})

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    const MIS = new Swiper('.main_curator_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        breakpoints: {
            541: {
                slidesPerView: 4,
            },
        },

        navigation: {
            nextEl: '.main_curator .arrows .next',
            prevEl: '.main_curator .arrows .prev',
        },
    })
})

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();
        }
    });


    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }
    });
})
