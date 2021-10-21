$(document).ready(function() {
    // 메뉴 슬라이드
    $('header .main-menu>li').mouseenter(function() {
        $(this).children('.sub-menu').slideDown(300);
    });
    $('header .main-menu>li').mouseleave(function() {
        $(this).children('.sub-menu').slideUp(300);
    });
    // 트리거 메뉴
    $('header a.trigger, header .nav-bg').click(function(e) {
        e.preventDefault();
        $('header .nav-bg').toggleClass('on');
        $('header a.trigger span').toggleClass('on');
        $('header nav').toggleClass('on');
        if ( $('header nav').hasClass('on') ) {
            $('header nav').animate({right:'-35%'});                            
        } else {
            $('header nav').animate({right:'-100%'});
        }
    });
    // banner 슬라이더
    const bannerImgSwiper = new Swiper('.banner-con .swiper-container.banner-img', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            type : 'fraction',
        },
        autoplay: { 
            delay: 3000, 
            disableOnInteraction : false,
        },
        breakpoints: { 
            768: {
                spaceBetween : 50,
                slidesPerView: 1.5,
                centeredSlides: true, 

            },
            1024: {
                spaceBetween : 50,
                slidesPerView: 2,
                centeredSlides: true, 
            },
        },
    });
    const bannerContentSwiper = new Swiper('.banner-con .swiper-container.banner-content', {
        loop : true,
        effect : 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        autoplay: { 
            delay: 3000, 
            disableOnInteraction : false,
        },
        breakpoints: { 
            768: {
                spaceBetween : 50,
                slidesPerView: 1,
            },
            1024: {
                spaceBetween : 100,
                slidesPerView: 1,
            },
        },
    });
    // collection 슬라이더
    const collectionSwiper = new Swiper('.collection-list .swiper-container', {
        loop : true,
        autoplay: { 
            delay: 3000, 
            disableOnInteraction : false,
        },
        slidesPerView : 3.5,
        spaceBetween : 30, 
    });

    // qeustion 아코디언 메뉴
    $('.question-list > .question').click(function() {
        $(this).next('.answer').slideToggle(300);
        $(this).next('.answer').siblings('.answer').slideUp(300);
    });
});