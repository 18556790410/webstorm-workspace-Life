/**
 * Created by Tiny Giant on 2018/6/20.
 */

$(document).ready(function () {
    //初始化
    init();

    //初始化
    function init(){
        //初始化头部、侧边导航栏、尾部公共组件
        initModule([$('#header'),$('#footer')]);
    }
});