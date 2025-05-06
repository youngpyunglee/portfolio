$(document).ready(function (){
  var nav = $('nav');
  var line = $('<div />').addClass('line');

  line.appendTo(nav);

  var active = nav.find('.active');
  var pos = 0;
  var wid = 0;

  if(active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid
    });
  }

  nav.find('ul li a').mouseenter(function(e) {
    // Check if the hovered item is not part of the submenu
    if ($(this).parents('.submenu').length === 0) {
      if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
        nav.addClass('animate');
        var _this = $(this);
        nav.find('ul li').removeClass('active');
        var position = _this.parent().position();
        var width = _this.parent().width();

        if(position.left >= pos) {
          line.animate({
            width: ((position.left - pos) + width)
          }, 300, function() {
            line.animate({
              width: width,
              left: position.left
            }, 150, function() {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        } else {
          line.animate({
            left: position.left,
            width: ((pos - position.left) + wid)
          }, 300, function() {
            line.animate({
              width: width
            }, 150, function() {
              nav.removeClass('animate');
            });
            _this.parent().addClass('active');
          });
        }
        pos = position.left;
        wid = width;
      }
    }
  
  });
  // Hover event for menu item with submenu
  $('nav ul li').has('.submenu').hover(
    function() {
      // Mouse enters: show submenu
      $(this).find('.submenu').slideDown(300);
    }, 
    function() {
      // Mouse leaves: hide submenu++++
      $(this).find('.submenu').slideUp(300);
    }
  );
});
