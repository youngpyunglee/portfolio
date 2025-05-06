$(document).ready(function () {
    //web Main Menu
    $('.onePage').click(function () {
        $(this).children('.Sec').slideToggle(300);
        $(this).siblings().children('.Sec').slideUp(300);
    });

    //web Main Menu Show and hide Sub menu
    $('.mainM').click(function () {
        $('.Sec').hide();
        $(this).toggleClass('active');
        $('.Micon').toggleClass('active');
    });

    // Sub menu
    $('.sub').hide();
    $('.onePage').hover(
        function () {
            $(this).children('.sub').slideDown(300);
        },
        function () {
            $(this).children('.sub').slideUp(300);
        }
    );

    // Scroll to top button
    var scrollToTopBtn = $("#scrollToTopBtn");

     // Log the element to check if it's found
     console.log(scrollToTopBtn);
        
    // Show or hide the button based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height() / 2) {
            scrollToTopBtn.show();
        } else {
            scrollToTopBtn.hide();
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopBtn.click(function(){
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});