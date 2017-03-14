//node.js, we using node to create a file like('fs')
//var gulp = require('gulp'), //require package name gulp
	//watch = require('gulp-watch'), //
	//postcss = require('gulp-postcss'), style
	//autoprefixer = require('autoprefixer'), style
	//cssvars = require('postcss-simple-vars'), style
	//nested = require('postcss-nested'), style
	//cssImport = require('postcss-import'), style
	//browserSync = require('browser-sync').create();

//gulp(var),  mathod name task and 2arguments, 1st what we want to name the
//task(default), 2nd what happen when the task run(function)
/*
dommie tast
gulp.task('default', function() {
	console.log('Hooray - you created a Gulp task')
});*/

//watch html
/*
dommie task
gulp.task('html', function() {
	console.log('Imagine somthing useful being done to your HTML here.');
}); //everytime we save it will show the line on the command line
*/
//watch css --move to gulp/tasks/styles.js
/*gulp.task('styles', function() {
	//console.log('Imagine Sass or PostCSS tasks running here.');
return gulp.src('./app/assets/styles/styles.css') //start
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //the filter
	.pipe(gulp.dest('./app/temp/styles')); //finish..finish in a folder/file temp/styles
});*/


	//2arguments, name, what it will do(function)
/*gulp.task('watch', function() {

	//make auto refresh browser
	browserSync.init({ //setup few setting
		//notify: false, //make the box on the right top cornet disapear when save
		server: { //tell the browserSync where our website lives
			baseDir: 'app' //we tell brewserSync to go to the app folder because that where index.html lives
		}
	})

	//auto reload thebrowserwhen HTML save, the browser update on his own
	watch('./app/index.html', function() { 
		browserSync.reload();
	});

	//watch('./app/index.html', function() { //var watch, 2argument, ./app going to the root of the app file and then to index.html
	//	gulp.start('html'); //we watch the app/index.html
	//}); //whenever we save a change to html file it will triger out html task(gulp.task(html)..)

	//watch from save change in .css
	watch('./app/assets/styles/**//*.css', function() {
		gulp.start('cssInject'); //use to be gulp.start('styles')
	});

});*/

//new gulp task
//everytime we save a change to any .css file(watch('./app/..'))
//we trigering gulp.start('cssInject')task, and we build it in a way the styles will complete
//show css changes when save and the browser change the .css
/*/gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream()); //stream() - make it availble in the browser after sync it
})*/
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
