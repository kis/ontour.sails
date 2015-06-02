module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'ngtemplates',
		'concat:frontend',
		'jst:dev',
		// 'less:dev',
		'sass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
