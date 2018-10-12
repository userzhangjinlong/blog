$(document).ready(function() {
    $('.arrow-down').click(function() {
        var height = $('.page-header').height();
        nowuiKit.scrollToMain(height);
    });
});