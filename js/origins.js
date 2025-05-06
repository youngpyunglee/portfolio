$(document).ready(function(){
    var xoxo=$('.xoxo');
   $('.video').click(function(){
        $('.aboutPage').fadeIn(2000);
   });
   $('.xoxo').click(function(){
        $('.aboutPage').slideUp(2000);
   });
    
   
   //aboutpage 
   var discoverOrigins=$('.text');
   var companyInfo=$('.companyInfo');
   var companyLeadership=$('.companyLeadership');
   var companySustainability=$('.companySustainability');
   var companyGreen=$('.companyGreen');
   discoverOrigins.eq(0).mouseenter(function(){
          companyInfo.fadeIn(500);
   });
   discoverOrigins.eq(0).mouseleave(function(){
          companyInfo.fadeOut(500);
   });
   discoverOrigins.eq(1).mouseenter(function(){
     companyLeadership.fadeIn(500);
     });
   discoverOrigins.eq(1).mouseleave(function(){
     companyLeadership.fadeOut(500);
     });
   discoverOrigins.eq(2).mouseenter(function(){
     companySustainability.fadeIn(500);
     });
   discoverOrigins.eq(2).mouseleave(function(){
     companySustainability.fadeOut(500);
     });
   discoverOrigins.eq(3).mouseenter(function(){
     companyGreen.fadeIn(500);
     });
   discoverOrigins.eq(3).mouseleave(function(){
     companyGreen.fadeOut(500);
     });
});
