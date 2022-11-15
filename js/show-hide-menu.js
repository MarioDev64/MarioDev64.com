$( document ).ready(function() {

    var screenWidth = $(window).width();

    if(screenWidth > 767){
        $('#card_menu').show();
    }

    $( "#showMenu" ).click(function() {
        $('#card_menu').removeClass('hideMenu-animation');
        $('#card_menu').show();
        $('#card_menu').addClass('showMenu-animation');
    });

    $( "#hideMenu" ).click(function() {
        $('#card_menu').removeClass('showMenu-animation');
        $('#card_menu').addClass('hideMenu-animation');
        setTimeout(
          function()
          {
            $('#card_menu').hide();
        }, 1000);
    });

});
