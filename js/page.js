$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  accordionFaq($(".comuContainer div:nth-child(2) .accordion .accordion_item"));
  howToggle($(".howContainer .detail_contents div .safetyBox div input"));
  inquToggle($("header+div div:nth-child(2)>div>form fieldset>input"));
  trafTab();
  policyTab();
  historyTab();
  backBtn($(".backBtn"));
  findtoggle($(".findIdContainer form>fieldset>input"));
  findtoggle($(".findPWContainer form>fieldset>input"));
  confirmation();
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

function selectAll(selectAll){
  var checkboxes 
       = document.getElementsByName('signUpAll');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}

function findtoggle(button){

  $(button).click(function(e){

    let userName = button.prev().find("#userName").val();
    let phone = button.prev().find("#phone").val();
    let userID = button.prev().find("#userID").val();
    e.preventDefault();

    if (userID == ""){
      alert("아이디가 비어있습니다.");
    } else if (userName == "" ){
      alert("이름이 비어있습니다.");
    } else if (phone == ""){
      alert("폰 번호가 비어있습니다.");
    } else {
      $('.modal02').toggleClass('active');
    }

  });
}

function confirmation(){
  $("#confirmation").click(function(){
    if($("#userID").val().length==0) { 
      alert("Please enter your ID."); 
        setTimeout(function (){ $("#recipeTitle").focus();}, 1); return false;}
    else{
      alert("This is a UserID you can use!");
    };
});
}
