$(document).ready(function(){

    var displayFormContact = document.getElementById('contact_button');
    var form = document.getElementById('contact_form');
    var close_form = document.getElementById('close_form');
    var displayFormContactMenu = document.getElementById('contact-menu');

    $( displayFormContact ).click(function() {
        $(form).removeClass('contact-close-animation');
        $(displayFormContact).addClass('contact-button-animation');

        setTimeout(
          function()
          {
            $(displayFormContact).hide();
            $(form).addClass('contact-animation');
            form.style.display = "block";

            $(displayFormContact).removeClass('contact-button-animation');

        }, 1000);
        $(form).removeClass('contact-animation');

    });

    $( displayFormContactMenu ).click(function() {
            $(form).removeClass('contact-close-animation');
            $(form).addClass('contact-animation');
            form.style.display = "block";
            setTimeout(
              function()
              {
                  $(form).removeClass('contact-animation');
            }, 500);




    });

    $( close_form ).click(function() {
        form.style.display = "none";
        $(displayFormContact).show();
    });

});
