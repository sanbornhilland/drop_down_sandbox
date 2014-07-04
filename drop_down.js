$( document ).ready(function() {

  function animateMenu(menu) {
    if (!menu.hasClass("open")) {
      menu.slideDown(400, "easeInOutQuart");  
      menu.addClass("open");
    } else {
      menu.slideUp(400, "easeInOutQuart");
      menu.removeClass("open");
    }  
  }

  function windowWidth() {
    return $(window).width();
  }

  var mainMenu   = $(".main-menu");
  var nestedMenu = $(".nested-menu");

  // Open/Close full menu when mobile menu is displayed
  $(".menu-btn").click(function(e) {
    e.preventDefault;
    animateMenu(mainMenu);

    // If main menu is closed, close the nested menu as well
    if (!mainMenu.hasClass("open")) {
      nestedMenu.slideUp(400, "easeInOutQuart");
      nestedMenu.removeClass("open");
    }
  })

  // Open/Close the nested menu
  $(".nested-btn").click(function(e) {
    e.preventDefault;
    animateMenu(nestedMenu);
  })

  var previousWidth = $(window).width();

  function breakPointCrossed() {
    if (previousWidth < 981 && windowWidth() > 981 ) {
      previousWidth = windowWidth();
      return true;
    } else if (previousWidth > 980 && windowWidth() < 980 ) {
      previousWidth = windowWidth();
      return true;
    } else {
      return false;
    }
  }

  // If a breakpoint is crossed, reset the menu accordingly
  $(window).resize(function() {
    var crossed = breakPointCrossed();

    if (crossed && (windowWidth() < 980)) {
      nestedMenu.hide();
      nestedMenu.removeClass("open");
      mainMenu.hide();
      mainMenu.removeClass("open");
    } else if (crossed && (windowWidth() > 980)) {
      nestedMenu.hide();
      nestedMenu.removeClass("open");
    }
  })

  // MODAL TINGS BE HERE
  $('#form-btn').click(function(e) {
    e.preventDefault;

    $('.lightbox-wrapper').fadeIn('fast');
    $('.modal').animate({top: "10%"}, 500, "easeInOutQuart");
  })

  $('.lightbox-wrapper').click(function(e) {
    e.preventDefault;

    $(this).fadeOut('fast');
    $('.modal').animate({top: "0"}, 500, "easeInOutQuart");
  });




});