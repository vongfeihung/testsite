// alert("Здарова");
$('document').ready(function() {
$("body").append('<a href="http://google.com">Перейти в гугл!</a>');
// $('p').remove();
// $('p').clone();
// var p_clon;
// p_clon = $('p').clone();
// $('body').append(p_clon);
$('input').on('keyup', function() {
var value1, value2, value3;
value1 = $('#val1').val();
value2 = $('#val2').val();

value1 = parseInt(value1);
value2 = parseInt(value2);
value3 = value1 + value2
// $('#rezultat').val(value3);
$('#rezultat').html(value3);
});

});