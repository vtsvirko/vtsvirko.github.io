$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 800);
 });