$(function () {
    $('[data-toggle="popover"]').popover()
});

var create = function () {
    var title = $("#title").val();
    if (title === "") {
        // Null title, show error
        $("#new-button").popover('show');
    }
};