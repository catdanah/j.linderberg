$(document).ready(function() {
    // 트리거 메뉴
    $('header a.trigger, header .nav-bg').click(function() {
        $('header .nav-bg').toggle();
        $('header a.trigger span').toggleClass('on');
        $('header nav').toggleClass('on');
        if ( $('header nav').hasClass('on') ) {
            $('header nav').animate({right:'-15%'});                            
        } else {
            $('header nav').animate({right:'-100%'});
        }
    });
    // 슬라이더
    const mySwiper = new Swiper('.swiper-container', {
        loop : true,
        pagination : {
            el : '.swiper-pagination',
            type : 'fraction',
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
    });
});