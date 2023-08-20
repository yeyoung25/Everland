$(document).ready(function () {
  customSlider(".banslider",'fade',true,1000,7000,true,true,1,1,0,0,null,'short');
  customSlider(".carouselWay4",'horizontal',false,500,4000,false,false,7,5,600,10,null,'full');
  customSlider(".picSliderE",'fade',true,1000,6500,true,false,1,1,952,0,'.actTabPager','full');
  customSlider(".picSliderH",'fade',true,1000,6500,true,false,1,1,952,0,'.homTabPager','full');
  headerAct();
  menuButton();
  gotop();
  sumDetail();
  mainHeader();
});

function mainHeader(){
  if(!$("#wrap").hasClass("indexContainer")){
    $("header").css("position", "sticky");
    $("header").addClass("mouseOver");
  }else{
    headerEvent();
  }
}

function customSlider(sliderName,modeVal,slideAuto,slideSpeed,slidePause,slideInfiniteLoop,slideControls,slideMaxSlides,slideMinSlides,slideSlideWidth,slideSlideMargin,slidePagerCustom,slidepagerType){
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
        pagerCustom: slidePagerCustom,
        pagerType: slidepagerType
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
      if (!$("#fnbPanel").hasClass("act") && $(window).scrollTop() !== 0) {
        $(".go_top").removeClass("scrollTop");
      } else {
        $(".go_top").addClass("scrollTop");
      }
    });
  }
  
  function menuButton() {
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
  function sumDetail(){ 
    $("details").click(function(){
      if($("summary").hasClass("on")){
          $("details span,details p").slideUp();
        $("summary").removeClass("on");
      }else {
          $("details span, details p").slideDown();
        $("summary").addClass("on");
      }
    });
  }