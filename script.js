document.querySelector('input').onkeypress = function(e) {
	var char = String.fromCharCode(e.charCode);
	if (char < '0' || '9' < char) {
		return false;
	}
};

$(document).ready(function () {

	var calc = $('.calculator');
	var calcDisplay = calc.find('.calc_display');
	var calcKeys = calc.find('.calc_key');
	var calcButton = calc.find('.calc_button');
	var clear = calc.find('.clear_button');
	var result = calc.find('.result');
	var backpace = calc.find('.backspace_button');

	calcKeys.each(function () {
		var current = $(this).attr('value');
		$(this).text(current);
	});

	calcButton.on('click', function () {
		calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
	});

	clear.on('click', function () {
		calcDisplay.val('');
	});

	result.on('click', function () {
		calcDisplay.val( eval( calcDisplay.val() ) );
	});

	backpace.on('click', function () { 
		calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
	});
});