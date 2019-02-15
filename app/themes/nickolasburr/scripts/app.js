/**
 * app.js: Main application JS file.
 */
(function ($) {
	var CLASS_BLOCK_HIDDEN = 'block hidden';
	var CLASS_BLOCK_VISIBLE = 'block visible';
	var CLASS_FA_CHEVRONDOWN_CLOSED = 'fa fa-chevron-down closed';
	var CLASS_FA_CHEVRONUP_OPEN = 'fa fa-chevron-up open';
	var SELECTOR_MAIN_CV_WRAPPER = '.main .cv .wrapper';

	/**
	 * Main JS object.
	 */
	var App = {};

	/**
	 * DOMContentLoaded event handler.
	 */
	App.onReady = function () {
		App.initSection();

		$(SELECTOR_MAIN_CV_WRAPPER).each(function (index, element) {
			$(element).find('i').click(App.onToggleSection);
			$(element).find('.fieldname').click(App.onToggleSection);
		});
	}

	/**
	 * Open block section based on document.location.hash.
	 */
	App.initSection = function () {
		var name = document.location.hash.split('#')[1];

		if (!name) {
			return;
		}

		var element = $('[name="' + name + '"]')[0];

		if (!element) {
			return;
		}

		var block = $(element).closest('.wrapper').find('.block')[0];
		var arrow = $(element.parentNode).find('i')[0];

		if ($(block).attr('class').indexOf('hidden') > -1) {
			$(block).attr('class', CLASS_BLOCK_VISIBLE);
			$(arrow).attr('class', CLASS_FA_CHEVRONUP_OPEN);
		}
	};

	/**
	 * Toggle section click event handler.
	 */
	App.onToggleSection = function (clickEvent) {
		var target = clickEvent.target;
		var block = $(target).closest('.wrapper').find('.block')[0];
		var button = $(target.parentNode).find('i')[0];

		if ($(block).attr('class').indexOf('hidden') > -1) {
			$(block).attr('class', CLASS_BLOCK_VISIBLE);
			$(button).attr('class', CLASS_FA_CHEVRONUP_OPEN);
		} else {
			$(block).attr('class', CLASS_BLOCK_HIDDEN);
			$(button).attr('class', CLASS_FA_CHEVRONDOWN_CLOSED);
		}

		$(SELECTOR_MAIN_CV_WRAPPER).each(function (index, element) {
			var thisArrow = $(element).find('i')[0];
			var thisBlock = $(element).find('.block')[0];

			if (thisArrow && $(thisArrow).attr('class') === $(button).attr('class') && thisArrow !== button) {
				$(thisArrow).attr('class', CLASS_FA_CHEVRONDOWN_CLOSED);
			}

			if (thisBlock && $(thisBlock).attr('class') === $(block).attr('class') && thisBlock !== block) {
				$(thisBlock).attr('class', CLASS_BLOCK_HIDDEN);
			}
		});
	}

	$(document).ready(App.onReady);
}).call(this, jQuery);
