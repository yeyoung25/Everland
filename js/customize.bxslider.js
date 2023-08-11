$(document).ready(function(){
    banslider();
    carouselWay4();
    picSlider();
}); 
function banslider(){
    $(".banslider").bxSlider({
        mode: 'fade',
        auto: true,
        speed: 1000,
        pause: 6500,
        ticker: false,
        infiniteLoop: true,
        captions: true,
    });
}
function carouselWay4(){
    $(".carouselWay4").bxSlider({
        pager: false, // 현재 슬라이드 위치 표시
        infiniteLoop: false,
        slideWidth: 600, // 슬라이드 되는 요소의 넓이
        minSlides: 4, // 보여지는 슬라이드 최소 갯수.
        maxSlides: 3, //보여지는 슬라이드 최대 갯수
        slideMargin : 10, //슬라이드 되는 요소의 마진
        moveSlides: 2, //이동되는 슬라이드 요소 갯수
        controls: false,
    });
}
function picSlider(){
    $(".picSlider").bxSlider({
        
    });
}
