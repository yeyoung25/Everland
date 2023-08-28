$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  howToggle($(".howContainer .detail_contents div .safetyBox div input"));
  // howToggleclose($(".#handicappedPopUp .closemodel"));
  trafTab();
  backBtn($(".backBtn"));
});


function justToggle(button){
  $(button).click(function(){
    $(this).toggleClass("active");
  });
}
function howToggle(button){
  $(button).click(function(){
    $('#handicappedPopUp').addClass('active');
    $('.#handicappedPopUp .closemodel').removeClass('active');
  });
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