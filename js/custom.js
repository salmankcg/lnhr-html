//Fixed Navbar
$(window).scroll(function () {
    var navhldr = $('.lnhr_new_header');
    var top = 20;
    if ($(window).scrollTop() >= top) {
      navhldr.addClass('lnhr_new_navbar__fixed');
  
    } else {
      navhldr.removeClass('lnhr_new_navbar__fixed');
    }
  });
  
  //Menu Icon For Mobile
  $(document).ready(function () {
    $(".lnhr_new_menuIcon").click(function () {
      $(this).toggleClass("active");
      $('body').toggleClass("scroll");
      $('.lnhr_new_navbar__inner').toggleClass("toggle");
    });
    $(".lnhr_new_navbar__menuCarot").click(function () {
      $(this).parent().siblings().find(".lnhr_new_navbar__menuCarot").removeClass("active");
      $(this).parent().siblings().find(".lnhr_new_dropdownMenu").slideUp(350);
      $(this).parent().find(".lnhr_new_dropdownMenu").slideToggle(350);
      $(this).parent().siblings().find(".lnhr_new_dropdownSubMenu").slideUp(350);
      $(this).parent().find(".lnhr_new_dropdownSubMenu").slideToggle(350);
      $(this).toggleClass("active")
    });
  });