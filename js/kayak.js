$(document).ready(function(){
    var burgerKing=$('.burgerking')
    var mainMenu = $('.mainMenu')
    var hamBurger= $('.hamburger')

    //menu toggleClass
    $('.sub').hide();
    mainMenu.click(function(e){
        e.preventDefault();
        $(this).children('.sub').slideToggle(300);
        $(this).siblings().children('.sub').slideUp(300);
    });
    
    burgerKing.click(function(){
        $('.sub').hide();
        $(this).toggleClass('active');
        hamBurger.toggleClass('active');
    });
/* ***************************slick************************** */
    $('#instaGram').slick({
            centerMode: true,
            autoplay: true,
            dots: true,
            speed: 300,
             slidesToShow:5,
            slidesToScroll:1,
            prevArrow: false,
            nextArrow: false
        });
/* ***************************Event Page************************** */

        var event =$('#flightPromo');
        $('.eventP').click(function(){
            event.slideToggle(300);
        })
/* ***************************Top************************** */
$(".top").click(function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop:0}, 500)
});
/* ***************************Modal************************** */
$('.close').click(function(){
    $('.loadBG').fadeOut(500);
    $('.loadModal').fadeOut(500);
});

$('.eventP').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
});



});

