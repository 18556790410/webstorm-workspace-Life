/**
 * Created by Tiny Giant on 2018/6/17.
 */

$(document).ready(function () {
    //初始化
    init();

    //初始化工作
    function init(){
        //返回主页
        goHomePage();
        //初始化logo
        initLogo();
        //logo移入移出事件
        logoHover();
        //导航栏移入移出事件
        navigationHover();
        //导航栏点击事件
        navigationClick();
    }

    //导航栏点击事件
    function navigationClick() {
        //生活app点击事件
        navigationAppClick();

        navigationBlogClick();
    }

    //生活app点击事件
    //成员变量：
    //  $navigationApp：生活app按钮的jQuery对象
    //  url：生活app列表的绝对路径
    function navigationAppClick() {
        var $navigationApp = $('.navigationApp');
        var url = getTargetFile('view/page/apps/appList.html');
        $navigationApp.click(function () {
            window.open(url,'_self');
        });
    }

    function navigationBlogClick() {
        var $navigationBlog = $('.navigationBlog');
        var url = getTargetFile('view/page/blogs/blog.html');
        $navigationBlog.click(function () {
            window.open(url,'_self');
        });
    }

    //加载logo
    //成员变量：
    //  $logo：logo的jQuery对象
    //  url：logo的绝对路径
    function initLogo(){
        var $logo = $('.logo');
        var url = getTargetFile('view/img/logo.png');
        $logo.attr({
            src:url
        });
    }

    //返回主页
    //成员变量：$logo：网站logo
    function goHomePage() {
        var $logo = $('.logo');
        $logo.click(function () {
            var home = getTargetFile('view/page/index.html');
            window.open(home,'_self')
        });
    }

    //logo鼠标移入移出事件
    //成员变量：
    //  $logo：logo；
    //  sideFadeWaitingTimer：侧边导航栏消失等待事件ID；
    //Class：disPlayNone，对应样式：display:none
    function logoHover() {
        var $logo = $('.logo');
        var $navigation = $('.navigation');
        $logo.mouseenter(function () {
            var navigationFadeWaitingTimer = sessionStorage.getItem('navigationFadeWaitingTimer');
            if (undefined != navigationFadeWaitingTimer){
                clearTimeout(navigationFadeWaitingTimer);
            }
            $navigation.removeClass('disPlayNone');
        });
        $logo.mouseleave(function () {
            var navigationFadeWaitingTimer = setTimeout(function () {
                $navigation.addClass('disPlayNone');
            },200);
            sessionStorage.setItem('navigationFadeWaitingTimer',navigationFadeWaitingTimer);
        });
    }

    function navigationHover() {
        var $navigation = $('.navigation');
        $navigation.mouseenter(function () {
            var navigationFadeWaitingTimer = sessionStorage.getItem('navigationFadeWaitingTimer');
            if (undefined != navigationFadeWaitingTimer){
                clearTimeout(navigationFadeWaitingTimer);
            }
            $(this).removeClass('disPlayNone');
        });
        $navigation.mouseleave(function () {
            $(this).addClass('disPlayNone');
        });
    }
});