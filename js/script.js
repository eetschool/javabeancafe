$(document).ready(function() {
    $("#jqueryelement").hover(function() {
        $(this).css("color", "gray");
    },
    function() {
        $(this).css("color", "blue");
    });
});