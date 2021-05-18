$(document).ready(function () {
    // feather.replace();

    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
});

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     $('#mainMenu').toggleClass('sticky' ,
//       scroll > $('main').offset().top
//     );
// });
// $(window).scroll();