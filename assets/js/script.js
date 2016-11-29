$(document).ready(function() {

  $("#sidebar").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
    } else {
      $("#sidebar").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
      }
    });
  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("#sidebar").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $("body").removeClass("no-scroll");
    }
  });
  var parallaxHeaderposition = $(".parallax-header").offset().top;

$(window).scroll(function() {
  var scrollHeight = $(window).scrollTop();

  if (scrollHeight > parallaxHeaderposition+150) {
    $(".parallax-header").addClass("sticky");
  } else {
    $(".parallax-header").removeClass("sticky");
  }
  if (parallaxHeaderposition > parallaxHeaderposition2) {
    $(".parallax2-header").removeClass("sticky");
  }
});
  var parallaxHeaderposition2 = $(".parallax2-header").offset().top;

$(window).scroll(function() {
  var scrollHeight2 = $(window).scrollTop();

  if (scrollHeight2 > parallaxHeaderposition2+150) {
    $(".parallax2-header").addClass("sticky");
  } else {
    $(".parallax2-header").removeClass("sticky");
  }
});
});
