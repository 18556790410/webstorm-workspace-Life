$(document).ready(function () {

    
    //标题类
    //
    function Title(title) {
        var className = title[0].className
        this.titleName = className.substring(className.indexOf(' ')+1,className.indexOf('Title'));
        this.pre = title.find('.pre');
        this.otherTitles = title.siblings('.title');

        this.preRotate = function () {
            this.pre.addClass('preRotate');
            this.otherTitles.removeClass('preRotate');
        }
        this.dark = function () {
            title.css({
                'background-color' : 'rgba(56,56,56,1)'
            });
            this.otherTitles.css({
                'background-color' : 'rgba(56,56,56,0.8)'
            });
        }
        this.showTargetFrame = function () {
            var targetFrameClassName = '.' + this.titleName + 'Frame';
            var $targetFrame = title.closest('.preview').find(targetFrameClassName);
            $targetFrame.removeClass('disPlayNone');
            var $others = $targetFrame.siblings('.frame');
            $others.addClass('disPlayNone');
        }
    }

    titleItemClick();
    deleteClick();
    logItemClick();
    logDetailFrameClick();


    function titleItemClick() {
        var $titles = $('.title');
        $titles.each(function () {
            $(this).click(function () {
                var title = new Title($(this));
                title.preRotate();
                title.dark();
                title.showTargetFrame();
            });
        });
    }

    function deleteClick() {
        var $deletes = $('.delete');
        $deletes.each(function () {
            $(this).click(function () {
                event.stopPropagation();
                
            });
        });
    }
    
    function logItemClick() {
        var $logs = $('.log');
        $logs.each(function () {
            $(this).click(function () {
                popDialog($('.logDetailFrame'));
                $(this).css({
                    'background-color':'rgba(56,56,56,0.1)'
                });
                $(this).siblings('.log').css({
                    'background-color':'white'
                });
            });
        });
    }

    function logDetailFrameClick() {
        $('.logDetailFrame').click(function () {
            closeDialog($('.logDetailFrame'));
        });
    }

});