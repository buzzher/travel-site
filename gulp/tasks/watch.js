//watch task
var gulp = require('gulp'),
	watch = require('gulp-watch'), //
	browserSync = require('browser-sync').create(); //57 12:45 we copy it to build.js to se preview before going live

//2arguments, name, what it will do(function)
gulp.task('watch', function() {

	//make auto refresh browser
	browserSync.init({ //setup few setting
		//notify: false, //make the box on the right top cornet disapear when save
		server: { //tell the browserSync where our website lives
			baseDir: 'app' //we tell brewserSync to go to the app folder because that where index.html lives
		}
	})

	//auto reload the browser when HTML save, the browser update on his own
	watch('./app/index.html', function() { 
		browserSync.reload();
	});

	//watch('./app/index.html', function() { //var watch, 2argument, ./app going to the root of the app file and then to index.html
	//	gulp.start('html'); //we watch the app/index.html
	//}); //whenever we save a change to html file it will triger out html task(gulp.task(html)..)

	//watch from save change in .css
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject'); //use to be gulp.start('styles')
	});

//adding the scripts file to the gulp watch..everytime we save from scripts file its refresh in the browser
watch('./app/assets/scripts/**/*.js', function() {
	gulp.start('scriptsRefresh');
})

//new gulp task
//everytime we save a change to any .css file(watch('./app/..'))
//we trigering gulp.start('cssInject')task, and we build it in a way the styles will complete
//show css changes when save and the browser change the .css
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream()); //stream() - make it availble in the browser after sync it
});

//make the browser reload when saving files from the scripts of js after [scripts] generated
//in other word - scriptsRefresh wont start untill scrips file finshed to coloect all his files, then the brwser reload
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
})


});