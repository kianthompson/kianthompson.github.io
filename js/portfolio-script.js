
$(function() {

  // Initializing the navbar on page load
  if (window.innerWidth <= 550) {
    $('#nav-bar').addClass('navbar-fixed');
  }
  else {
    $('#nav-bar').removeClass('navbar-fixed');
  }

  // Smooth scrolling on nav-link clicks
  $('.nav-item').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  });

  // Handles expanding navbar (for small displays)
  $('#hamburger-icon').click(function () {
    $('#nav-links').css('max-height', 500 + 'px');
    $('#hamburger-icon').css('display', 'none');
    $('#close-icon').css('display', 'block');
  });

  // Handles closing navbar (for small displays)
  $('#close-icon').click(function () {
    $('#nav-links').css('max-height', 0);
    $('#hamburger-icon').css('display', 'block');
    $('#close-icon').css('display', 'none');
  })

  // Handles fixing the navbar to top once scroll height is reached
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

  // Handles collapsing the navbar when window is resized
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

  // Handles changing the active nav-link/section when scrolling
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

// TODO: Clean up code
//       can be consolidated into single functions
