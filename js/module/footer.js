/**
 * Created by Tiny Giant on 2018/6/17.
 */

init();

function init(){
    if ('undefined' != typeof $){
        setTimeout(function () {
            init();
        },100);
    }
    initQRCode();
}


function initQRCode(){
    var $qrCode = $('.qrCode');
    var src = getTargetFile('img/QRCode.png');
    $qrCode.attr({
        src:src
    });
}