;(function(jqi, $, undefined) {

	function Corner(index, $step, $previous, options) {
		var z = $previous.attr('data-z'),
			x = $previous.attr('data-x'),
			y = $previous.attr('data-y');

		x = parseInt(x) + options.width / 2;
		z = parseInt(z) - options.width / 2;

		$step.attr({'data-z' : z, 'data-x' : x, 'data-y' : y, 'data-rotate-y' : 90 });
		return this;
	}

	jqi.Corner = Corner;

}(jqImpress, jQuery));
