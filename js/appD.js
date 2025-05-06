$(document).ready(function(){
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
