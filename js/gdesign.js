$(document).ready(function(){
     $('.bx').bxSlider({
            mode: 'horizontal',
               nextText:'<i class="xi-angle-right-thin"></i>',
               prevText:'<i class="xi-angle-left-thin"></i>',
               auto:true,
               speed:500,
               pause:2000,
               autoHover:true
    }); 
      //web Main Menu
      $('.onePage').click(function(){
        $(this).children('.Sec').slideToggle(300);
        $(this).siblings().children('.Sec').slideUp(300);
    });

    //web Main Menu Show
    $('.mainM').click(function(){
        $('.Sec').hide();
        $(this).toggleClass('active');
        $('.Micon').toggleClass('active');
    });
});