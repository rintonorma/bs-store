$(document).ready(function () {
    // feather.replace();

    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });

    $('#list').on("click", function(event){
        event.preventDefault();
        $('.mc-product .card-group').addClass('list-grid');
        console.log("sadasdsa");
    });
    $('#grid').on("click", function(event){
        event.preventDefault();
        $('.mc-product .card-group').removeClass('list-grid');
        $('.mc-product .card-group').addClass('grid-group-item');
    });
});

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     $('#mainMenu').toggleClass('sticky' ,
//       scroll > $('main').offset().top
//     );
// });
// $(window).scroll();