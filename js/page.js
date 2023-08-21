$(document).ready(function(){

});

var copy = (text) => {
  alert("복사했습니다.");
  var $textarea = document.createElement("textarea");
  document.body.appendChild($textarea);$textarea.value =
    "199, EVERLAND-RO, POGOK-EUP, CHEOIN-GU, YONGIN-SI,GYEONGGI-DO, KOREA (Location number) 310 Jeondae-ri, Pogok-eup";
  $textarea.select();document.execCommand("copy");
  document.body.removeChild($textarea);
};

function manuNav(){
  $('button').click(function(){
  
  });
};