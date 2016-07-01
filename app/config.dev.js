System.config({
	baseURL: '/app',
	paths:   {
		backbone:              'bower_components/backbone/backbone.js',
		lodash:                'bower_components/lodash/lodash.js',
		'backbone.marionette': 'bower_components/backbone.marionette/lib/backbone.marionette.js',
		traceur:               'bower_components/traceur/traceur.js',
		jquery:                'bower_components/jquery/dist/jquery.js'
	},
	map:     {
		bb:         'backbone',
		mn:         'backbone.marionette',
		$:          'jquery',
		_:          'lodash',
		underscore: 'lodash'
	},
	meta:    {
		lodash:   {
			format: 'global'
		},
		'*.json': {
			loader: 'json'
		}
	}
});
System.import('main.js');