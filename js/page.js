$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  trafTab();
});


function justToggle(button){
  $(button).click(function(){
    $(this).toggleClass("active");
  });
}

function trafTab(){
  // ul li 를 클릭했을때 실행할 함수
  $('.trafContainer div:nth-child(2) ul li').click(function(){
  // ul li  active class 를 제거해주시고
  $('.trafContainer div:nth-child(2) ul li').removeClass('active');
  // 클릭이 이루어진 것에만 active class 를 추가해라.
  $(this).addClass('active');
  $('.trafContainer div:nth-child(2) ul li').removeClass('active');
  $('.' + $(this).attr('data-tab')).addClass('active');
});
}
