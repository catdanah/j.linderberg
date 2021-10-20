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
    const mySwiper = new Swiper('.banner-con .swiper-container', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            type : 'fraction',
        },
        autoplay: { 
            delay: 3000, 
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
    // collection 슬라이더
    const collectionSwiper = new Swiper('.collection-list .swiper-container', {
        loop : true,
        autoplay: { 
            delay: 3000, 
        },
        slidesPerView : 'auto',
        spaceBetween : 30, 
    });
    // sale 슬라이더
    const saleSwiper = new Swiper('.sale-con .swiper-container', {
        loop : true,
        autoplay: { 
            delay: 3000, 
        },
        mousewheel : true,
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
    });
});