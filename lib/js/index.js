$(function(){
    var mySwiper = new Swiper(".swiper-container", {
        autoplay: {
            delay:3000,
            disableOnInteraction: false,
        },
        pagination : {
            el: ".swiper-pagination",
            type:"progressbar",
        },
    })
})

// tab 切换
$(function(){
    $('.game-tab li').click(function () {
        var index = $(this).index();
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $('.ios_recommend').eq(index).show().siblings('.ios_recommend').hide();
    })
    $('.news-tab li').click(function () {
        var index = $(this).index();
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $('.newsmain').eq(index).show().siblings('.newsmain').hide();
        if ($('.news-tab li').eq(1).hasClass('hover')) {
            $('.changet').html('游戏资讯');
        } else {
            $('.changet').html('游戏攻略');
        }
    })
})
//首页专题切换
$(function(){
    $('.topic-tab li').click(function () {
                var index = $(this).index();
                $(this).addClass('hover').siblings('li').removeClass('hover');
                $('.an_ios_center').eq(index).show().siblings('.an_ios_center').hide();
                if ($('.topic-tab li').eq(1).hasClass('hover')) {
                    $('.changett').html('最新专题');
                } else {
                    $('.changett').html('热门专题');
                }
            })
})