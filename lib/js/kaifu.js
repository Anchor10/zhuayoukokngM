// 开服切换
$(function () {
    $('.kf-tab li').click(function () {
        var index = $(this).index();
        $(this).find('a').addClass('select');
        $(this).siblings().find('a').removeClass('select');
        $('.kflist').eq(index).show().siblings('.kflist').hide();
    })
})
