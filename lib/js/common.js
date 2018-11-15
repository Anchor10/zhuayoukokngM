$(function() {
    $(".load").hide();
    $(".goTop").hide()
    // 返回顶部
    $(".goTop").bind('click', function() {
      $("html,body").animate({
        scrollTop : 0
      }, 500)
    })
  })
  // 显示回到顶部
  $(window).bind('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 300) {
      $(".goTop").show()
    } else {
      $(".goTop").hide()
    }
  });
  //懒加载
  $(function(){
    $("img[data-original]").lazyload({
        threshold: 200,
        skip_invisible: false,
        failurelimit: 2000,
        effect:"fadeIn",
    })
  })
// 登录
$(function() {
  var clientH = document.body.clientHeight-2048;
  var liW = document.body.clientWidth - 20;
  var dot = $('#dot');
  var bar = $('#menu-bar');

  dot.on('click', function() {
    $('.logbg').show();
    bar.animate({
      'right' : '0%'
    })
  });

  $('#userBtn1').bind('click', function() {
    $('.logbg').css({
      'height' : clientH
    }).show();
    $('.userInfo')/*.css({
      'height' : clientH
    })*/.show();
    $('.userInfo').animate({
      'left' : "20%"
    }, function() {
      $('body').bind('touchmove', stopScroll);
    });
  });

  $('.userBtn2').bind('click', hideUser);
  $('.logbg').bind('click', hideUser);
  function hideUser() {
    $('.userInfo').animate({
      'left' : "100%"
    }, function() {
      $('body').unbind('touchmove', stopScroll);
      $('.logbg').hide();
    });
    bar.animate({
      'right' : '-100%'
    }, function() {
      $('body').unbind('touchmove', stopScroll);
      $('.logbg').hide();
    });
  }
  function stopScroll(e) {
    e.preventDefault();
  }

})
// 搜索框
var keyword;
function inText(elem) {
  if (keyword == null || keyword == $(elem).val()) {
    keyword = $(elem).val();
    $(elem).val('');
  }
}

function outText(elem) {
  if ($(elem).val().length == 0) {
    $(elem).val(keyword);
    keyword = null;
  }
}