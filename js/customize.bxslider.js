$(document).ready(function(){
    banslider();
    carouselWay4();
    picSlider();
    // customSlider("",'fade');
    // customSlider("",'horizontal');
    // customSlider("",'fade');
});
function customSlider(sliderName,modeVal){
    $(sliderName).bxSlider({
        mode: modeVal
    });
}

function banslider(){
    $(".banslider").bxSlider({
        mode: 'fade',
        auto: true,
        speed: 1000,
        pause: 7000,
        ticker: false,
        infiniteLoop: true,
        captions: true,
        
    });
}
function carouselWay4(){
    $(".carouselWay4").bxSlider({
        pager: true, // 현재 슬라이드 위치 표시
        infiniteLoop: false,
        slideWidth: 600, // 슬라이드 되는 요소의 넓이
        minSlides: 5, // 보여지는 슬라이드 최소 갯수.
        maxSlides: 7, //보여지는 슬라이드 최대 갯수
        slideMargin : 10, //슬라이드 되는 요소의 마진
        controls: false,
    });
}
function picSlider(){
    $(".picSlider").bxSlider({
        // mode: 'fade',
        infiniteLoop: true,
        auto: true,
        speed: 1000,
        pause: 6500,
        pagerCustom: '.picSlider',
        controls: false,
        slideWidth: 952,
    });
}
