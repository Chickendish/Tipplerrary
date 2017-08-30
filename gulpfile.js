var gulp = require('gulp');
var jshint = require('gulp-jshint');
var fixmyjs = require("gulp-fixmyjs");

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(fixmyjs());
});

gulp.task('inject',function(){
	var wiredep = require('wiredep').stream;
	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib'
	}

	return gulp.src('.src/views/*.html')
	.pipe(wiredep(options))
	.pipe(gulp.dest('.src/views'));

})