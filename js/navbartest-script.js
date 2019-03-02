$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() - 30) {
      $('#nav_bar').addClass('navbar-fixed');
      $('#body_div').css('margin-top', 30 + 'px')
    }
    if ($(window).scrollTop() < $(window).height() - 29) {
      $('#nav_bar').removeClass('navbar-fixed');
      $('#body_div').css('margin-top', 0 + 'px')
    }
  });
});

/*
$(window).resize(function() {
  //$(window).height() - 46
    $('#nav_bar').css('background-color', 'red');
});

$(window).trigger('resize');
*/