
$(document).ready(function() {
    $(".overlay, .cerTification").fadeIn(1000); // Fades in both elements

    $(".moDal img").click(function() {
        $(".cerTification, .overlay").fadeOut(500); // Fade out on image click
    });
});