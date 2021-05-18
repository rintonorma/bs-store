$(function() {
    
    $(document).on('click', '.cd-dropdown-trigger', function(e){
        e.preventDefault();
        toggleNav();
        load();
    })

    $(document).on('click', '.cd-dropdown .cd-close', function(e){
        e.preventDefault();
        toggleNav();
        load();
    })

    //on mobile - open submenu
    $('.has-children').children('a').on('click', function(event){
        //prevent default clicking on direct children of .has-children 
        event.preventDefault();
        var selected = $(this);
        selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
    });

    load()
    

    // //submenu items - go back link
    $('.go-back').on('click', function(){
        var selected = $(this),
            visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
        selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
    }); 

    function toggleNav(){
        var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
        $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
        if( !navIsVisible ) {
            $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('.has-children ul').addClass('is-hidden');
                $('.move-out').removeClass('move-out');
                $('.is-active').removeClass('is-active');
            }); 
        }
    }

    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    // if(!Modernizr.input.placeholder){
    //     $('[placeholder]').focus(function() {
    //         var input = $(this);
    //         if (input.val() == input.attr('placeholder')) {
    //             input.val('');
    //         }
    //     }).blur(function() {
    //         var input = $(this);
    //         if (input.val() == '' || input.val() == input.attr('placeholder')) {
    //             input.val(input.attr('placeholder'));
    //         }
    //     }).blur();
    //     $('[placeholder]').parents('form').submit(function() {
    //         $(this).find('[placeholder]').each(function() {
    //             var input = $(this);
    //             if (input.val() == input.attr('placeholder')) {
    //                 input.val('');
    //             }
    //         })
    //     });
    // }
})

function load() {
    console.log('asd')
    var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
    $('.cd-dropdown-content').menuAim({
        activate: function(row) {
            $(row).children().addClass('is-active').removeClass('fade-out');
            if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
            $(row).children().removeClass('is-active');
            if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
                $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
                $(row).children('ul').addClass('fade-out')
            }
        },
        exitMenu: function() {
            $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
            return true;
        },
        submenuDirection: submenuDirection,
    });
}
