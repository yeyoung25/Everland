$(document).ready(function(){
  justToggle($("div div:first-child nav div"));
  accordionFaq($(".comuContainer div:nth-child(2) .accordion .accordion_item"));
  howToggle($(".howContainer .detail_contents div .safetyBox div input"));
  inquToggle($("header+div div:nth-child(2)>div>form fieldset>input"));
  trafTab();
  policyTab();
  historyTab();
  backBtn($(".backBtn"));
  // findmodal();
  // findtoggle($("div>form>fieldset>input"));
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

function findmodal(){
  var dataStatus;
  var target = $(".findIdContainer form fieldset ul li input");
  $(target).keydown(function(){
    if($(target).val() == undefined){
      $("#testBtn").attr("disabled",true);
    }else{
      $("#testBtn").attr("disabled",false);
    }
  });
  // $("#testBtn").click(function(e){
  //   dataStatus = $("#input_text").val();
  //   console.log(dataStatus);
  //   if(dataStatus == undefined){
  //     e.preventDefault();
  //     $("#testBtn").attr("disabled",true);
  //   }else{
  //     $("#testBtn").attr("disabled",false);
  //   }
  // });
}

// 1. button click했을 때 $(target)의 .val() == undefined -> case.1 name: / case.2 phone / case.3 둘다 입력 / case.4 둘다 입력안되었을때
// 2. popup -> 띄울지 말지 결정.

function findtoggle(button){
  $(button).click(function(){
    $('.modal02').toggleClass('active');
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
