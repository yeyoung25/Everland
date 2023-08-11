$(function(){
    $('#wrap').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
    
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('.go_top').addClass('show');
      } else {
        $('.go_top').removeClass('show');
      }
    });
  });