$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  accordionFaq($(".comuContainer div:nth-child(2) .accordion .accordion_item"));
  howToggle($(".howContainer .detail_contents div .safetyBox div input"));
  inquToggle($("header+div div:nth-child(2)>div>form fieldset>input"));
  findtoggle($("div>form>fieldset>input"));
  trafTab();
  policyTab();
  historyTab();
  findtoggle();
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

function inquToggle(button){
  var currentPopup = null;
  $(button).click(function(){
    currentPopup = "." + $(this).attr("data-popup");
    $(currentPopup).addClass('active');
  });
  $(".closemodel").parent().click(function(){
    $(currentPopup).removeClass('active');
  });
}
function findtoggle(button){
  $(button).click(function(){
    $('.modal02').toggleClass('active');
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
function historyTab(){
  $('.hisContainer>ul>li').click(function(){
    $('.hisContainer>ul>li').removeClass('active');
    $(this).addClass('active');
    $('.hisContainer>ol').removeClass('active');
    $('.' + $(this).attr('data-tab')).addClass('active');
  });
}


function backBtn(button){
  $(button).click(function(){
    history.go(-1);
  });
}
var hypenTel = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
 }