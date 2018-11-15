$(function () {
    var ft = $('.download_button').offset().top;
    $(window).scroll(function () {
        var wt = $(this).scrollTop();
        if (wt > ft - 10) {
            $('.download_button').addClass('fixed');
            $('.p2').css('margin-top', 10);
        } else {
            $('.download_button').removeClass('fixed');
            $('.p2').css('margin-top', '0px');
        }
    })
})

// 游戏截图
$(function(){
    $("#slide2 .swiper-slide").on("click", function () {
        $(".logbg").show();
         $("#slide1").show();
         mySwiper1.slideTo($(this).index());
      })
      $("#slide1 .swiper-slide").on("click", function () {
        $(".logbg").hide();
        $("#slide1").hide();
      })
      var mySwiper1 = new Swiper('#slide1', {
        width: $(window).width() * 0.95,
        hiehgt: ($(window).height() * 0.7),
        freeMode: false,
        pagination: {
            el: '#pagination1',
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      })
      setTimeout(swiper2,1000)
      function swiper2(){
        var mySwiper2 = new Swiper('#slide2', {
            pagination: {
                el: '#pagination2',
              },
            slidesPerView : 'auto',
            spaceBetween: 10,
          })
      }
})
