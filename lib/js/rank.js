$(function(){
  var swiper1 = new Swiper('#swiper1', {
    autoplay: {
          delay: 2000,//1秒切换一次
        },
        pagination: {
          el: '.swiper-pagination',
        }
  })
})

// 热门和新游切换
$(function(){
  $('.tab-item').on("click",function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".game-list").eq($(this).index()).show().siblings(".game-list").hide();
  })
})