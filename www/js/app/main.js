define([
			'jquery',
			'ractive',
			'app/util/smoothScroll',
			'rvc!app/components/nav',
			'rvc!app/components/intro',
			'rvc!app/components/about',
			'rvc!app/components/contact',
			'rvc!app/components/footer',
			'bootstrap'
		], function ( $, Ractive, SmoothenScroll, Nav, Intro, About, Contact, Footer ) {

	'use strict';

	// Ractive.decorators.smoothenScroll = SmoothenScroll;



	new Nav({
		el: 'body',
		append: true
	});

	new Intro({
		el: 'body',
		append: true
	});

	new About({
		el: 'body',
		append: true
	});

	new Contact({
		el: 'body',
		append: true
	});

	// new Footer({
	// 	el: 'body',
	// 	append: true
	// });

});
