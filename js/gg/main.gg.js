$(document).ready(function () {
    var gums_count = 0;

    $('.gum').click(function () {
        if ($(this).hasClass('no_gum_selected')) {
            var gum_click = $(this).attr('value');
            //            alert('gum number ' + gum_click);
            pick_gum(gum_click);
        }

        if (!$(this).hasClass('zero_percent')) {
            gums_count++;
        }

        if ($(this).hasClass('zero_percent')) {
            gums_count--;
        }
        $(this).toggleClass('zero_percent')

        check_gum_count();
    });

    function check_gum_count() {
        if (gums_count === 5) {
            $('.gum').removeClass("zero_percent");
            gums_count = 0;
        }
    };

    function pick_gum(gum_click) {
        $('.gum_ball_' + gum_click).removeClass('no_gum_selected');
        $('.gum_ball_' + gum_click).addClass('z-drop');
        $('.gum_ball_' + gum_click).children().toggleClass('show');
    };
});