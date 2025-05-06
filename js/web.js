$(document).ready(function(){

    //web menu toggle
    $('.mainmenu').click(function(e){
        $('.sub').hide();
        e.preventDefault();
        $(this).children('.sub').slideToggle(300);
        $(this).siblings().children('.sub').slideUp(300);
    });

    //web menu show

    $('.menuBtn').click(function(){
        $('.sub').hide();
            $(this).toggleClass('active');
            $('.Hamburger').toggleClass('active');
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
   $('.siteD').click(function(e){
        e.preventDefault(); 
    }); 

    var mBtn = $('.menuBtn');
    var hNav = $('.Hamburger');
    var sub = $('.sub > li')
    console.log(sub);
    var content =$('.siteWrap > div')
    
    sub.click(function(e){
        e.preventDefault();
        var idx=$(this).index();
        console.log(idx)
        var section =content.eq(idx);
        console.log(section);
        var sectionDistance= section.offset().top;
        //A.ScrollTop() 스크롤양을 확인
        $('html, body').stop().animate({scrollTop:sectionDistance});
    });  
});