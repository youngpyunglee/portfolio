$(document).ready(function(){
     
    $('.eduC').click(function(){
        $('#schooL').fadeIn(500);
    });
    $('.uniX').click(function(){
        $('#schooL').fadeOut(500);
    });

    $('.exP').click(function(){
        $('#careeR').fadeIn(500);
    });
    $('.shuT').click(function(){
        $('#careeR').fadeOut(500);
    });

    $('.perS').click(function(){
        $('#charcT').fadeIn(500);
    });
    $('.luT').click(function(){
        $('#charcT').fadeOut(500);
    });
    var personal =$('.perL');
    personal.click(function(){
        $('#liFe').fadeIn(500);
    });
    $('.xoxo').click(function(){
        $('#liFe').fadeOut(500);
    });

    $('.aloO').click(function(){
        $('.mouseO, .bonO').fadeOut(500);
    });
    var polaroid = $('.polaR')
    console.log(polaroid);
    var detail = $('.pdetail')
    console.log(detail);

    polaroid.mouseenter(function(){
        detail.eq(0).slideDown(500);
    });
    polaroid.mouseleave(function(){
        detail.eq(0).stop().slideUp(500);
    });
    
    var polaroid01=$('.polaR01')
    console.log(polaroid01);

    polaroid01.mouseenter(function(){
        detail.eq(1).slideDown(500);
    });
    polaroid01.mouseleave(function(){
        detail.eq(1).stop().slideUp(500);
    });
    
    var polaroid02 =$('.polaR02')
    polaroid02.mouseenter(function(){
        detail.eq(2).slideDown(500);
    });
    polaroid02.mouseleave(function(){
        detail.eq(2).stop().slideUp(500);
    });

    var polaroid03 =$('.polaR03')
    polaroid03.mouseenter(function(){
        detail.eq(3).slideDown(500);
    });
    polaroid03.mouseleave(function(){
        detail.eq(3).stop().slideUp(500);
    });

    var polaroid04 =$('.polaR04')
    polaroid04.mouseenter(function(){
        detail.eq(4).slideDown(500);
    });
    polaroid04.mouseleave(function(){
        detail.eq(4).stop().slideUp(500);
    });

    var polaroid05 =$('.polaR05')
    polaroid05.mouseenter(function(){
        detail.eq(5).slideDown(500);
    });
    polaroid05.mouseleave(function(){
        detail.eq(5).stop().slideUp(500);
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