// $(document).ready(function() {
//     $(".menu-icon").on("click", function() {
//           $("nav ul").toggleClass("showing");
//     });
// });

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('bg-special');
    }

    else {
          $('nav').removeClass('bg-special');
    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav a img').addClass('logo2');
    }

    else {
          $('nav a img').removeClass('logo2');
    }
})

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav ul li a').addClass('text-special');
    }

    else {
          $('nav ul li a').removeClass('text-special');
    }
})