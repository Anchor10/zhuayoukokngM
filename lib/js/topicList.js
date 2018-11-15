// banner
$(function(){
  var swiper1 = new Swiper('#swiper1', {
    autoplay: {
      delay: 2000, //1秒切换一次
    },
    pagination: {
      el: '.swiper-pagination',
    }
  })
})
// 专题列表切换
$(function () {
  var num = sessionStorage.getItem('num'); //取值
  if(num){
    $(".nav-title").eq(num).addClass("cur").siblings().removeClass("cur");
    $(".t-list").eq(num).show().siblings(".t-list").hide();
  }
  $(".t-nav").on("click", ".nav-title", function () {
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".t-list").eq($(this).index()).show().siblings(".t-list").hide();
    sessionStorage.setItem('num',$(this).index());//存值
  })
})