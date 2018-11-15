// 展开更多
$(function () {
    var n = $(".yxk-cont1 li").length;
    var a = true;
    $(".yxk-cont1 li span").click(function () {
        if (a) {
            for (var i = 7; i < n - 1; i++) {
                $(".yxk-cont1 li").eq(i).css("display", "block");
            }
            $(".yxk-cont1 li span").text("收起部分");
            a = false;
        } else {
            for (var i = 7; i < n - 1; i++) {
                $(".yxk-cont1 li").eq(i).css("display", "none");
            }
            $(".yxk-cont1 li span").text("展开更多");
            a = true;
        }

    });
})