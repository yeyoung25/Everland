$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  accordionFaq($(".comuContainer div:nth-child(2) .accordion .accordion_item"));
  howToggle($(".howContainer .detail_contents div .safetyBox div input"));
  trafTab();
  policyTab();
  backBtn($(".backBtn"));
});


function justToggle(button){
  $(button).click(function(){
    $(this).toggleClass("active");
  });
}


function accordionFaq(button){
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
}


function trafTab(){
  $('.trafContainer div:nth-child(2) ul li').click(function(){
    $('.trafContainer div:nth-child(2) ul li').removeClass('active');
    $(this).addClass('active');
    $('.trafContainer div:nth-child(2) div').removeClass('active');
    $('.' + $(this).attr('data-tab')).addClass('active');
  });
}

function policyTab(){
  $('.poliContainer>ul li').click(function(){
    $('.poliContainer>ul li').removeClass('active');
    $(this).addClass('active');
    $('.poliContainer>div').removeClass('active');
    $('.' + $(this).attr('data-tab')).addClass('active');
  });
}

function backBtn(button){
  $(button).click(function(){
    history.go(-1);
  });
}
