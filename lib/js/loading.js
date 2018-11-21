//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;

//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="position:fixed;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#66ceff;opacity:1;filter:alpha(opacity=80);z-index:10000;"><img style="width:100%;position:absolute;top:-80px;left:0;right:0;bottom:0;margin:auto;" src="lib/images/page-loading.gif"></div>';
//呈现loading效果
document.write(_LoadingHtml);
loading();
function loading(){
    var loadingMask = document.getElementById('loadingDiv');
    //延时器,2秒超时移除loading效果
    var temp = setTimeout(function(){   
        loadingMask.parentNode.removeChild(loadingMask);
        return false;
    },2000)
    //监听加载状态改变,加载状态为complete时移除loading效果
    document.onreadystatechange = function(){
        if (document.readyState == "complete") {
            if(loadingMask.parentNode){
                loadingMask.parentNode.removeChild(loadingMask);
                clearTimeout(temp);
            }
        }
    };
}