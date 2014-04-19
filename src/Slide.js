;(function(jqi, $, undefined) {

	function Slide(index, $step, $previous, options) {
		var x = $step.attr('data-x'),
			y = $step.attr('data-y');

		if (!x) x = index * options.width;
		if (!y) y = 0;

		console.log(x);

		$step.attr({'data-x' : x, 'data-y' : y });
		return this;
	}

	jqi.Slide = Slide;

}(jqImpress, jQuery));
