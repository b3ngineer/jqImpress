;var jqImpress = {}, jqImpress = (function($, undefined) {
	$.fn.jqImpress = function(options) {
		var settings = $.extend({ height : 768, width : 1024 }, options),
			jqi = window['jqImpress'];

		return this.each(function() {
			var $this = $(this),
				$previous = null;
			$this.children('.step').each(function(index, item) {
				var $step = $(this),
					classAttr = $step.attr('class'),
					classList = classAttr.split(/\s+/);
				for (var i = 0, length = classList.length; i < length; i++) {
					var currentClass = classList[i],
						helperName = currentClass.replace('jqImpress-', ''),
						helper = jqi[helperName];
					if (!helper) continue;
					if (console && console.log) console.log('Found jqImpress helper: ', helperName);
					helper(index, $step, $previous, settings);
				}
				$previous = $step;
			});
		});
	};

	return jqImpress;
}(jQuery));
