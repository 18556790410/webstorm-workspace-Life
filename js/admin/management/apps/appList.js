$(document).ready(function () {

    var $queryDeleteFrame = $('.queryDeleteFrame');
    var $disabledWaller = $('.disabledWaller');
    var $deleteTip = $('.deleteTip');
    var $cancel = $('.cancel');
    var $query = $('.query');

    function App(app) {
        this.id = Number(app.find('.id').val().trim());
        this.number = app.find('.number').html().trim();
        this.name = app.find('.name').html().trim();
    }

    updateClick();
    deleteClick();
    appItemClick();

    function appItemClick() {
        var $apps = $('.app');
        $apps.each(function () {
            $(this).click(function () {
                var app = new App($(this));
                sessionStorage.setItem('appID',app.id);
                var url = '/Life/page/apps/appInfo.html';
                window.open(url,'_blank');
            });
        });
    }

    function deleteClick() {
        var $deletes = $('.delete');
        $deletes.each(function () {
            $(this).click(function () {
                event.stopPropagation();
                var $app = $(this).closest('.app');
                var app = new App($app);
                popDeleteFrame(app.id,app.name);
            });
        });
    }

    function updateClick() {
        var $updates = $('.update');
        $updates.each(function () {
            $(this).click(function () {
                event.stopPropagation();
                var app = new App($(this).closest('.app'));
                sessionStorage.setItem('appID',app.id);
                var url = 'appUpdate.html';
                window.open(url,'_blank');
            });
        });
    }

    function popDeleteFrame(id,name) {
        var tip = '真的要删除' + name + '吗？';
        $deleteTip.html(tip);
        $disabledWaller.removeClass('disPlayNone');
        $queryDeleteFrame.removeClass('disPlayNone');
        $disabledWaller.bind('click',function () {
            $queryDeleteFrame.addClass('disPlayNone');
            $disabledWaller.addClass('disPlayNone');
            $disabledWaller.unbind('click');
        });
        $cancel.bind('click',function () {
            $queryDeleteFrame.addClass('disPlayNone');
            $disabledWaller.addClass('disPlayNone');
            $cancel.unbind('click');
        });
        $query.bind('click',function () {
            $queryDeleteFrame.addClass('disPlayNone');
            $disabledWaller.addClass('disPlayNone');
            console.log(id);
            $query.unbind('click');
        });
    }

});