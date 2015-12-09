//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
// requirejs.config({
//     baseUrl: 'js',
//     paths: {
//         app: './app',
//         jquery: 'empty:'
//     }
// });

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
