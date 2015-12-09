'use strict';

var gulp = require('gulp');
var optimize = require('gulp-requirejs-optimize');
var buildJs = require('./www/build');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var buildConfig = typeof buildJs === 'object' ? buildJs: typeof buildJs === 'function' ? (buildJs): {};


gulp.task('optimize', function(){
	return gulp.src("./www/js/**/*.js")
		.pipe(optimize(buildConfig))
		.pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
	return gulp.src([
		"bower_components/bootstrap/fonts/**",
		"bower_components/components-font-awesome/fonts/**"
	]).pipe(gulp.dest("dist/fonts"));
});

gulp.task('img', function() {
	return gulp.src([
		"www/img/**"
	]).pipe(gulp.dest("dist/img"));
})

gulp.task('optimizeCss', ["fonts", "img"], function() {
	return gulp.src([ "www/css/common.css"], {base: "www/css"})
		.pipe(minifyCss({
			rebase: false // don't rebase fonts directoy
		}))
		.pipe(concatCss("bundle.min.css"))
		.pipe(gulp.dest("dist"))
});

gulp.task("default", ["optimize", "optimizeCss"]);
