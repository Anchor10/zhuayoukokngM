$(function(){
    // 介绍展开收回
    $(".spread").on("click",function(){
        if($(this).find("i").hasClass("U-t")){
            $(this).find("em").html("加载更多");
            $(this).find("i").removeClass("U-t");
            $(".spread-content").removeClass("spreading");
        }else{
            $(this).find("em").html("点击收起");
            $(this).find("i").addClass("U-t");
            $(".spread-content").addClass("spreading");
        }
    })
    // 游戏榜切换
    $(".tab-item").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".list-wrapper").eq($(this).index()).addClass("on").siblings(".list-wrapper").removeClass("on");
    })
})