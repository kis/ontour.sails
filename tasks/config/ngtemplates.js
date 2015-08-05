module.exports = function(grunt) {

	grunt.config.set('ngtemplates', {
		app: { 
			src: 'frontend/templates/*.html',
			dest: 'frontend/ontour_templates.js',
			options: {
				htmlmin: '<%= htmlmin %>',
				bootstrap: function(module, script) {
					return 'angular.module("ontour").run(["$templateCache", function ($templateCache) {' + script + '  } ]);';
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-angular-templates');
};