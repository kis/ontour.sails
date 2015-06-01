module.exports = function(grunt) {

	grunt.config.set('sass', {
		dev: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'assets/sass',
				src: ['all.scss'],
				dest: 'assets/css',
				ext: '.min.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};