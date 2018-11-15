$(function () {
    var mh = $('.download_button').height();
    var ft = $('.download_button').offset().top;
    $(window).scroll(function () {
        var wt = $(this).scrollTop();
        if (wt > ft - 42) {
            $('.download_button').addClass('fixed');
            $('.tab-main').css('margin-top', mh + 10);
        } else {
            $('.download_button').removeClass('fixed');
            $('.tab-main').css('margin-top', '0px');
        }
    })
})