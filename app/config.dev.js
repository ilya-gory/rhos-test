System.config({
	baseURL: '/app',
	paths:   {
		backbone:              'bower_components/backbone/backbone.js',
		lodash:                'bower_components/lodash/lodash.js',
		'backbone.marionette': 'bower_components/backbone.marionette/lib/backbone.marionette.js',
		'backbone.radio':      'bower_components/backbone.radio/build/backbone.radio.js',
		traceur:               'bower_components/traceur/traceur.js',
		jquery:                'bower_components/jquery/dist/jquery.js',
		text:                  'bower_components/systemjs-plugin-text/text.js',
		json:                  'bower_components/plugin-json/json.js'
	},
	map:     {
		bb:         'backbone',
		mn:         'backbone.marionette',
		$:          'jquery',
		_:          'lodash',
		underscore: 'lodash',
		ra:         'backbone.radio'
	},
	meta:    {
		lodash:   {
			format: 'global'
		},
		'*.json': {
			loader: 'json'
		},
		'*.html': {
			loader: 'text'
		}
	}
});
System.import('main.js');