/**
 * Created by Tiny Giant on 2018/6/17.
 */

$(document).ready(function () {
    //初始化 头部，边侧导航栏，尾部公用组件
    initModule([$('#footer')]);
    //生活app点击事件
    appClick();

    //生活app点击事件
    //成员变量：$app：生活app按钮的jQuery对象
    function appClick(){
        var $app = $('.app');
        $app.click(function () {
            var url = getTargetFile('page/apps/appList.html');
            window.open(url,'_self');
        });
    }
});