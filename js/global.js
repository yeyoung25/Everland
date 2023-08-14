$(document).ready(function(){
    headerEvent();
    headerAct();
    meuuButton();
});

function headerScroll(){
    if($(window).scrollTop() == 0 && !$('#fnbPanel').hasClass("act")){
        $('header').removeClass("mouseOver");
        $('.go_top').addClass("scrollTop");
    }else{
        $('header').addClass("mouseOver");
        $('.go_top').removeClass("scrollTop");
    };
}

function headerEvent(){
    $('header').hover(function(){
        $('header').addClass("mouseOver");
    },function(){
        if($(window).scrollTop() == 0 && !$('#fnbPanel').hasClass("act")){
            $('header').removeClass("mouseOver");
        }
    });

    headerScroll();
    $(window).scroll(headerScroll);
};

function headerAct(){
    let headerHight = $("header").innerHeight();
    $('#fnbPanel').css("top", headerHight + "px");
    $('.menuBar').click(function(){
        $('#fnbPanel').toggleClass('act');
        headerScroll();
    })
};

function meuuButton(){
    var menuBar = document.querySelector('.menuBar');
    menuBar.addEventListener('click',()=>{
        menuBar.classList.toggle('toggle')
    })
}

