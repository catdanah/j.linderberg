$(document).ready(function() {
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
        // 반응형일때
        // breakpoints : {
        //     
        // }
    });
});