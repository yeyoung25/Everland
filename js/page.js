$(document).ready(function(){
  justToggle();
});


function justToggle(button){
  $(button).click(function(){ //button을 눌렀을때 
    $(this).toggleClass("active"); //button에 active 추가할것
    if ($("button").hasClass("active")) { //만약 button이 active를 가지고있다면
      $("ol").removeClass(".newsContainer div:first-child nav div ol"); //ol에 .act를 지울것
    } else {
      $("button").addClass(".newsContainer div:first-child nav div ol");
    } // 또는 ol에 .act를 추가할것
  });

}