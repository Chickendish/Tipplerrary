var gulp = require('gulp');
var plugz = require('gulp-load-plugins')({lazy: true});

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('vet', function{
	log('Checking source with JSHint and JSCS - ');
	return gulp
	.src(jsFiles)
	.pipe(JSCS())
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});


gulp.task('inject',function(){
	var wiredep = require('wiredep').stream;
	var inject = require('gulp-inject');
	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib'
	}

	return gulp.src('.src/views/*.html')
	.pipe(wiredep(options))
	.pipe(gulp.dest('.src/views'));

});

/////////////////////////////////////////////////////

function log(msg){
	if (typeof(msg) ==='object'){
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				util.log(util.colors.blue(msg[item]));
			}
		}
	} else {
		util.log(util.colors.blue(msg));
	}
}