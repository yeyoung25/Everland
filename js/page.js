$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  howToggle($(".howContainer .detail_contents div .safetyBox div input"));
  trafTab();
  backBtn($(".backBtn"));
  // accordionFaq();
});


function justToggle(button){
  $(button).click(function(){
    $(this).toggleClass("active");
  });
}

function howToggle(button){
  var currentPopup = null;
  $(button).click(function(){
    currentPopup = "#" + $(this).attr("data-popup");
    $(currentPopup).addClass('active');
  });
  $(".closemodel").click(function(){
    $(currentPopup).removeClass('active');
  });
  // $("#handicappedPopUp > div").click(function(){
  //   return false;
  // });
  // $("#handicappedPopUp").click(function(){
  //   $('#handicappedPopUp').removeClass('active');
  // });
  // $(".closemodel").click(function(){
  //   $('#handicappedPopUp').removeClass('active');
  // });
}


function trafTab(){
  $('.trafContainer div:nth-child(2) ul li').click(function(){
    $('.trafContainer div:nth-child(2) ul li').removeClass('active');
    $(this).addClass('active');
    $('.trafContainer div:nth-child(2) div').removeClass('active');
    $('.' + $(this).attr('data-tab')).addClass('active');
  });
}

function backBtn(button){
  $(button).click(function(){
    history.go(-1);
  });
}
