(function ($) {
  "use strict";

  var btn = $(".scrollTopBtn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  let header_height = $(".header-area").innerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= header_height) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });

  new WOW().init();
})(jQuery);
