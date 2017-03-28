var gulp = require('gulp'),
	imagemin = require('gulp-imagemin');
	del = require('del'), //56 10:28 delete, we install the npm package already
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create(); //57 12:45 we copy it from watch to see preview befor going live

gulp.task('previewDist', function() {
		browserSync.init({ //setup few setting
		//notify: false, //make the box on the right top cornet disapear when save
		server: { //tell the browserSync where our website lives //we tell brewserSync to go to the app folder because that where index.html lives
		baseDir: 'docs' //58 1:00 was 'dist' but we using github server so we changing it to docs
		}
	})
});

gulp.task('deleteDistFolder', ['icons'], function() {
	return del('./docs' /*'./dist' change for github*/); //delete folder when updating the file
});

//we pass the super-important file from app to dist
//57 5:00 reuse/import files to .dist = the web site
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [ //57 9:00 grap any subfolder /** and any files /*, except '!' those files ./app/index.html/..
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!.app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp', //'!' excludetemp folsder himself
		'!./app/temp/**' //'!' exclude the content inside the temp
	]
	return gulp.src(pathsToCopy) 
	.pipe(gulp.dest('./docs' /*58 2:09 './dist' change for github*/));
})

						//the task not begging untill  delete.. icons complete
gulp.task('optimizeImages', ['deleteDistFolder'], function() { //56 5:00 loading the neccery image '!' exsept of this file
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({ //to save loading time whhen go live
		imageminprogressive: true, //optimize image for saving MB/KB jpeg
		interlaced: true,  //gif
		multipass: true //svg
		}))
	.pipe(gulp.dest(/*dist*/"./docs/assets/images")); //move imges to the images folder that we created in this line
});

//58 3:37 change the delete..
gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start('usemin'); //this task beggin usmin
})


					//57 11:00 ['deleteDistFolder'] = mean run the  task after deleteDis..style..scripts completed
//when run in gulp we write gulp 'build' and its run all the files 
gulp.task('usemin', ['styles', 'scripts'], function() { //this task will copy our html to dist folder
	return gulp.src("./app/index.html")
		.pipe(usemin({	//57 1:00 in ./dist/.. adding numbers to the file gulp to be aware when gulp-rev function complete we return it, same for cssnano
			css: [function() { return rev()}, function() { return cssnano() }], //compress css
			js: [function() { return rev() }, function() { return uglify() }] //compress js
		}))
		.pipe(gulp.dest('./docs' /*"./dist"*/));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);