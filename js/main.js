// START PLUG-INS MATERIALIZE
$(document).ready(function () {
    $('.button-collapse').sideNav();
    $('.modal').modal();
    $('select').material_select();
});

// CHAT
$('#input-bar').on('submit', function () {
    event.preventDefault();
    var input = $('#input', event.currentTarget);
    core.chat();
});

// TOOLS
$('select', '#zoom').on('change', function () {
    $('#view').css('zoom', $('select', '#zoom').val());
});