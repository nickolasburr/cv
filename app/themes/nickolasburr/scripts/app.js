/**
 * app.js: Main application JS file.
 */
(function ($) {
	var App = {};

	// DOMContentLoaded event handler.
	App.onReady = function () {
		$('.main .cv .wrapper .row i').each(function () {
			$(this).click(App.onToggleSection);
		});
	}

	// Toggle section click event handler.
	App.onToggleSection = function (clickEvent) {
		var buttonClass, blockClass;
		var block = $(this).closest('.wrapper').find('.block');
		var button = this;
		var currentClass = block.attr('class');

		if (currentClass.indexOf('hidden') > -1) {
			blockClass  = 'block visible';
			buttonClass = 'fa fa-chevron-up open';
		} else {
			blockClass  = 'block hidden';
			buttonClass = 'fa fa-chevron-down closed';
		}
		$(block).attr('class', blockClass);
		$(this).attr('class', buttonClass);

		// Update the other blocks and buttons
		$('.main .cv .wrapper .row i').each(function (index, element) {
			if ($(element).attr('class') === $(button).attr('class') && element !== button) {
				$(element).attr('class', 'fa fa-chevron-down closed');
			}
		});
		$('.main .cv .wrapper .row .block').each(function (index, element) {
			if ($(element).attr('class') === $(block).attr('class') && element !== block[0]) {
				$(element).attr('class', 'block hidden');
			}
		});
	}

	$(document).ready(onReady);
}).call(this, jQuery);
