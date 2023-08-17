$(document).ready(function () {
    headerEvent();
    headerAct();
    meuuButton();
    gotop();
    sumDetail();
    customSlider(".banslider",'fade',true,1000,7000,true,false,1,1,0,0,null);
    customSlider(".carouselWay4",'horizontal',false,500,4000,false,false,7,5,600,10,null);
    customSlider(".picSliderE",'fade',true,1000,6500,true,false,1,1,952,0,'.actTabPager');
  });
  
function customSlider(sliderName,modeVal,slideAuto,slideSpeed,slidePause,slideInfiniteLoop,slideControls,slideMaxSlides,slideMinSlides,slideSlideWidth,slideSlideMargin,slidePagerCustom){
    $(sliderName).bxSlider({
        mode: modeVal,
        auto: slideAuto,
        speed: slideSpeed,
        pause: slidePause,
        infiniteLoop: slideInfiniteLoop, 
        controls: slideControls,
        maxSlides: slideMaxSlides,
        minSlides: slideMinSlides,
        slideWidth: slideSlideWidth,
        slideMargin: slideSlideMargin,
        pagerCustom: slidePagerCustom
    });
}

  function headerScroll() {
    if ($(window).scrollTop() == 0 && !$("#fnbPanel").hasClass("act")) {
      $("header").removeClass("mouseOver");
      $(".go_top").addClass("scrollTop");
    } else {
      $("header").addClass("mouseOver");
      $(".go_top").removeClass("scrollTop");
    }
  }
  
  function headerEvent() {
    $("header").hover(
      function () {
        $("header").addClass("mouseOver");
      },
      function () {
        if ($(window).scrollTop() == 0 && !$("#fnbPanel").hasClass("act")) {
          $("header").removeClass("mouseOver");
        }
      }
    );
  
    headerScroll();
    $(window).scroll(headerScroll);
  }
  
  function headerAct() {
    let headerHight = $("header").innerHeight();
    $("#fnbPanel").css("top", headerHight + "px");
    $(".menuBar").click(function () {
      $("#fnbPanel").toggleClass("act");
      if (!$("#fnbPanel").hasClass("act")) {
        $(".go_top").removeClass("scrollTop");
      } else {
        $(".go_top").addClass("scrollTop");
      }
    });
  }
  
  function meuuButton() {
    var menuBar = document.querySelector(".menuBar");
    menuBar.addEventListener("click", () => {
      menuBar.classList.toggle("toggle");
    });
  }

  function gotop(){
    $(".go_top").click(function () {
        $('html, body').animate({scrollTop: '0'}, 680);
    });
  }
//   function sumDetail(){ 
//     $("summary").on("click",function(){
//         $("details span").slideUp();
//     });
//     $("summary").on("click",function(){
//         $("details span").slideDown();
//     });
//   }
  function sumDetail(){ 
    $("summary").click(function(){
      if($("summary").hasClass("on")){
        $(this).removeClass("on");
        $("details span,details p").slideUp();
      }else {
        $(this).addClass("on");
        $("details span, details p").slideDown();
      }
    });
  }