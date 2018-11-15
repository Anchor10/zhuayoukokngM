// 轮播
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
