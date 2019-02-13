/**
 * email.js: Display email on click event.
 */
(function ($) {
	/**
	 * Main script object.
	 */
	var Email = {};

	/*
	 * _DOMContentLoaded_ event handler.
	 */
	Email.onContentLoaded = function () {
		// add the click handler to the email veil `<span>`
		$('.email').click(onReveal);
	};

	// reveal _click_ event handler
	Email.onReveal = function (clickEvent) {
		var nativeEvent = clickEvent.originalEvent;

		if (!nativeEvent.isTrusted) {
			return;
		}

		var vemail = $('.vemail');

		if (vemail[0]) {
			return;
		}

		var mailTo = document.createElement('a'),
			username = document.location.hostname.split('.')[1],
			locator = String.fromCodePoint(64),
			provider = 'gmail.com',
			email = username + locator + provider,
			target = clickEvent.target;

		/* Modify target element, append mailto: link. */
		target.textContent = '';
		target.removeAttribute('name');
		target.removeAttribute('class');
		mailTo.setAttribute('href', 'mailto:' + email);
		mailTo.textContent = email;
		target.setAttribute('class', 'vemail');
		target.appendChild(mailTo);
	};

	$(document).ready(Email.onReveal);
}).call(this, jQuery);
