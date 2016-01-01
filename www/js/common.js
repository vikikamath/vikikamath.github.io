require.config({

	baseUrl: 'js',

	paths: {
		ractive: '../../../bower_components/ractive/ractive',
		rvc: '../../../bower_components/rvc/dist/rvc',
		jquery: '../../../bower_components/jquery/dist/jquery.min',
		bootstrap: '../../../bower_components/bootstrap/dist/js/bootstrap.min',
		app: './app'
	},

	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	}
});
