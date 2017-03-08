//styles task
//node.js, we using node to create a file like('fs')
var gulp = require('gulp'), //require package name gulp
	postcss = require('gulp-postcss'),
	cssImport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	autoprefixer = require('autoprefixer'),
	mixins = require('postcss-mixins');

gulp.task('styles', function() {
	//console.log('Imagine Sass or PostCSS tasks running here.');
return gulp.src('./app/assets/styles/styles.css') //start
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //the filter
	//when error in the style file, the git watch not stop running
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString()); //show error msg in the console
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles')); //finish..finish in a folder/file temp/styles
});