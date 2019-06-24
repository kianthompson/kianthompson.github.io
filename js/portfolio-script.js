$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).width() > 550) {
      if ($(window).scrollTop() > $(window).height() - 46) {
        $('#nav-bar').addClass('navbar-fixed');
        $('#body-div').css('margin-top', 46 + 'px')
      }
      else {
        $('#nav-bar').removeClass('navbar-fixed');
        $('#body-div').css('margin-top', 0 + 'px')
      }
    }
  });

  if ($(window).width() < 550) {
    $('#nav-bar').addClass('navbar-fixed');
  }
  else {
    $('#nav-bar').removeClass('navbar-fixed');
  }

  $(window).resize(function () {
    if ($(window).width() < 550) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    else {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });

  $(".nav-item").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
    scrollTop: $(this.hash).offset().top
    }, 800);
  });

  $(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();

    $('section').each(function (i) {
      if ($(this).position().top <= scrollPosition + 50) {
        $('a.active').removeClass('active');
        $('a').eq(i+1).addClass('active');
      }
    });
    if (scrollPosition + 50 <= $('#about-me').position().top) {
      $('a.active').removeClass('active');
      $('a').eq(0).addClass('active');
    }
  });
});