var gulp = require('gulp');
var util = require('gulp-util');
var plugz = require('gulp-load-plugins')({lazy: true});

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('vet', function(){
	log('Checking source with JSHint and JSCS - ');
	return gulp
	.src(jsFiles)
	.pipe(plugz.jscs())
	.pipe(plugz.jshint())
	.pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});


gulp.task('inject',function(){
	var wiredep = require('wiredep').stream;
	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib'
	};

	return gulp
	.src('.src/views/*.html')
	.pipe(wiredep(options))
	.pipe(plugz.inject(gulp.src()))
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