$(document).ready(function () {



    function Title(title) {
        var className = title[0].className
        this.titleName = className.substring(className.indexOf(' ')+1,className.indexOf('title',2));
        this.pre = title.find('.pre');
        this.otherTitles = title.siblings('.title');

        this.preRotate = function () {
            this.pre.addClass('preRotate');
            this.otherTitles.each(function () {
                $(this).find('.pre').removeClass('preRotate');
            });
        }
        this.dark = function () {
            title.css({
                'background-color' : 'rgba(56,56,56,1)'
            });
            this.otherTitles.each(function () {
                $(this).css({
                    'background-color' : 'rgba(56,56,56,0.8)'
                });
            });
        }
        this.showTargetFrame = function () {
            var targetFrameClassName = '.' + this.titleName + 'Frame';
            var $targetFrame = title.closest('.preview').find(targetFrameClassName);
            $targetFrame.removeClass('disPlayNone');
            var $others = $targetFrame.siblings('.frame');
            $others.each(function () {
                $(this).addClass('disPlayNone');
            });
        }
    }

    titleItemClick();


    function titleItemClick() {
        var $titles = $('.title');
        $titles.each(function () {
            $(this).click(function () {
                var title = new Title($(this));
                title.preRotate();
                title.dark();
                // title.showTargetFrame();
            });
        });
    }

});