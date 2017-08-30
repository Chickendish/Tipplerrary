var gulp = require('gulp');
var jshint = require('gulp-jshint');
var fixmyjs = require("gulp-fixmyjs");

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(fixmyjs());
});