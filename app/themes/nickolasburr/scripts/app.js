(function ($) {
	$(document).ready(onReady);
	// _DOMContentLoaded_ event handler
	function onReady () {
		// add _click_ handlers to each section arrow
		$('.main .cv .wrapper .row i').each(function () {
			$(this).click(onToggleSection);
		});
		// add _click_ handlers to each review button
		$('.main .special i').each(function () {
			// $(this).click(onToggleReview);
		});
	}
	/**
	*
	* sections (blocks) event handlers
	*
	*/
	// toggle section _click_ event handler
	function onToggleSection (clickEvent) {
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
		// update the other blocks and buttons
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
	/**
	*
	* reviews event handlers
	*
	*/
	// toggle review _click_ event handler
	function onToggleReview (clickEvent) {
		var contentHolder = $(this).closest('.book').find('.review');
		var classAttr = contentHolder.attr('class');
		if (classAttr.indexOf('hidden') > -1) {
			contentHolder.attr('class', contentHolder.attr('class').split('hidden')[0].trim() + ' visible');
			$(this).attr('class', 'fa fa-chevron-up open');
			return closeOpenReviews(this);
		}
		contentHolder.attr('class', contentHolder.attr('class').split('visible')[0].trim() + ' hidden');
		$(this).attr('class', 'fa fa-chevron-down closed');
		return closeOpenReviews(this);
	}
	// close open reviews and limit one open review at a time
	function closeOpenReviews (activeElement) {
		$('.main .special i').each(function (index, element) {
			if ($(element).attr('class') === $(activeElement).attr('class') && element !== activeElement) {
				var contentHolder = $(element).closest('.book').find('.review');
				contentHolder.attr('class', contentHolder.attr('class').split('visible').length > 1 ? contentHolder.attr('class').split('visible')[0].trim() + ' hidden' : contentHolder.attr('class'));
				$(element).attr('class', 'fa fa-chevron-down closed');
			}
		});
	}
}).call(this, jQuery);
