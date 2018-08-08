/**
 * Created by Tiny Giant on 2018/6/18.
 */

$(document).ready(function () {

    //初始化
    init();

    //初始化
    function init(){
        //初始化头部
        initModule([$('#header')]);

        //android端下载按钮鼠标移入移出事件
        androidDownloadHover();

        //详细信息按钮点击跳转
        infoClick();

        originalSourceClick();
    }

    //详细信息按钮点击跳转
    //成员变量：
    //  $infos：所有的详细信息按钮jQuery对象
    //  id：该app的编号
    function infoClick() {
        var $infos = $('.info');
        $infos.each(function () {
            $(this).click(function () {
                var id = $(this).closest('.app').find('.id').val();
                id = Number(id);
                sessionStorage.setItem('appID',id);
                window.open('appInfo.html','_blank');
            });
        });
    }

    //android端下载按钮鼠标移入移出事件
    //成员变量：
    //  $androidDownloads：所有的安卓端下载按钮jQuery对象；
    //  $androidQRFrame：android下载二维码框架jQuery对象；
    //  Class：disPlayNone，对应样式：display:none
    function androidDownloadHover() {
        var $androidDownloads = $('.androidDownload');
        $androidDownloads.each(function () {
            var $appDetails = $(this).closest('.appDetails');
            var $downloadQRFrame = $appDetails.find('.downloadQRFrame');
            $(this).mouseenter(function () {
                $downloadQRFrame.removeClass('disPlayNone');
            });
            $(this).mouseleave(function () {
                $downloadQRFrame.addClass('disPlayNone');
            });
        });
    }
    
    function originalSourceClick() {
        var $originalSources = $('.originalSource');
        $originalSources.each(function () {
            $(this).click(function () {
                var $appDetails = $(this).closest('.appDetails');
                var appName = $appDetails.find('.appName').html().trim();
                var url = 'https://github.com/18556790410/eclipse-workspace-' +appName+ '/';
                window.open(url,'_blank');
            });
        });
    }
});