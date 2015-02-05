module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'concat:frontend',
		'jst:dev',
		// 'less:dev',
		'sass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
