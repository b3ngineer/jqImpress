;(function(jqi, $, undefined) {

	function Domino(index, $step, $previous, options) {
		var z = $step.attr('data-z') || $previous.attr('data-z'),
			x = $step.attr('data-x') || $previous.attr('data-x'),
			y = $step.attr('data-y') || $previous.attr('data-y');

		if ($previous.hasClass('jqImpress-Domino')) {
			if (options._dominoNumber == 0) {
				z = parseInt(z) - options.height / 2;
				y = parseInt(y) + options.height / 2;
			}
			else if (options._dominoNumber == 1) {
				y = parseInt(y) + options.height / 2;
				z = parseInt(z) + options.height / 2;
			}
			$step.attr({'data-z' : z, 'data-x' : x, 'data-y' : y, 'data-rotate-x' : ++options._dominoNumber * 90 });
		}
		else {
			options._dominoNumber = 0;
			$step.attr({'data-z' : z, 'data-x' : x, 'data-y' : y });
		}

		return this;
	}

	jqi.Domino = Domino;

}(jqImpress, jQuery));
