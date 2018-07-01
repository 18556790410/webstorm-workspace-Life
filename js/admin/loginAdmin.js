/**
 * Created by TinyGiant on 2018/7/1.
 */
$(document).ready(function () {
    function dynamicKeyFocus() {
        var $dynamicKey = $('.dynamicKey');
        $dynamicKey.focus();
    }

    function loginClick() {
        console.log('login');
    }

    function keyEnterInput() {
        $(document).keydown(function () {
            if (13 == event.keyCode){

            }
        });
    }

    keyEnterInput();
    
    dynamicKeyFocus();
});