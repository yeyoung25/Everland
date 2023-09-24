$(document).ready(function () {
  customSlider(".banslider",'fade',true,1000,7000,true,true,1,1,0,0,null,'short',false,0);
  customSlider(".carouselWay4",'horizontal',false,500,4000,false,false,5,1,325,35,null,'full',false,0);
  customSlider(".picSliderE",'fade',true,350,4500,true,false,1,1,0,0,'.actTabPager','full',false,0);
  customSlider(".picSliderH",'fade',true,350,4500,true,false,1,1,0,0,'.homTabPager','full',false,0);
  customSlider(".speslider",'horizontal',false,500,0,false,true,5,5,214,45,null,'full',false,0);
  customSlider(".pagerSliderBox01 .fadeSlider",'fade',false,0,0,true,false,1,1,0,0,null,'full',false,0);
  // customSlider(".pagerSliderBox02 .fadeSlider",'fade',false,0,0,true,false,1,1,0,0,null,'full',false,0);
  // customSlider(".pagerSliderBox03 .fadeSlider",'fade',false,0,0,true,false,1,1,0,0,null,'full',false,0);
  customSlider(".pagerSliderBox01 .thumbPager01",'horizontal',false,500,0,true,true,3,1,250,35,null,'full',false,1);
  customSlider(".pagerSliderBox02 .thumbPager02",'horizontal',false,500,0,true,true,3,1,250,35,null,'full',false,1);
  customSlider(".pagerSliderBox03 .thumbPager03",'horizontal',false,500,0,true,true,3,1,250,35,null,'full',false,1);
  headerAct();
  menuButton();
  gotop();
  sumDetail();
  mainHeader();
  justCopy();
});

function mainHeader(){
  if(!$("#wrap").hasClass("indexContainer")){
    $("header").css("position", "sticky");
    $("header").addClass("mouseOver");
  }else{
    headerEvent();
  }
}

function customSlider(sliderName,modeVal,slideAuto,slideSpeed,slidePause,slideInfiniteLoop,slideControls,slideMaxSlides,slideMinSlides,slideSlideWidth,slideSlideMargin,slidePagerCustom,slidepagerType,slideshrinkItems,slidemoveSlides,slidepagerCustom){
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
        pagerType: slidepagerType,
        shrinkItems: slideshrinkItems,
        moveSlides: slidemoveSlides
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
    $("summary").click(function(){
      if($("summary").hasClass("on")){
        $("summary").removeClass("on");
      }else {
        $("summary").addClass("on");
      }
    });
  }

  
  function justCopy(){
    var copyContent = "";
    $("#btnCopy").click(function(){
      copyContent = $("#copyMap").text();
      alert("복사했습니다.");
    });
  }