const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('web-hr', function() {
	gulp.src('./scss/*.scss')
	.pipe(sass({
		outputStyle: 'expanded',
		// outputStyle: 'compact'
		// outputStyle: 'compresed'
	}))
	.pipe(autoprefixer({
		versions: ['last 2 browsers']
	}))
	.pipe(gulp.dest('./css'))
});

gulp.task('default', function() {
	gulp.watch('./scss/*.scss', ['web-hr'])
});