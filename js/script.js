$(document).ready(function() {
    // 트리거 메뉴
    $('header a.trigger, header .nav-bg').click(function(e) {
        e.preventDefault();
        $('header .nav-bg').toggleClass('on');
        $('header a.trigger span').toggleClass('on');
        $('header nav').toggleClass('on');
        if ( $('header nav').hasClass('on') ) {
            $('header nav').animate({right:'-15%'});                            
        } else {
            $('header nav').animate({right:'-100%'});
        }
    });
    // 슬라이더
    const mySwiper = new Swiper('.banner-con .swiper-container', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            type : 'fraction',
        },
        autoplay: { 
            delay: 3000, 
        },
    });
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