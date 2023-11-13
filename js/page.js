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
  signUPcheck();
  // experienceScroll();
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
    var userName = button.prev().find("#userName").val();
    var phone = button.prev().find("#phone").val();
    var userID = button.prev().find("#userID").val();
    e.preventDefault();

    if (userID == ""){
      alert("Please enter your ID.");
    } else if (userName == ""){
      alert("Input your name, please.");
    } else if (phone == ""){
      alert("The phone number is empty.");
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
  
function signUPcheck(){
  $('#next02').click(function(e){
    var checked1 = $('#option01').is(':checked');
    var checked2 = $('#option02').is(':checked');
    var checked3 = $('#option03').is(':checked');
    var next02 = $('#next02');

    if(checked1 && checked2 && checked3){
      return;
    } else {
        e.preventDefault();
        alert("Please check the required items.");
    }
  });
}

if (window.matchMedia("(max-width: 700px)").matches) {
  // Viewport is less or equal to 700 pixels wide
  $(img).attr("src","mobile.png");
} else {
  // Viewport is greater than 700 pixels wide
}

function experienceScroll(){

}