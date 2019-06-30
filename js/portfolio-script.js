

// TODO: Clean up all this code
//       things can be consolidated into single functions


$(function() {
  if (window.innerWidth <= 550) {
    $('#nav-bar').addClass('navbar-fixed');
  }
  else {
    $('#nav-bar').removeClass('navbar-fixed');
  }

  $('.nav-item').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  });

  $('#hamburger-icon').click(function () {
    $('#nav-links').css('max-height', 500 + 'px');
    $('#hamburger-icon').css('display', 'none');
    $('#close-icon').css('display', 'block');
  });

  $('#close-icon').click(function () {
    $('#nav-links').css('max-height', 0);
    $('#hamburger-icon').css('display', 'block');
    $('#close-icon').css('display', 'none');
  })

  $(window).scroll(function () {
    if ($(window).width() > 550) {
      if ($(window).scrollTop() > $(window).height() - 46) {
        $('#nav-bar').addClass('navbar-fixed');
        $('#body-div').css('margin-top', 46 + 'px');
      }
      else {
        $('#nav-bar').removeClass('navbar-fixed');
        $('#body-div').css('margin-top', 0 + 'px')
      }
    }
  });

  $(window).resize(function () {
    if (window.innerWidth > 550) {
      $('#hamburger-icon').css('display', 'none');
      $('#close-icon').css('display', 'none');
      $('#nav-links').css('max-height', 0);
    }
    else {
      if ($('#close-icon').css('display') !== 'block') {
        $('#hamburger-icon').css('display', 'block');
      }
    }
    if (window.innerWidth <= 550 || $(window).scrollTop() > $(window).height() - 46) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    else {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });

  $(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();

    $('section').each(function (i) {
      if ($(this).position().top <= scrollPosition + 50) {
        $('#nav-links a.active').removeClass('active');
        $('#nav-links a').eq(i+1).addClass('active');
      }
    });
    if (scrollPosition + 50 <= $('#about-me').position().top) {
      $('#nav-links a.active').removeClass('active');
      $('#nav-links a').eq(0).addClass('active');
    }
  });
});
