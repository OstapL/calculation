$(document).ready(function()
{

    $('#toggle_click').click(function()
    {
        if ($(this).hasClass('opened')) {
            $('#toggle_menu').fadeOut('normal');
            $(this).removeClass('opened');
        }else{
            $('#toggle_menu').fadeIn('normal');
            $(this).addClass('opened');
        }
    });

    $('select.selpicker').selectpicker();

});
