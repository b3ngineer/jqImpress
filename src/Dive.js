;(function(jqi, $, undefined) {

	function Dive(index, $step, $previous, options) {
		var z = $step.attr('data-z'),
			x = $previous.attr('data-x'),
			y = $previous.attr('data-y');

		if (!z) z = -2000;
		else z = parseInt(z) - 2000;
		$step.attr({'data-z' : z, 'data-x' : x, 'data-y' : y });
		return this;
	}

	jqi.Dive = Dive;

}(jqImpress, jQuery));
