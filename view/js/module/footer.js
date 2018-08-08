/**
 * Created by Tiny Giant on 2018/6/17.
 */


$(document).ready(function () {

    initQRCode();

    function initQRCode(){
        var $qrCode = $('.qrCode');
        var src = getTargetFile('view/img/QRCode.png');
        $qrCode.attr({
            src:src
        });
    }
});