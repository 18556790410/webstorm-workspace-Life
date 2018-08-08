/**
 * Created by Tiny Giant on 2018/6/17.
 */

//初始化公共组件
//参数：modules:需要被初始化的jQuery组件对象数组，例：$('#header')
//成员变量：
//  webRoot：网站根目录，例：‘http://localhost:63342/workspace/Life/’
//  moduleURL：公共组件绝对路径，例：‘http://localhost:63342/workspace/Life/page/module/header.html’
function initModule(modules){
    //清空localStorage
    // localStorage.clear();
    //将webRoot写入sessionStorage
    var href = window.location.href;
    var projectName = 'Life';
    var webRoot = href.substring(0,href.indexOf(projectName)+5);
    // localStorage.setItem('webRoot',webRoot);
    sessionStorage.setItem('webRoot',webRoot);
    //加载module
    var moduleRoot = 'view/page/module/';
    var extraName = '.html';
    $.each(modules,function (i,n) {
        var id = n[0].id;
        var moduleURL = webRoot + moduleRoot + id + extraName;
        n.load(moduleURL);
    })
}

//获得目标文件绝对路径
//参数：relativeURL:当前文件先对路径，例：js/public.js
function getTargetFile(relativeURL){
    // var webRoot = localStorage.getItem('webRoot');
    var webRoot = sessionStorage.getItem('webRoot');
    var targetURL = webRoot + relativeURL;
    return targetURL;
}

//底部弹出提示消息
//参数：message：消息字符串
//成员变量：$tip：自定义的常用组件,消息展示的容器
//Class：disPlayNone：对应样式 display:none
function showTip(message) {
    var $tip = $('.tip');
    $tip.removeClass('disPlayNone');
    $tip.html(message);
    $tip.fadeOut(1500,function () {
        $tip.removeAttr('style');
        $tip.addClass('disPlayNone');
        $tip.html(null);
    });
}

//弹出小窗口
//参数：obj：需要弹出的jQuery对象
//成员变量：$disabledWaller：自定义的常用组件，幕布
//Class：disPlayNone：对应样式 display:none
function popDialog(obj) {
    var $disabledWaller = $('.disabledWaller');
    $disabledWaller.removeClass('disPlayNone');
    obj.removeClass('disPlayNone');
}

//关闭小窗口
//参数：obj：需要关闭的jQuery对象
//成员变量：$disabledWaller：自定义的常用组件，幕布
//Class：disPlayNone：对应样式 display:none
function closeDialog(obj) {
    var $disabledWaller = $('.disabledWaller');
    $disabledWaller.addClass('disPlayNone');
    obj.addClass('disPlayNone');
}

